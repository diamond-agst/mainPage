import React, { useRef, useState } from "react";
import "./styles.scss";
import arrowSlideLeft from "../../assets/images/arrowSlideLeft.svg";
import blueArrowBridge from "../../assets/images/blueArrowBridge.svg";
import "aos/dist/aos.css";

function ScrollExample({ setPositionX }) {
  const [isShownRight, setIsShownRight] = useState(false);
  const [isShownLeft, setIsShownLeft] = useState(false);
  const slider2 = useRef();
  const slider3 = useRef();
  const slider4 = useRef();
  const slider5 = useRef();
  const fixElement = useRef(null);
  const [step, setStep] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  })

  var scElements = document.getElementsByClassName("rotate-element");
  var wrapperSlide = document.getElementsByClassName("wrapperSlide");
  var slideBlockItem = document.getElementsByClassName("slideBlockItem");

  var bridge = document.getElementsByClassName("bridgeBlock")[0];

  const startScroll = bridge.offsetTop;
  const scrollLenth = bridge.clientHeight - window.screen.height;

  const minWidth = 71;
  const maxWidth = 680;
  const widthOffset = maxWidth - minWidth;

  var scElementsLen = scElements.length;
  var scrollTimeout = null;

  for (let i = 0; i < scElementsLen; i++) {
    scElements[i].addEventListener("click", setPosition.bind(null, i), false, {passive: true});
  }

  function setPosition(i) {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    setPositionX(90)
    for (let i = 0; i < scElementsLen; i++) {
      scElements[i].style.setProperty("transition", "all 0.5s ease-out");
    }

    document.documentElement.scrollTop = document.body.scrollTop =
      startScroll + (scrollLenth * (i + 1)) / scElementsLen;

    scrollTimeout = setTimeout(() => {
      for (let i = 0; i < scElementsLen; i++) {
        scElements[i].style.setProperty("transition", "");
      }
    }, 2000);
  }

  const GetSizePercentage = (x) => -3 * Math.abs(x - 1 / 2) + 1.25; //4 and 1.5 for longer gap

  function setElemWidth(el, animPercentage, i) {
    var elAnimPercentage = (animPercentage * scElementsLen - i) / 2;
    var elSizePercentage = GetSizePercentage(elAnimPercentage);
    wrapperSlide[i].style.setProperty("opacity", elSizePercentage);
    if (elSizePercentage < 0) {
      elSizePercentage = 0;
    }
    if (elSizePercentage > 1) {
      elSizePercentage = 1;
    }

    if(elSizePercentage > 0.01){
      slideBlockItem[i].style.setProperty("display", "none");
    }else{
      slideBlockItem[i].style.setProperty("display", "flex");
    }
    if(i === 0){
      try{
        if(elAnimPercentage > 0.39){
          setPositionX(90)
        }else{
          setPositionX(elSizePercentage * 100)
        }
      }catch{
        console.error()
      }
    }

    if(elAnimPercentage > 0.5){
      setStep(prevState => ({
        ...prevState,
        [i]: true
      }))
    }else if(elAnimPercentage < 0.5){
      setStep(prevState => ({
        ...prevState,
        [i]: false
      }))
    }

    var width = minWidth + widthOffset * elSizePercentage;
    el.style.setProperty("width", width + "px");
  }

  window.addEventListener(
    "scroll",
    () => {
      var animOffset = window.pageYOffset - startScroll;

      if (animOffset < 0) {
        animOffset = 0;
      }
      if (animOffset > scrollLenth) {
        animOffset = scrollLenth;
      }

      var animPercentage = animOffset / scrollLenth;
      
      for (let i = 0; i < scElements.length; i++) {
        const el = scElements[i];
        setElemWidth(el, animPercentage, i);
        continue;
      }
    },
    false, {passive: true}
  );

  return (
    <div ref={fixElement} className="fix-element">
      <div
        className="rotate-element openSlideItem"
        style={{
          Height: 400,
          minWidth: 10,
          marginRight: 21,
          background: "#333333",
        }}
      >
        <div
          className="slideBlockItem"
          onClick={() => setPositionX(90)}
          style={{
            position: "absolute",
            opacity: 1,
            zIndex: 999,
            height: "inherit",
          }}
        >
          <div ref={slider2} className={step[0] ? "slider1Open" : "slider1"}>
            <h1>1</h1>
            <h1>CRYPTO</h1>
          </div>
        </div>
        <div
          className="wrapperSlide"
          style={{
            display: "flex",
            background: "#212121",
            position: "relative",
            zIndex: 99999,
          }}
        >
          <div className="wrapperSlideOne">
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                width: 580,
              }}
            >
              <div className="arrowBlock">
                <img alt="" style={{"opacity": 0}} src={arrowSlideLeft} />
              </div>
              <div />
              <div
                className="openSlideText"
                style={{ padding: "73px 0px 73px 0px" }}
              >
                <h1>1. CRYPTO</h1>
                <p>
                  Access to wide audience in 150+ countries with optimized
                  conversion rate which became a proven way to grow revenue.
                  Allow your customers to buy your token or any crypto asset on
                  your platform and convert visitors into holders.
                </p>
              </div>
            </div>
            <div 
                style={{ transform: "rotate(180deg)" }} className="arrowBlock">
              <img alt="" onMouseEnter={() => setIsShownRight(true)}
                onMouseLeave={() => setIsShownRight(false)}  onClick={() => setPosition(1)} src={isShownRight ? blueArrowBridge : arrowSlideLeft} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className="rotate-element openSlideItem"
        style={{
          Height: 400,
          minWidth: 10,
          marginRight: 21,
          background: "#333333",
        }}
      >
        <div
          className="slideBlockItem" onClick={() => setPositionX(90)}
          style={{
            position: "absolute",
            opacity: 1,
            zIndex: 999,
            height: "inherit",
          }}
        >
          <div ref={slider2}  className={step[1] ? "slider2Open" : "slider2"}>
            <h1>2</h1>
            <h1>NFT</h1>
          </div>
        </div>
        <div
          className="wrapperSlide"
          style={{
            display: "flex",
            background: "#212121",
            position: "relative",
            zIndex: 99999,
          }}
        >
          <div className="wrapperSlideTwo">
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                width: 580,
              }}
            >
              <div className="arrowBlock">
              <img alt="" onMouseEnter={() => setIsShownLeft(true)}
                onMouseLeave={() => setIsShownLeft(false)}  onClick={() => setPosition(0)} src={isShownLeft ? blueArrowBridge : arrowSlideLeft} />
              </div>
              <div />
              <div
                className="openSlideText"
                style={{ padding: "73px 0px 73px 0px" }}
              >
                <h1>2. NFT</h1>
                <p style={{ marginBottom: 28 }}>
                  Solution for NFT marketplaces, GameFi platforms and digital
                  artists to sell NFT to bank card owners. With Indacoin you can
                  sell NFT with simplified onboarding and verification within 5
                  minutes.
                </p>
              </div>
            </div>
            <div style={{ transform: "rotate(180deg)" }} className="arrowBlock">
            <img alt="" onMouseEnter={() => setIsShownRight(true)}
                onMouseLeave={() => setIsShownRight(false)}  onClick={() => setPosition(2)} src={isShownRight ? blueArrowBridge : arrowSlideLeft} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className="rotate-element openSlideItem"
        style={{
          Height: 400,
          minWidth: 10,
          marginRight: 21,
          background: "#333333",
        }}
      >
        <div
          className="slideBlockItem" onClick={() => setPositionX(90)}
          style={{
            position: "absolute",
            opacity: 1,
            zIndex: 999,
            height: "inherit",
          }}
        >
          <div ref={slider3} className={step[2] ? "slider3Open" : "slider3"}>
            <h1>3</h1>
            <h1>Domain</h1>
          </div>
        </div>
        <div
          className="wrapperSlide"
          style={{
            display: "flex",
            background: "#212121",
            position: "relative",
            zIndex: 99999,
          }}
        >
          <div className="wrapperSlideThree">
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                width: 580,
              }}
            >
              <div className="arrowBlock">
              <img alt="" onMouseEnter={() => setIsShownLeft(true)}
                onMouseLeave={() => setIsShownLeft(false)}  onClick={() => setPosition(1)} src={isShownLeft ? blueArrowBridge : arrowSlideLeft} />
              </div>
              <div />
              <div
                className="openSlideText"
                style={{ padding: "73px 0px 73px 0px" }}
              >
                <h1>3. Domain</h1>
                <p>
                  Easy way to register a name for a website, wallet or NFT in a
                  decentralized way with a total control of the domain. We allow
                  to do both: buy a web3 domain with Visa or Mastercard or
                  replace a wallet with a domain name.
                </p>
              </div>
            </div>
            <div style={{ transform: "rotate(180deg)" }} className="arrowBlock">
            <img alt="" onMouseEnter={() => setIsShownRight(true)}
                onMouseLeave={() => setIsShownRight(false)}  onClick={() => setPosition(3)} src={isShownRight ? blueArrowBridge : arrowSlideLeft} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className="rotate-element openSlideItem"
        style={{
          Height: 400,
          minWidth: 10,
          marginRight: 21,
          background: "#333333",
        }}
      >
        <div
          className="slideBlockItem" onClick={() => setPositionX(90)}
          style={{
            position: "absolute",
            opacity: 1,
            zIndex: 999,
            height: "inherit",
          }}
        >
          <div ref={slider4} className={step[3] ? "slider4Open" : "slider4"}>
            <h1>4</h1>
            <h1>Staking</h1>
          </div>
        </div>
        <div
          className="wrapperSlide"
          style={{
            display: "flex",
            background: "#212121",
            position: "relative",
            zIndex: 99999,
          }}
        >
          <div className="wrapperSlideFour">
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                width: 580,
              }}
            >
              <div className="arrowBlock">
              <img alt="" onMouseEnter={() => setIsShownLeft(true)}
                onMouseLeave={() => setIsShownLeft(false)}  onClick={() => setPosition(2)} src={isShownLeft ? blueArrowBridge : arrowSlideLeft} />
              </div>
              <div />
              <div
                className="openSlideText"
                style={{ padding: "73px 0px 73px 0px" }}
              >
                <h1>4. Staking</h1>
                <p>
                  Combination of onramp and smart contract interaction to ensure
                  smooth customer journey from fiat to staked tokens. This way
                  your users can shorten their way to a final destination and
                  become your long-time supporters.
                </p>
              </div>
            </div>
            <div style={{ transform: "rotate(180deg)" }} className="arrowBlock">
            <img alt="" onMouseEnter={() => setIsShownRight(true)}
                onMouseLeave={() => setIsShownRight(false)}  onClick={() => setPosition(4)} src={isShownRight ? blueArrowBridge : arrowSlideLeft} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className="rotate-element openSlideItem"
        style={{
          Height: 400,
          minWidth: 10,
          marginRight: 21,
          background: "#333333",
        }}
      >
        <div
          className="slideBlockItem" onClick={() => setPositionX(90)}
          style={{
            position: "absolute",
            opacity: 1,
            zIndex: 999,
            height: "inherit",
          }}
        >
          <div ref={slider5} className={step[4] ? "slider5Open" : "slider5"}>
            <h1>5</h1>
            <h1>Funding</h1>
          </div>
        </div>
        <div
          className="wrapperSlide"
          style={{
            display: "flex",
            background: "#212121",
            position: "relative",
            zIndex: 99999,
          }}
        >
          <div className="wrapperSlideFive" style={{width: "auto"}}>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                width: 580,
              }}
            >
              <div className="arrowBlock">
              <img alt="" onMouseEnter={() => setIsShownLeft(true)}
                onMouseLeave={() => setIsShownLeft(false)} onClick={() => setPosition(3)} src={isShownLeft ? blueArrowBridge : arrowSlideLeft} />
              </div>
              <div />
              <div
                className="openSlideText"
                style={{ padding: "73px 0px 73px 0px" }}
              >
                <h1>5. Funding</h1>
                <p style={{ marginBottom: 25 }}>
                  Bridge for traditional investors to widen your audience for
                  one of the most important milestones in company history —
                  funding your idea. Give more options for your potential
                  investors to support you.
                </p>
              </div>
            </div>
            <div className="arrowBlock">
                <img alt="" style={{"opacity": 0}} src={arrowSlideLeft} />
              </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollExample;
