import React from "react";
import "./styles.scss"
import fastFirst from "../../assets/images/fastFirst.png"
import fastSecond from "../../assets/images/fastSecond.png"
import fastThird from "../../assets/images/fastThird.png"

function FastBlock() {
  return (
    <div className="fastWrapper">
        <div className="fastBlocks">
            <div className="fastBlock">
                <div className="fastBackground" style={{backgroundImage: `url(${fastFirst})`}}>
                    <div className="headingMobile">
                        <h1>fast</h1>
                    </div>  
                    <div className="textBlock">
                        <p>Place your order in 2 minutes</p>
                        <p>Easily pick the crypto you want,<br/> confirm the purchase and get<br/> started even without a wallet.</p>
                    </div>
                    <div className="heading">
                        <h1>fast</h1>
                    </div>  
                </div>
            </div>
            <div className="fastBlock">
                <div className="fastBackground" style={{backgroundImage: `url(${fastSecond})`}}>
                    <div className="heading">
                        <h1>friendly</h1>
                    </div>
                    <div className="headingMobile">
                        <h1>friendly</h1>
                    </div>  
                    <div className="textBlock">
                        <p>Get 24/7 support</p>
                        <p>Indacoin provides user-friendly<br/> experience and 24/7 tech-<br/>support in case of emergency.</p>
                    </div>
                </div> 
            </div>
            <div className="fastBlock">
                <div className="fastBackground" style={{backgroundImage: `url(${fastThird})`}}>
                    <div className="headingMobile">
                        <h1>fair</h1>
                    </div> 
                    <div className="textBlock">
                        <p>Secure fees-upfront approach</p>
                        <p>Fees are included from the start, so<br/> we don’t charge anything extra, and<br/> prevent fraud to make crypto safer.</p>
                    </div>
                    <div className="heading">
                        <h1>fair</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FastBlock;
