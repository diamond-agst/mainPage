import React, { useEffect, useState} from "react";
import "./styles.scss"
import ArrowsPortfolio from "../../assets/images/ArrowsPortfolio.svg"
import portfolioImage from "../../assets/images/portfolioImage.png"
import MacBookSend from "../../assets/images/MacBookSend.png"
import portfolioImag2 from "../../assets/images/porfolioImage2.png"
import portfolioImage3 from "../../assets/images/porfolioImage3.png"
import portfolioImage4 from "../../assets/images/portfolioImage4.png"
import mobileProfile1 from "../../assets/images/mobileProfile1.png"
import { wallet_api } from "../../tools/constants";

function Portfolio() {
    const [pointOne, setPointOne] = useState(false)
    const [pointTwo, setPointTwo] = useState(false)
    const [pointThree, setPointThree] = useState(false)
    const [pointFouth, setPointFouth] = useState(false)
    const [imgOne, setImgOne] = useState(1)
    const [sendBlock, setSendBlock] = useState(false)
    const [imgsLoaded, setImgsLoaded] = useState(false)

    useEffect(() => {
        const images = [
            ArrowsPortfolio,
            portfolioImage,
            MacBookSend,
            portfolioImag2,
            portfolioImage3,
            portfolioImage4,
            mobileProfile1
        ]
        const loadImage = image => {
          return new Promise((resolve, reject) => {
            const loadImg = new Image()
            loadImg.src = image
            loadImg.onload = () =>
              setTimeout(() => {
                resolve(image)
              }, 2000)
    
            loadImg.onerror = err => reject(err)
          })
        }
    
        Promise.all(images.map(image => loadImage(image)))
          .then(() => setImgsLoaded(true))
          .catch(err => console.log("Failed to load images", err))
      }, [])

  return (
    <div className="portfolioWrapper">
        <div className="portfolioBlock">
            <div className="headingPortfolio">
                <h1 className="headingPortfolioText">DIGITAL PORTFOLIO<br/>FOR YOUR CRYPTO needs</h1>
                <h1 className="headingPortfolioMobile">your own portfolio</h1>
                <div className="portfolioSubtitle" style={{display: "flex"}}>
                    <img alt="" width={24} height={25} src={ArrowsPortfolio}/>
                    <p className="checkText">check what’s hidden behind the dots</p>
                    <p className="mobileText">tap on the menu to learn more</p>
                </div>
            </div>
            <div className="portfolioBlock contentPortfolio">
                {sendBlock ? <img alt="" src={MacBookSend}/> : <img alt="" src={portfolioImage}/>}
                <div>
                    <div 
                    className="ellipdeBlock1"
                    onMouseEnter={() => {
                        setPointOne(true)
                        setSendBlock(true)
                    }} onMouseLeave={() => setPointOne(false)} 
                    style={{width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center"}}>
                      <div className="ellipse1"></div>   
                    </div>
                    
                    <div style={pointOne ? {transform : "scale(1)"} : {transform : "scale(0)"}} className="hoverBlock1">
                        <h1>Send</h1>
                        <p>Explore your possibilities outside<br/> Indacoin — stake, send and spend<br/> crypto the way you want to.</p>
                    </div>     
                </div>
                <div>
                <div 
                    className="ellipdeBlock2"
                    onMouseEnter={() => {
                        setPointTwo(true)
                        setSendBlock(false)
                    }} onMouseLeave={() => setPointTwo(false)} 
                    style={{width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <div className="ellipse2"></div> 
                    </div>
                    
                        <div style={pointTwo ? {transform : "scale(1)"} : {transform : "scale(0)"}} className="hoverBlock2">
                            <h1>Buy</h1>
                            <p>Pick any crypto you want and add it<br/> to your balance. For regular users it<br/> takes less than 2 minutes.</p>
                        </div>  
                       
                </div>
                <div>
                    <div 
                    className="ellipdeBlock3"
                    onMouseEnter={() => {
                        setPointThree(true)
                        setSendBlock(false)
                    }} onMouseLeave={() => setPointThree(false)} 
                    style={{width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <div className="ellipse3"></div> 
                    </div>
                    
                        <div style={pointThree ? {transform : "scale(1)"} : {transform : "scale(0)"}} className="hoverBlock3">
                            <h1>Trends</h1>
                            <p>See what others are buying and<br/> how the market is doing to make<br/> a well-thought decision</p>
                        </div>  
                </div>
                <div>
                <div 
                    className="ellipdeBlock4"
                    onMouseEnter={() => {
                        setPointFouth(true)
                        setSendBlock(false)
                    }} onMouseLeave={() => setPointFouth(false)} 
                    style={{width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <div className="ellipse4"></div> 
                    </div>
                    
                        <div style={pointFouth ? {transform : "scale(1)"} : {transform : "scale(0)"}} className="hoverBlock4">
                            <h1>Portfolio and assets</h1>
                            <p>Easily check stats like how much<br/> crypto you have and what your<br/> portfolio looks like.</p>
                        </div>    
                </div>
            </div>
            <div className="portfolioMobile">
            {imgsLoaded ?
                <div style={{position: "relative"}}>
                        {imgOne === 1 && <img alt="" width={280} src={mobileProfile1}/>}
                        {imgOne === 3 && <img alt="" width={280} src={portfolioImag2}/>}
                        {imgOne === 2 && <img alt="" width={280} src={portfolioImage3}/>}
                        {imgOne === 4 && <img alt="" width={280} src={portfolioImage4}/>}
                        
                    
                    <div>
                        <div 
                        className="ellipdeBlockMobile1"
                        onMouseEnter={() => {
                            setPointOne(true)
                            setImgOne(1)
                        }} onMouseLeave={() => setPointOne(false)} 
                        style={{width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="ellipseMobile1"></div>   
                        </div>
                        <div style={pointOne ? {transform : "scale(1)"} : {transform : "scale(0)"}} 
                        className="hoverBlockMobile1">
                            <h1>Buy</h1>
                            <p>Pick any crypto you want<br/> and add it to your balance.<br/> For regular users it takes<br/> less than 2 minutes.</p>
                        </div>     
                    </div>
                    <div>
                        <div 
                        className="ellipdeBlockMobile2"
                        onMouseEnter={() => {
                            setPointTwo(true)
                            setImgOne(2)
                        }} onMouseLeave={() => setPointTwo(false)} 
                        style={{width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="ellipseMobile2"></div>   
                        </div>
                        <div style={pointTwo ? {transform : "scale(1)"} : {transform : "scale(0)"}} 
                        className="hoverBlockMobile2">
                            <h1>Send</h1>
                            <p>Explore your possibilities<br/> outside Indacoin — stake,<br/> send and spend crypto the<br/> way you want to.</p>
                        </div>     
                    </div>
                    <div>
                        <div 
                        className="ellipdeBlockMobile3"
                        onMouseEnter={() => {
                            setPointThree(true)
                            setImgOne(3)
                        }} onMouseLeave={() => setPointThree(false)} 
                        style={{width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="ellipseMobile3"></div>   
                        </div>
                        <div style={pointThree ? {transform : "scale(1)"} : {transform : "scale(0)"}} 
                        className="hoverBlockMobile3">
                            <h1>Trends</h1>
                            <p>See what others are<br/> buying and how the<br/> market is doing to make<br/> a well-thought decision</p>
                        </div>     
                    </div>
                    <div>
                        <div 
                        className="ellipdeBlockMobile4"
                        onMouseEnter={() => {
                            setPointFouth(true)
                            setImgOne(4)
                        }} onMouseLeave={() => setPointFouth(false)} 
                        style={{width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="ellipseMobile4"></div>   
                        </div>
                        <div style={pointFouth ? {transform : "scale(1)"} : {transform : "scale(0)"}} 
                        className="hoverBlockMobile4">
                            <h1>Portfolio and assets</h1>
                            <p>Easily check stats like how<br/> much crypto you have and<br/> what your portfolio looks<br/> like.</p>
                        </div>     
                    </div>
                </div> :
                <div style={{display: "flex", alignItems: "center", height: 584}}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>}
            </div>
            <div className="buttonPortfolio">
                <a href={wallet_api}><button>go to the wallet</button></a>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
