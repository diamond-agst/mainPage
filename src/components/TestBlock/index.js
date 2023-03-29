import React from "react";
import "./styles.scss"
import { Widget } from '@typeform/embed-react'
import { PopupButton } from '@typeform/embed-react'

function TestBlock() {
  return (
    <div className="testBlock">
        <div className="testHeading">
            <h1>DO you even need onramp?</h1>
            <p>Find out if you will benefit from fiat gateway<br/> and get personalized solution with <b>5% discount</b></p>
        </div>
        <div style={{boxShadow: "0px 0px 28px 1px rgba(52, 99, 248, 0.45)", borderRadius: 32, overflow: "hidden",
                      border: "2.5px solid #3463F8" }}>
                    <div className="mobielBlockTest" style={{height: 714}}>
                      <div></div>
                      <h1 className="mobielBlockTestText">B2B landing page</h1>
                      <PopupButton id="https://form.typeform.com/to/ZAWP2bvG">
                        Start
                      </PopupButton>
                      
                    </div>
             <Widget onSubmit={() => document.body.style.overflow = "hidden"}
                    disableScroll={true} id="https://form.typeform.com/to/ZAWP2bvG" style={{ width: "860px", height: "720px", marginTop: "-10px" }} className="typeForm" />
        </div>
    </div>
  );
}

export default TestBlock;
