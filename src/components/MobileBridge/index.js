import React, { useState } from "react";
import "./styles.scss"
import ArrowsDownMobile from "../../assets/images/ArrowsDownMobile.svg"
import backgeoundMobileBridge1 from "../../assets/images/backgroundMobileBridge1.png"
import backgroundMobileBridgeOpen1 from "../../assets/images/backgroundMobileBridgeOpen1.png"
import backgeoundMobileBridge2 from "../../assets/images/backgroundMobileBridge2.png"
import backgroundMobileBridgeOpen2 from "../../assets/images/backgroundMobileBridgeOpen2.png"
import backgeoundMobileBridge3 from "../../assets/images/backgroundMobileBridge3.png"
import backgroundMobileBridgeOpen3 from "../../assets/images/backgroundMobileBridgeOpen3.png"
import backgeoundMobileBridge4 from "../../assets/images/backgroundMobileBridge4.png"
import backgroundMobileBridgeOpen4 from "../../assets/images/backgroundMobileBridgeOpen4.png"
import backgeoundMobileBridge5 from "../../assets/images/backgroundMobileBridge5.png"
import backgroundMobileBridgeOpen5 from "../../assets/images/backgroundMobileBridgeOpen5.png"
import backgroundMobileBridgeVer2 from "../../assets/images/backgroundMobileBridgeVer2.png"
import backgroundMobileBridgeVer3 from "../../assets/images/backgroundMobileBridgeVer3.png"
import backgroundMobileBridgeVer4 from "../../assets/images/backgroundMobileBridgeVer4.png"
import backgroundMobileBridgeVer5 from "../../assets/images/backgroundMobileBridgeVer5.png"

function MobileBridge() {
    const [step, setStep] = useState(6)

  return (
    <div className="mobileBridge" id="block2">
        <div className="mobileBridgeArrow">
            <img alt="" src={ArrowsDownMobile}/>
            <h1>tap to learn more</h1>
        </div>
        <div className="mobileBridgeContent">
            <div style={step === 1 ? {backgroundImage: `url(${backgroundMobileBridgeOpen1})`} : {background: "#333333"}}
            onClick={() => {
                if(step === 1){
                    setStep(6)
                }else{
                  setStep(1)  
                }
                }}  className="mobileBridgeItem">
                <div style={step !== 1 ? {backgroundImage: `url(${backgeoundMobileBridge1})`} : null} 
                className="mobileBridgeHeading">
                    <h1 style={step === 1 ? {color: "#fff"} : null}>Crypto</h1>
                    <h1 style={step === 1 ? {color: "#fff", marginRight: 8} : {marginRight: 8} }>1</h1>
                </div>
                {step === 1 &&
                    <div className="mobileBridgeText">
                        <p>Access to wide audience in 150+ countries with optimized conversion rate which became a proven way to grow revenue. Allow your customers to buy your token or any crypto asset on your platform and convert visitors into holders.</p>
                    </div>
                }
                
            </div>
            <div style={step === 2 ? {backgroundImage: `url(${backgroundMobileBridgeOpen2})`} : {background: "#333333"}} 
            onClick={() => {
                if(step === 2){
                    setStep(6)
                }else{
                  setStep(2)  
                }
                }} 
                className="mobileBridgeItem">
                <div style={step !== 2 ? step === 1 ? {backgroundImage: `url(${backgroundMobileBridgeVer2})`} : {backgroundImage: `url(${backgeoundMobileBridge2})`} : null} className="mobileBridgeHeading">
                    <h1 style={step === 2 ? {color: "#fff"} : null}>NFT</h1>
                    <h1 style={step === 2 ? {color: "#fff"} : null}>2</h1>
                </div>
            {step === 2 &&
                <div className="mobileBridgeText">
                    <p>Solution for NFT marketplaces, GameFi platforms and digital artists to sell NFT to bank card owners. With Indacoin you can sell NFT with simplified onboarding and verification within 5 minutes.</p>
                </div>
            }
            </div>  
            <div style={step === 3 ? {backgroundImage: `url(${backgroundMobileBridgeOpen3})`} : {background: "#333333"}}
            onClick={() => {
                if(step === 3){
                    setStep(6)
                }else{
                  setStep(3)  
                }
                }} 
            className="mobileBridgeItem">
                <div style={step !== 3 ? step <= 2 ? {backgroundImage: `url(${backgroundMobileBridgeVer3})`} : {backgroundImage: `url(${backgeoundMobileBridge3})`} : null} className="mobileBridgeHeading">
                    <h1 style={step === 3 ? {color: "#fff"} : null}>Domain</h1>
                    <h1 style={step === 3 ? {color: "#fff"} : null}>3</h1>
                </div>
                {step === 3 &&
                    <div className="mobileBridgeText">
                        <p>Easy way to register a name for a website, wallet or NFT in a decentralized way with a total control of the domain. We allow to do both: buy a web3 domain with Visa or Mastercard or replace a wallet with a domain name.</p>
                    </div>
                }
                
            </div>
            <div style={step === 4 ? {backgroundImage: `url(${backgroundMobileBridgeOpen4})`} : {background: "#333333"}}
            onClick={() => {
                if(step === 4){
                    setStep(6)
                }else{
                  setStep(4)  
                }
                }} 
            className="mobileBridgeItem">
                <div style={step !== 4 ? step <= 3 ? {backgroundImage: `url(${backgroundMobileBridgeVer4})`} : {backgroundImage: `url(${backgeoundMobileBridge4})`} : null} className="mobileBridgeHeading">
                    <h1 style={step === 4 ? {color: "#fff"} : null}>Staking</h1>
                    <h1 style={step === 4 ? {color: "#fff"} : null}>4</h1>
                </div>
                {step === 4 &&
                    <div className="mobileBridgeText">
                        <p>Combination of onramp and smart contract interaction to ensure smooth customer journey from fiat to staked tokens. This way your users can shorten their way to a final destination and become your long-time supporters.</p>
                    </div>
                }
                
            </div>
            <div style={step === 5 ? {backgroundImage: `url(${backgroundMobileBridgeOpen5})`} : {background: "#333333"}}
            onClick={() => {
                if(step === 5){
                    setStep(6)
                }else{
                  setStep(5)  
                }
                }} 
                className="mobileBridgeItem">
                <div style={step !== 5 ? step <= 4 ? {backgroundImage: `url(${backgroundMobileBridgeVer5})`} : {backgroundImage: `url(${backgeoundMobileBridge5})`} : null} className="mobileBridgeHeading">
                    <h1 style={step === 5 ? {color: "#fff"} : null}>Funding</h1>
                    <h1 style={step === 5 ? {color: "#fff"} : null}>5</h1>
                </div>
                {step === 5 &&
                    <div className="mobileBridgeText">
                        <p>Bridge for traditional investors to widen your audience for one of the most important milestones in company history — funding your idea. Give more options for your potential investors to support you.</p>
                    </div>
                }
                
            </div>
        </div>
    </div>
  );
}

export default MobileBridge;
