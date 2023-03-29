import React, {useRef, useEffect, useState} from "react";
import "./styles.scss"
import StoriesFirst from "../../assets/images/StoriesFirst.png"
import StoriesSecond from "../../assets/images/StoriesSecond.png"
import StoriesThird from "../../assets/images/StoriesThird.png"
import heart from "../../assets/images/heart.svg"
import heartFull from "../../assets/images/heartFull.svg"
import send from "../../assets/images/send.svg"
import Slider from "react-slick";
import storiesArrow from "../../assets/images/storiesArrow.svg"
import Lines from "../../assets/images/Lines.svg"
import Lines2 from "../../assets/images/Lines2.svg"
import Lines3 from "../../assets/images/Lines3.svg"
import LogoInsta from "../../assets/images/LogoInsta.svg"
import Heading from "../../assets/images/Heading.svg"
import Heading2 from "../../assets/images/Heading2.svg"
import Heading3 from "../../assets/images/Heading3.svg"
import Roi from "../../assets/images/ROI.svg"
import Roi2 from "../../assets/images/ROI2.svg"
import Roi3 from "../../assets/images/ROI3.svg"
import arrowBlueStories from "../../assets/images/arrowBlueStories.svg"
import {
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
  } from "react-share";
  import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
  } from "react-share";

