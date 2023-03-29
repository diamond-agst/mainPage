import React from "react";
import "./styles.scss"
import twitter from "../../assets/images/twitter.svg"
import Telegram from "../../assets/images/Telegram.svg"
import Medium from "../../assets/images/Medium.svg"

function Footer() {
  return (
    <div className="footer">
        <div className="footerWrapper">
            <div className="footerLeft">
                <p>Indacoin OU, Registry code: 14798473<br/>
                Address: Poordi 3-63, Tallinn, Estonia, 10156<br/>
                Operating license: FVT000145</p>
                <h1>Believe in crypto since 2014</h1>
            </div>
            <div className="contactBlock">
                <p>Contact us: <a href="mailto:support@indacoin.com">support@indacoin.com</a></p>
                <div className="socialMedia">
                    <a style={{textDecoration: "none"}} rel="noreferrer" href="https://twitter.com/Indacoin" target="_blank">
                        <img alt="" src={twitter}/>
                    </a>
                    <a style={{textDecoration: "none"}} rel="noreferrer" href="https://t.me/indacoin_limited" target="_blank">
                       <img alt="" src={Telegram}/> 
                    </a>
                    <a style={{textDecoration: "none"}} rel="noreferrer" href="https://medium.com/indacoin" target="_blank">
                        <img alt="" src={Medium}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
