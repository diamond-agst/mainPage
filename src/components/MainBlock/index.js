import React from "react";
import "./styles.scss"
import HeroPicture from "../../assets/images/mainImage.png"
import Arrows from "../../assets/images/Arrows.svg"
import Support from "../../assets/images/Support.svg"
import { Link } from "react-scroll";

function MainBlock() {
  return (
    <div className="mainBlock">
        <div className="wrapperMainBlock" style={{padding: "100px 0px 76px 0px"}}>
            <div className="mainTextBlock" style={{justifyContent: "center"}}>
                <h1>Boost<br/> your sales</h1>
                <p>Onramp focused on seamless transition<br/> from web2 ecosystem to web3 universe</p>
                <Link smooth={true} to="callBlock"><button>Contact Us</button></Link>
            </div>
            <div style={{cursor: "pointer"}} onClick={() => document.getElementById('callBlock').scrollIntoView({ behavior: 'smooth' })} className="mainImg">
                <img alt="" src={HeroPicture}/>
            </div>
        </div>
        <div className="bottomBlock">
            <div/>
            <div style={{cursor: "pointer"}}>
            <Link smooth={true} to="block2">
                <img alt="" width={36} height={38} src={Arrows}/>
            </Link>
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

export default MainBlock;
