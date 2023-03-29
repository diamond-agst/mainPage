import React, {useState} from "react";
import "./styles.scss"
import Slider from "react-slick";
import work1 from "../../assets/images/work1.png"
import work2 from "../../assets/images/work2.png"
import work3 from "../../assets/images/work3.png"
import work4 from "../../assets/images/work4.png"
import ArrowLeftMobile from "../../assets/images/ArrowLeftMobile.svg"

function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <img
          alt=""
          className={className}
          style={{ ...style, display: "block", transform: "rotate(180deg)", width: 8, height: 22, top: "60%" }} 
          onClick={onClick} src={ArrowLeftMobile}/>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img
            alt=""
            className={className}
            style={{ ...style, display: "block", width: 8, height: 22, top: "60%", marginTop: 10 }} 
            onClick={onClick} src={ArrowLeftMobile}/>
        );
      }

function Works() {
    const [step, setStep] = useState(1)

    

      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    const showImg = () => {
        switch (step) {
            case 1:
                return (<img alt="" width={417} height={245} src={work1}/>)
            case 2:
                return(<img alt="" width={609} height={438} src={work2}/>)
            case 3: 
                return(<img alt="" width={215} height={466} src={work3}/>)
            case 4:
                return(<img alt="" width={417} height={244} src={work4}/>)
            default:
                return(<img alt="" width={417} height={245} src={work1}/>)
        }
    }
  return (
    <div className="works">
        <div className="providesWrapper">
            <div className="providesHeading">
                <h1>Make it your way</h1>
                <p>Our key advantage is customization to make<br/> sure we provide a solution that works for you.</p>
            </div>
            <div className="sliderWorks">
            <Slider {...settings}>
          <div className="sliderMobileItem">
            <div>
               <img alt="" src={work1}/> 
            </div>
            <h1>Embed Widget</h1>
            <p>
                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>Easy-to-use</span>&nbsp;widget that allows your<br/> audience to make a purchase&nbsp;<br/>
                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>wherever you want</span>.
            </p>
          </div>
          <div className="sliderMobileItem">
            <div>
               <img alt="" src={work2}/> 
            </div>
            
            <h1>Landing page</h1>
            <p>
                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>Branded page</span> with<br/> personalized settings for<br/> 
                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>seamless user experience</span>.
            </p>
          </div>
          <div className="sliderMobileItem">
            <div>
                <img alt="" src={work4}/>
            </div>
            <h1>Custom wallet</h1>
            <p>
                Combo of onramp and<br/> 
                personal wallet to <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>exclude<br/> redirects</span> and onboard users<br/> 
                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>without crypto wallets</span>.
            </p>
          </div>
          <div className="sliderMobileItem">
            <div>
                <img alt="" src={work3}/>
            </div>
            <h1>Telegram bot</h1>
            <p>
                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>Fully customized</span> solution<br/> 
                for your clients to buy<br/> 
                crypto <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>right in Telegram</span>.
            </p>
          </div>
          
        </Slider>

            </div>
            <div className="worksBlock">
                <div className="worksImages">
                    {showImg()}
                </div>
                <div className="worksBlockText">
                    <div className="worksBlockItems">
                        <div style={step !== 1 ? {opacity: 0.17} : null} onMouseEnter={() => setStep(1)}>
                            <h1>Embed<br/> Widget</h1>
                            <p>
                                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>Easy-to-use</span>&nbsp;widget that<br/> allows your audience to<br/> make a purchase&nbsp;
                                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>wherever<br/> you want</span>.</p>
                        </div>
                        <div style={step !== 2 ? {opacity: 0.17} : null} onMouseEnter={() => setStep(2)}>
                            <h1>Landing<br/> page</h1>
                            <p>
                                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>Branded page</span> with<br/> personalized settings for<br/> 
                                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>seamless user experience</span>.</p>
                        </div>
                    </div>
                    <div className="worksBlockItems">
                        <div style={step !== 3 ? {opacity: 0.17} : null} onMouseEnter={() => setStep(3)}>
                            <h1>Telegram<br/> bot</h1>
                            <p>
                                <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>Fully customized</span> solution<br/> 
                                for your clients to buy<br/> 
                                crypto <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>right in Telegram</span>.</p>
                        </div>
                        <div style={step !== 4 ? {opacity: 0.17, marginLeft: "-21px"} : {marginLeft: "-21px"}} onMouseEnter={() => setStep(4)}>
                            <h1>Custom<br/> wallet</h1>
                            <p>Combo of onramp and<br/> 
                            personal wallet to <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>exclude<br/> redirects</span> and onboard users<br/> 
                            <span style={{color: "rgba(52, 99, 248, 1)", fontWeight: 800}}>without crypto wallets</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Works;
