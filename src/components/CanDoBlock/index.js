import React, {useState, useEffect} from "react";
import "./styles.scss"
import open from "../../assets/images/openPlus.svg"
import CloseIcon from "../../assets/images/CloseIcon.svg"
import CanDoMobile1 from "../../assets/images/canDoMobile1.png"
import CanDoMobile2 from "../../assets/images/CanDoMobile2.png"
import CanDoMobile3 from "../../assets/images/CanDoMobile3.png"
import CanDoMobile4 from "../../assets/images/CanDoMobile4.png"
import CanDoMobile5 from "../../assets/images/CanDoMobile5.png"
import CanDoMobile6 from "../../assets/images/CanDoMobile6.png"

function CanDoBlock() {
    const [openOne, setOpenOne] = useState(false)
    const [openTwo, setOpenTwo] = useState(false)
    const [openThree, setOpenThree] = useState(false)
    const [openFour, setOpenFour] = useState(false)
    const [openFive, setOpenFive] = useState(false)
    const [openSix, setOpenSix] = useState(false)
    const [imgsLoaded, setImgsLoaded] = useState(false)
    

    useEffect(() => {
    const images = [
        CanDoMobile1,
        CanDoMobile2,
        CanDoMobile3,
        CanDoMobile4,
        CanDoMobile5,
        CanDoMobile6,
    ]
        const loadImage = image => {
          return new Promise((resolve, reject) => {
            const loadImg = new Image()
            loadImg.src = image
            // wait 2 seconds to simulate loading time
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
    <div className="canDoBackground">
<div className="canDoWrapper">
        <div className="canDoBlock">
            <div className="canDoHeading">
                <h1>What can you do<br/> with your crypto?</h1>
            </div>
            {imgsLoaded ?
            <div className="canDoBlocks">
                <div className="canDoBlocksRow">
                    <div className="canDoItem">
                        <div className="canDoBlockBackground">
                            <h1>Hold</h1>
                            <p>Keep your newly purchased<br/> crypto in <a href="/" style={{fontWeight: 600, color: "#3463F8", textDecoration: "none"}}>Indacoin</a> or your<br/> preferred wallet. <span>Diversify</span><br/> your portfolio easily.</p>
                        </div>
                    </div>
                    <div className="canDoItem">
                        <div className="canDoBlockBackground">
                            <h1>Earn</h1>
                            <p>You can stake or farm your<br/> crypto in trusted pools and<br/> platforms, as well as lend<br/> funds to get <span>passive income</span>.</p>
                        </div>
                    </div>
                    <div className="canDoItem">
                        <div className="canDoBlockBackground">
                            <h1>Send</h1>
                            <p>Send money to your relative,<br/> friend or business partner<br/> across the globe the <span>fastest</span><br/> and <span>cheapest</span> way possible</p>
                        </div>
                    </div>
                </div>
                <div className="canDoBlocksRow">
                    <div className="canDoItem">
                        <div className="canDoBlockBackground">
                            <h1>Spend</h1>
                            <p>Buy goods, services, tickets<br/> and many more from any<br/> crypto-friendly merchant or<br/> pay anyone around the<br/> world with <span>zero hassle</span>.</p>
                        </div>
                    </div>
                    <div className="canDoItem">
                        <div className="canDoBlockBackground">
                            <h1>Swap</h1>
                            <p>Convert your tokens to<br/> another cryptocurrency<br/> directly in <span>CEX</span> or <span>DEX</span>,<br/> explore trading and quickly<br/> get <span>promising</span> assets.</p>
                        </div>
                    </div>
                    <div className="canDoItem">
                        <div className="canDoBlockBackground">
                            <h1>Donate</h1>
                            <p><span>Support</span> those who need<br/> your help without borders or<br/> limitations. Give crypto for<br/> the <span>good cause</span> easily and<br/> internationally.</p>
                        </div>
                    </div>
                </div>
            </div> 
            :
            <div className="ellipsis-loading" style={{display: "flex", alignItems: "center", height: 584, justifyContent: "center"}}>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>}
            
            <div className="canDoMobileBlock">
                <div onClick={!openOne ? () => setOpenOne(true) : null} className="mobileCanItem" style={openOne ? {backgroundImage: `url(${CanDoMobile1})`} : null}>
                    <div className="headingBlockCanMobile">
                        <h1>Hold</h1>
                        {!openOne ? <img alt="" onClick={() => setOpenOne(!openOne)} src={open} width={20} height={20}/> :
                        <img alt="" onClick={() => setOpenOne(!openOne)} src={CloseIcon} width={20} height={20}/>}
                    </div>
                    <div className="textBlockCanMobile" style={openOne ? {display: "block"} : {display: "none"}}>
                        <p>
                            Keep your newly purchased crypto in <span style={{fontWeight: 700, color: "#3463F8"}}>Indacoin</span> or your preferred wallet. <span style={{fontWeight: 700, color: "#3463F8"}}>Diversify</span> your portfolio easily.
                        </p>
                    </div>
                </div>
                <div onClick={!openTwo ? () => setOpenTwo(true) : null} className="mobileCanItem" style={openTwo ? {backgroundImage: `url(${CanDoMobile2})`} : null}>
                    <div className="headingBlockCanMobile">
                        <h1>Earn</h1>
                        {!openTwo ? <img alt="" onClick={() => setOpenTwo(!openTwo)} src={open} width={20} height={20}/>:
                        <img alt="" onClick={() => setOpenTwo(!openTwo)} src={CloseIcon} width={20} height={20}/>}
                    </div>
                    <div className="textBlockCanMobile" style={openTwo ? {display: "block"} : {display: "none"}}>
                        <p>
                            You can stake or farm your crypto in trusted pools and platforms, as well as lend funds to get <span style={{fontWeight: 700, color: "#3463F8"}}>passive income</span>.
                        </p>
                    </div>
                </div>
                <div onClick={!openThree ? () => setOpenThree(true) : null} className="mobileCanItem" style={openThree ? {backgroundImage: `url(${CanDoMobile3})`} : null}>
                    <div className="headingBlockCanMobile">
                        <h1>Send</h1>
                        {!openThree ? <img alt="" onClick={() => setOpenThree(!openThree)} src={open} width={20} height={20}/>:
                        <img alt="" onClick={() => setOpenThree(!openThree)} src={CloseIcon} width={20} height={20}/>}
                    </div>
                    <div className="textBlockCanMobile" style={openThree ? {display: "block"} : {display: "none"}}>
                        <p>
                            Send money to your relative, friend or business partner across the globe the <span style={{fontWeight: 700, color: "#3463F8"}}>fastest</span> and <span style={{fontWeight: 700, color: "#3463F8"}}>cheapest</span> way possible
                        </p>
                    </div>
                </div>
                <div onClick={!openFour ? () => setOpenFour(true) : null} className="mobileCanItem" style={openFour ? {backgroundImage: `url(${CanDoMobile4})`} : null}>
                    <div className="headingBlockCanMobile">
                        <h1>Spend</h1>
                        {!openFour ? <img alt="" onClick={() => setOpenFour(!openFour)} src={open} width={20} height={20}/>:
                        <img alt="" onClick={() => setOpenFour(!openFour)} src={CloseIcon} width={20} height={20}/>}
                    </div>
                    <div className="textBlockCanMobile" style={openFour ? {display: "block"} : {display: "none"}}>
                        <p>
                            Buy goods, services, tickets and many more from any crypto-friendly merchant or pay anyone around the world with <span style={{fontWeight: 700, color: "#3463F8"}}>zero hassle</span>.
                        </p>
                    </div>
                </div>
                <div onClick={!openFive ? () => setOpenFive(true) : null} className="mobileCanItem" style={openFive ? {backgroundImage: `url(${CanDoMobile5})`} : null}>
                    <div className="headingBlockCanMobile">
                        <h1>Swap</h1>
                        {!openFive ? <img alt="" onClick={() => setOpenFive(!openFive)} src={open} width={20} height={20}/>:
                        <img alt="" onClick={() => setOpenFive(!openFive)} src={CloseIcon} width={20} height={20}/>}
                    </div>
                    <div className="textBlockCanMobile" style={openFive ? {display: "block"} : {display: "none"}}>
                        <p>
                            Convert your tokens to another cryptocurrency directly in <span style={{fontWeight: 700, color: "#3463F8"}}>CEX</span> or <span style={{fontWeight: 700, color: "#3463F8"}}>DEX</span>, explore trading and quickly get <span style={{fontWeight: 700, color: "#3463F8"}}>promising</span> assets.
                        </p>
                    </div>
                </div>
                <div onClick={!openSix ? () => setOpenSix(true) : null} className="mobileCanItem" style={openSix ? {backgroundImage: `url(${CanDoMobile6})`} : null}>
                    <div className="headingBlockCanMobile">
                        <h1>Donate</h1>
                        {!openSix ? <img alt="" onClick={() => setOpenSix(!openSix)} src={open} width={20} height={20}/>:
                        <img alt="" onClick={() => setOpenSix(!openSix)} src={CloseIcon} width={20} height={20}/>}
                    </div>
                    <div className="textBlockCanMobile" style={openSix ? {display: "block"} : {display: "none"}}>
                        <p>
                        <span style={{fontWeight: 700, color: "#3463F8"}}>Support</span> those who need your help without borders or limitations. Give crypto for the <span style={{fontWeight: 700, color: "#3463F8"}}>good cause</span> easily and internationally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default CanDoBlock;
