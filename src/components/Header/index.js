import React, { useEffect, useState } from "react";
import "./styles.scss"
import IndacoinLogo from "../../assets/images/IndacoinLogo.svg"
import burder from "../../assets/images/burder.svg"
import IndacoinLogoBlack from "../../assets/images/indacoinLogoBlack.svg"
import CloseIcon from "../../assets/images/CloseIcon.svg"
import supportBlack from "../../assets/images/supportWhite.svg"
import accountLogo from "../../assets/images/accountLogo.svg"
import accountBlack from "../../assets/images/accountBlack.svg"
import { Link } from "react-scroll"
import { wallet_api } from "../../tools/constants";

function Header({buyCrypto}) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(open){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflowY = "scroll"
        }
    }, [open])

  return (
    <div className="header">
        <div className="headerWrapper">
            <div className="leftHeaderBlock">
                <div className="headerLogo">
                <a style={{textDecoration: "none"}} href="/">
                    <img alt="" width={151} height={20} src={IndacoinLogo}/>
                    </a>
                </div>
                <div className="headerMenu">
                    <a style={{textDecoration: "none"}} href="/personal"><p style={!buyCrypto ? {color: "#3463F8"} : null}>Personal</p></a>
                    <a style={{textDecoration: "none"}} href="https://gw.indacoin.io/"><p>Buy crypto</p></a>
                    {buyCrypto ? 
                    <a style={{textDecoration: "none"}} href="mailto:support@indacoin.com"><p>Contact us</p></a>
                    :
                    <Link smooth={true} to="blockForm">
                        <p>Contact us</p>
                    </Link>
                }

                    
                </div>
            </div>
            <div>
                <div onClick={() => setOpen(true)} style={{cursor: "pointer"}}>
                    <img alt="" className="burderIcon" width={18} height={12} src={burder}/>
                </div>
                <div onClick={() => window.open(`${wallet_api}`, "_blank")} style={{cursor: "pointer"}}>
                    <img alt="" className="accountIcon" width={16} height={18} src={accountLogo}/>
                </div>
                
            </div>
        </div>
        <div className={open ? "mobileMenu openMenu" : "mobileMenu"}>
            <div className="menuHeading">
                <a href="/">
                  <img alt="" width={151} height={20} src={IndacoinLogoBlack}/>  
                </a>
                
                <div onClick={() => setOpen(false)}>
                  <img alt="" src={CloseIcon}/>  
                </div>
                
            </div>
            <div className="menuItems">
                <div>
                <a style={{textDecoration: "none"}} href="/personal">
                    <h1 style={buyCrypto ? null : {color: "#3463F8"}}>Personal</h1>
                </a>
                </div>
                <div>
                    <a style={{textDecoration: "none"}} href="https://gw.indacoin.io/">
                        <h1>Buy crypto</h1>
                    </a>
                </div>
                <div>
                <a onClick={() => setOpen(false)} style={{textDecoration: "none"}} 
                    href={buyCrypto ? "mailto:support@indacoin.com" : "#blockForm"}>
                    <h1>Contact us</h1>
                </a>
                </div>
            </div>
            <div className="menuBottom">
            <a href={wallet_api} rel="noreferrer" target="_blank" style={{textDecoration: "none"}}>
                <div>
                    <img alt="" src={accountBlack}/>
                    <h1>Personal account</h1>
                </div>
                </a>
            <a href="https://t.me/ellytinger" rel="noreferrer" target="_blank" style={{textDecoration: "none"}}>
                <div>
                    <img alt="" src={supportBlack}/>
                    <h1>Contact support</h1>
                </div>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Header;
