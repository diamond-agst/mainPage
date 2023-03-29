import React from "react";
import "./styles.scss"
import ArrowsRightFrame from "../../assets/images/ArrowsRightFrame.svg"
import Support from "../../assets/images/Support.svg"
import mobileFrame from "../../assets/images/mobileFrame.png"
import OrderBlock from "../OrderBlock";

function FrameBlock() {
  return (
    <div className="mainBlock">
        <div className="wrapperMainBlock frameBlock">
                <div className="mainTextBlock">
                  <div></div>
                  <div className="mainButtonBlock">
                    <h1>Be first.<br/> Buy first.</h1>
                  <p>Fuel your portfolio with crypto:<br/> fast, friendly, fair.</p>
                  <a href="https://gw.indacoin.io/" rel="noreferrer" target="_blank"><button>Buy crypto</button></a>
                  </div>
                
                <div style={{cursor: "pointer"}}>
                  <div className="bottomButton">
                    <a style={{textDecoration: "none"}} href="/business" target="_blank">
                <div className="buySubtitle">
                    <img alt="" width={18} height={18} src={ArrowsRightFrame}/>
                    <p>or get a solution for your business</p>  
                </div>
                </a>
                  </div>
                
            </div>
                </div>
                <div className="mainImg">
                <div className="iframeindacoin">
                  <OrderBlock/>
                </div>
                    <a href="https://gw.indacoin.io/" rel="noreferrer" target="_blank">
                      <img alt="" className="mobileFrame" src={mobileFrame}/>
                    </a>
                    
            </div>  
        </div>
        <div className="bottomBlockBuy">
            <div/>
            <div style={{cursor: "pointer"}}>
            <a style={{textDecoration: "none"}} href="/business" target="_blank">
                <div className="buySubtitle">
                    <img alt="" width={18} height={18} src={ArrowsRightFrame}/>
                    <p>or get a solution for your business</p>  
                </div>
            </a>
            </div>
            <div className="mainSupport">
                <a href="https://t.me/ellytinger" rel="noreferrer" target="_blank">
                  <img alt="" width={24} height={24} src={Support}/>  
                </a>
            </div>
        </div>
    </div>
  );
}

export default FrameBlock;
