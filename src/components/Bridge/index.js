import React, { useEffect, useState } from "react";
import "./styles.scss";
import Arrow from "../../assets/images/Arrow.svg";
import MobileBridge from "../MobileBridge";
import ArrowsBridge from "../../assets/images/ArrowsBlock2.svg"
import 'aos/dist/aos.css';
import ScrollExample from "../ScrollExample";

function Bridge() {
  const [styleAbsolute, setStyleAbsolute] = useState();
  const [positionX, setPositionX] = useState()
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    if(positionX > 99){
      setPositionX(99)
    }
  }, [positionX])

  return (
    
    <div className="bridgeBlock" id="block2">
      <div className="wrapperBridge">
        <div className="bridgeTextBlock">
        {styleAbsolute && <div></div>}
          <div
            style={positionX && positionX !== 0 ? {
              position: "absolute",
              top: `${(positionX / 3.5) + 10}%`,
              left: (positionX * -1 * 3),
              transform: `rotate(${(positionX * -1) }deg)`,
            } : {
              position: "relative",
              top: 0,
              left: 0,
              transform: `none`,
            }}
            className="bridgeTextBlockTop"
          >
            <h1>
              Indacoin is your bridge
              <br />{" "}
              <span style={{ fontSize: 48, color: "rgba(52, 99, 248, 1)" }}>
                from fiat to:
              </span>
            </h1>
            {positionX &&
              <img
              alt=""
              width={680}
              className="arrowBridge"
              style={
                  { opacity: 1 - (positionX / 100 + 0.1)}
              }
              src={Arrow}
            />
            }
          </div>
          {!positionX && 
          <div className="bridgeArrow">
            <img alt="" src={ArrowsBridge}/>
            <p>scroll down to view all options</p>
          </div>}
        </div>
        <div className="mobileSlideBlock" style={{width: "100%"}}>
          <MobileBridge/>
        </div>
        <div style={{height: "100%",
    alignItems: "center"}} className="slideBlock">
        {
          show &&
        <div style={{height: "640px", display: "flex",
            alignItems: "flex-end"
        }}>
          <ScrollExample setStyleAbsolute={setStyleAbsolute} setPositionX={setPositionX} positionX={positionX}/>
        </div>}
        </div>
        
      </div>
    </div>

  );
}

export default Bridge;