function Stories() {
    const [likeOne, setLikeOne] = useState(false)
    const [likeTwo, setLikeTwo] = useState(false)
    const [likeThree, setLikeThree] = useState(false)
    const [shareBlock1, setShareBlock1] = useState(false)
    const [shareBlock2, setShareBlock2] = useState(false)
    const [shareBlock3, setShareBlock3] = useState(false)
    const [blur, setBlur] = useState(1)
    const ref = useRef()
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const title = 'indacoin.io';

    function next() {
        ref.current.slickNext();
      }
    function previous() {
        ref.current.slickPrev();
      }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        if(shareBlock3){
            window.onclick = (event) => {
                if (event.target.contains(ref3.current)
                    & event.target !== ref3.current) {     
                        setShareBlock3(!shareBlock3)
                } 
            }
        }else if(shareBlock2){
            window.onclick = (event) => {
                if (event.target.contains(ref2.current)
                    & event.target !== ref2.current) {     
                        setShareBlock2(!shareBlock2)
                } 
            }
        }else if(shareBlock1){
            window.onclick = (event) => {
                if (event.target.contains(ref1.current)
                    & event.target !== ref1.current) {     
                        setShareBlock1(!shareBlock1)
                } 
            }
        }
        
    }, [shareBlock3, shareBlock2, shareBlock1]);

    const share = async (url) => {
        const blob = await fetch(
          url
        ).then((r) => r.blob());
        const data = {
          files: [
            new File([blob], "file.png", {
              type: blob.type
            })
          ],
          title: "Check out crypto stories: s.indacoin.io/",
          text: "Check out crypto stories: s.indacoin.io/"
        };
        try {
          if (!navigator.canShare(data)) {
            throw new Error("Can't share data.", data);
          }
          await navigator.share(data);
        } catch (err) {
          console.error(err.name, err.message);
        }
      };

    const onClickPrev = () => {
        if(blur === 1){
            setBlur(3)
            setShareBlock1(false)
            setShareBlock2(false)
            setShareBlock3(false)
        }else{
            setBlur(blur - 1)
            setShareBlock1(false)
            setShareBlock2(false)
            setShareBlock3(false)
        }
    }

    const onClickNext = () => {
        if(blur === 3){
            setBlur(1)
            setShareBlock1(false)
            setShareBlock2(false)
            setShareBlock3(false)
        }else{
            setBlur(blur + 1)
            setShareBlock1(false)
            setShareBlock2(false)
            setShareBlock3(false)
        }
    }


  return (
    <div className="storiesWrapper" id="stories">
        <div className="storiesBlock">
            <div className="storiesHeading">
                <h1>our clients' STORIES</h1>
            </div>
            <div className="storiesMobile" style={{justifyContent: "center", marginTop: 48}}>
                <div style={{background: "#0C0C0C", borderRadius: 18, height: 610}}>
                    <div className="storiesBackground">
                        <Slider ref={ref} {...settings}>
                            <div className="storiesItemMobile">
                                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                  <img alt="" width={250} height={20} src={Lines} style={{marginTop: 16}}/>  
                                </div>
                                <div className="storieName">
                                    <img alt="" src={LogoInsta} width={32} style={{marginRight: 16}}/>
                                    <p>james.c</p>  
                                </div>
                                <img alt="" className="headingStorie" width={140} src={Heading}/>
                                <div className="storiesText">
                                    <p>TBH I haven't figured out crypto yet, still learning how it all works, so I’m not sure if my story is useful.</p>
                                    <br/>
                                    <p>Long story short I’ve got my $100 that I was ready to lose, and somehow ended up on Indacoin. I didn’t have a wallet, so I decided to give it a try.</p>
                                    <br/>
                                    <p>To my surprise it was easy, and at least I can say my first purchase was good. Fingers crossed BTC will go back to $60K🚀</p>
                                </div>
                                <img alt="" src={Roi} width={200} style={{margin: "32px 24px"}}/>
                                <img alt="" 
                                onClick={() => setLikeOne(!likeOne)} className="heartIcon" 
                                width={24} 
                                src={likeOne ? heartFull : heart}/>
                                <img onClick={() => share("https://cdn.glitch.global/56f63342-3273-44d1-8def-a12c5d350597/StoriesFirst.png?v=1679524550447")} alt="" className="sendIcon" width={24} src={send}/>
                            </div>
                            <div>
                            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                  <img alt="" width={250} height={20} src={Lines2} style={{marginTop: 16}}/>  
                                </div>
                                <div className="storieName">
                                    <img alt="" src={LogoInsta} width={32} style={{marginRight: 16}}/>
                                    <p>timothy.l</p>  
                                </div>
                                <img alt="" style={{position: "absolute", right: 16}} width={160} src={Heading2}/>
                                <div className="storiesText">
                                    <p>I’m peaky when it comes to finances, so I have my own set of tools, and I know where it will be easier or cheaper for me to buy or trade.</p>
                                    <br/>
                                    <p>Indacoin doesn’t meet all my needs, but they are a good option when it comes to buying something specific.</p>
                                    <br/>
                                    <p>I bought CKB before it pumped, they were also very fast with listing UNI, so I come back from time to time to buy new tokens directly with card.</p>
                                </div>
                                <img alt="" src={Roi2} width={220} style={{margin: "21px 42px"}}/>
                                <img alt="" onClick={() => setLikeTwo(!likeTwo)} className="heartIcon" width={24} 
                                src={likeTwo ? heartFull : heart}/>
                                <img onClick={() => share("https://cdn.glitch.global/56f63342-3273-44d1-8def-a12c5d350597/StoriesFirst.png?v=1679524550447")} alt="" className="sendIcon" width={24} src={send}/>
                            </div>
                            <div>
                            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                  <img alt="" width={250} height={20} src={Lines3} style={{marginTop: 16}}/>  
                                </div>
                                <div className="storieName">
                                    <img alt="" src={LogoInsta} width={32} style={{marginRight: 16}}/>
                                    <p>dylan.h</p>  
                                </div>
                                <img alt="" className="headingStorie" width={180} src={Heading3}/>
                                <div className="storiesText">
                                    <p>Back in 2016, the choice of options for buying crypto just like that, with a credit card, was very limited.</p>
                                    <br/>
                                    <p>I was lucky enough to find Indacoin fast, and trusted them ever since. I’m even more lucky bastard since I bought BTC for about $600, and managed to buy other blue chips for the nice price right here.</p>
                                    <br/>
                                    <p>I’m not very interested in trading, so I just keep making my HODL position stronger.</p>
                                </div>
                                <img alt="" src={Roi3} width={250} style={{margin: "8px 24px"}}/>
                                <img alt="" onClick={() => setLikeThree(!likeThree)} className="heartIcon" width={24} 
                                src={likeThree ? heartFull : heart}/>
                                <img onClick={() => share("https://cdn.glitch.global/56f63342-3273-44d1-8def-a12c5d350597/StoriesThird.png?v=1679524571204")} alt="" className="sendIcon" width={24} src={send}/>

                            </div>
                        </Slider>
                    </div>
                </div>
            
            </div>
           
        <div className="mobileArrow" style={{textAlign: "center", marginTop: 24 }}>
            <img alt="" style={{pointerEvents: "all", cursor: "pointer"}} width={12} height={22} onClick={previous} src={storiesArrow}/>
            <img alt="" style={{pointerEvents: "all", cursor: "pointer", transform: "rotate(180deg)", marginLeft: 24}} onClick={next} src={storiesArrow}/>
        </div>
            <div className="storiesContent">
                <img onClick={onClickPrev} alt="" src={arrowBlueStories} style={{
                    transform: "rotate(180deg)", 
                    cursor: "pointer",
                    pointerEvents: "all",
                    height: "fit-content"}}/>
                <div onMouseEnter={() => {
                    setBlur(1)
                    setShareBlock1(false)
                    setShareBlock2(false)
                    setShareBlock3(false)
                    }} style={{position: "relative"}}>
                    <img alt="" width={360} src={StoriesFirst}/>
                    <img alt="" 
                    onClick={() => setLikeOne(!likeOne)} className="heartIcon" 
                    width={24} 
                    src={likeOne ? heartFull : heart}/>
                    <img alt="" onClick={() => setShareBlock1(!shareBlock1)} className="sendIcon mobileSend" width={24} src={send}/> 
                    {shareBlock1 && <div ref={ref1} className="shareBlock">
                        <TelegramShareButton
                        url={"Buy and exchange any cryptocurrency instantly: Bitcoin, Ethereum, Litecoin, Ripple and 30 other digital currencies for EUR or USD. https://s.indacoin.io/static/media/StoriesFirst.7b40171d5d9851c07299.png"}
                        title={title}
                    >
                        <TelegramIcon size={30} round={true} />
                    </TelegramShareButton>
                    <FacebookShareButton
                    url={"https://s.indacoin.io/static/media/StoriesFirst.7b40171d5d9851c07299.png"}
                    >
                        <FacebookIcon size={30} round={true} />
                    </FacebookShareButton>
                    <LinkedinShareButton
                    url={"https://s.indacoin.io/static/media/StoriesFirst.7b40171d5d9851c07299.png"}>
                        <LinkedinIcon size={30} round={true} />
                    </LinkedinShareButton>
                    </div>}
                    {blur !== 1 && <div className="blurBlock"></div>}
                </div>
                <div onMouseEnter={() => {
                    setBlur(2)
                    setShareBlock1(false)
                    setShareBlock2(false)
                    setShareBlock3(false)}}>
                    <img alt="" width={360} src={StoriesSecond}/>
                    <img alt="" onClick={() => setLikeTwo(!likeTwo)} className="heartIcon" width={24} 
                    src={likeTwo ? heartFull : heart}/>
                    <img alt="" onClick={() => setShareBlock2(!shareBlock2)} className="sendIcon" width={24} src={send}/>
                    {shareBlock2 && <div ref={ref2} className="shareBlock">
                        <TelegramShareButton
                        url={"Buy and exchange any cryptocurrency instantly: Bitcoin, Ethereum, Litecoin, Ripple and 30 other digital currencies for EUR or USD. https://s.indacoin.io/static/media/StoriesSecond.b2adb52d1ac68dd81916.png"}
                        title={title}
                    >
                        <TelegramIcon size={30} round={true} />
                    </TelegramShareButton>
                    <FacebookShareButton
                    url={"https://s.indacoin.io/static/media/StoriesSecond.b2adb52d1ac68dd81916.png"}
                    >
                        <FacebookIcon size={30} round={true} />
                    </FacebookShareButton>
                    <LinkedinShareButton
                    url={"https://s.indacoin.io/static/media/StoriesSecond.b2adb52d1ac68dd81916.png"}>
                        <LinkedinIcon size={30} round={true} />
                    </LinkedinShareButton>
                    </div>}
                    {blur !== 2 && <div className="blurBlock"></div>}
                </div>
                <div onMouseEnter={() => {
                    setBlur(3)
                    setShareBlock1(false)
                    setShareBlock2(false)
                    setShareBlock3(false)}}>
                    <img alt="" width={360} src={StoriesThird} 
                    />
                    <img alt="" onClick={() => setLikeThree(!likeThree)} className="heartIcon" width={24} 
                    src={likeThree ? heartFull : heart}/>
                    <img alt="" onClick={() => setShareBlock3(!shareBlock3)} className="sendIcon" width={24} src={send}/>
                    
                    {shareBlock3 && <div ref={ref3} className="shareBlock">
                        <TelegramShareButton
                        url={"Buy and exchange any cryptocurrency instantly: Bitcoin, Ethereum, Litecoin, Ripple and 30 other digital currencies for EUR or USD. https://s.indacoin.io/static/media/StoriesThird.89e49d59b985216d23c5.png"}
                    >
                        <TelegramIcon size={30} round={true} />
                    </TelegramShareButton>
                    <FacebookShareButton
                    url={"https://s.indacoin.io/static/media/StoriesThird.89e49d59b985216d23c5.png"}
                    >
                        <FacebookIcon size={30} round={true} />
                    </FacebookShareButton>
                    <LinkedinShareButton
                    url={"https://s.indacoin.io/static/media/StoriesThird.89e49d59b985216d23c5.png"}>
                        <LinkedinIcon size={30} round={true} />
                    </LinkedinShareButton>
                    </div>}
                    {blur !== 3 && <div className="blurBlock"></div>}
                </div>
                <img onClick={onClickNext} alt="" src={arrowBlueStories} style={{
                    cursor: "pointer",
                    pointerEvents: "all",
                    height: "fit-content"}}/>
            </div>
        </div>
    </div>
  );
}

export default Stories;
