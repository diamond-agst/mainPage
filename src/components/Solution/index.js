import React, {useState} from "react";
import "./styles.scss"
import arrowRight from "../../assets/images/arrowRight.svg"
import arrowRightBlue from "../../assets/images/arrowRightBlue.svg"
import solutionTwo from "../../assets/images/solutionTwo.png"
import solutionThree from "../../assets/images/solutionThree.png"
import solutionFour from "../../assets/images/solutionFour.png"

const dataSolution = [
    [
        {
            id: 1,
            title: "Smart contract development",
            text: "Create a base for issuing your token or running your web3 platform"
        },
        {
            id: 2,
            title: "Transition to beneficial blockchains",
            text: "Transfer your payments or platform in general to faster and cheaper chains"
        },
        {
            id: 3,
            title: "Onramp integration",
            text: "Set up fiat payment gateway for your clients in your website, app or community"
        },
        {
            id: 4,
            title: "Product development",
            text: "From websites to decentralized apps our IT team can bring your idea to life"
        }
    ],
    [
        {
            id: 1,
            title: "Incorporation in EU",
            text: "Delegate registering and managing your onshore incorporation process"
        },
        {
            id: 2,
            title: "Legal opinion ",
            text: "Receive quality statement required for centralized listing and regulators"
        },
        {
            id: 3,
            title: "Token agreements",
            text: "Safely issue tokens to your team or investors (SAFT, warrants, options, etc.)"
        },
        {
            id: 4,
            title: "Investor relations",
            text: "Manage terms for collaborating with early and late-stage investors and advisors"
        }
    ],
    [
        {
            id: 1,
            title: "Partners’ network building",
            text: "Connect with blockchains and relevant industry partners for faster growth"
        },
        {
            id: 2,
            title: "Consulting and advisory support",
            text: "Scan your project to find growth points and use our experience to avoid pitfalls"
        },
        {
            id: 3,
            title: "Pitching and intros",
            text: "Delegate pitching and establishing warm connections with VCs and industry leaders"
        },
        {
            id: 4,
            title: "Listing management",
            text: "Add your tokens to DEX and CEX platforms on favorable terms"
        }
    ],
    [
        {
            id: 1,
            title: "Product marketing research",
            text: "Review CJM and JTBD interviews to pick suitable TOV and marketing channels"
        },
        {
            id: 2,
            title: "Market and competitors analysis",
            text: "Get valuable insights to strengthen your value proposition and go-to-market strategy"
        },
        {
            id: 3,
            title: "Awareness and viral marketing",
            text: "Combine media collabs, user-generated content and events to spread the word"
        },
        {
            id: 4,
            title: "User acquisition and retention",
            text: "Media buying to get leads on demand and user onboarding to make them stay"
        }
    ]
    
]

function Solution() {
    const [step, setStep] = useState(4)

  return (
    <div className="solution">
        <div className="solutionWrapper">
            <div className="solutinHeading">
                <h1>All-in-one solution</h1>
            </div>
            <div className="solutinSubTitle">
                <p>Start crypto company from scratch or fuel your current business with blockchain to join the fastest growing industry</p>
            </div>
            <div className="solutionContent" style={{overflow: "hidden", borderRadius: 16}}>
                <div className="solutionContentMenu" style={{borderRadius: 16}}>
                    <div style={{background: '#282828'}} onClick={() => setStep(0)}>
                        <div>
                            <h1 style={step === 0 ? {color: "#3463F8"} : null}>IT<br/> SOLUTION</h1>
                            <img alt="" src={step !== 0 ? arrowRight : arrowRightBlue}/>
                        </div>
                    </div>
                    <div style={{background: '#313131'}} onClick={() => setStep(1)}>
                        <div style={{backgroundImage: `url(${solutionTwo})`}}>
                            <h1 style={step === 1 ? {color: "#3463F8"} : null}>LEGAL<br/> SUPPORT</h1>
                            <img alt="" src={step !== 1 ? arrowRight : arrowRightBlue}/>
                        </div>
                    </div>
                    <div style={{background: '#3B3B3B'}} onClick={() => setStep(2)}>
                        <div style={{backgroundImage: `url(${solutionThree})`}}>
                            <h1 style={step === 2 ? {color: "#3463F8"} : null}>BUSINESS<br/> Development</h1>
                            <img alt="" src={step !== 2 ? arrowRight : arrowRightBlue}/>
                        </div>
                    </div>
                    <div style={{background: '#494949'}} onClick={() => setStep(3)}>
                        <div style={{backgroundImage: `url(${solutionFour})`}}>
                            <h1 style={step === 3 ? {color: "#3463F8"} : null}>MARKETING<br/> & Analytics</h1>
                            <img alt="" src={step !== 3 ? arrowRight : arrowRightBlue}/>
                        </div>
                    </div>
                </div>
                
                    <div style={step < 4 ? {transform: "translateX(0)"} : null} className="mobileSolutionBlock">
                    {step === 0 &&
                        <div>
                            <div onClick={() => setStep(4)} className="mobileSolutionArrow">
                                <img alt="" src={arrowRightBlue}/>
                            </div>
                        <div className="mobileSolutionItems">
                            <div className="mobileSolutionItem">
                                <h1>Smart<br/> contracts</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>Blockchain<br/> switch</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>Onramp<br/> integration</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>product<br/> development</h1>
                            </div>
                        </div>
                        <div></div>
                    </div>}
                    {step === 1 &&
                        <div>
                            <div onClick={() => setStep(4)} className="mobileSolutionArrow">
                                <img alt="" src={arrowRightBlue}/>
                            </div>
                        <div className="mobileSolutionItems">
                            <div className="mobileSolutionItem">
                                <h1>COMPANY<br/> SETUP</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>Legal<br/> opinion</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>Token<br/> agreements</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>Investor<br/> relations</h1>
                            </div>
                        </div>
                        <div></div>
                    </div>
                }
                {step === 2 &&
                        <div>
                            <div onClick={() => setStep(4)} className="mobileSolutionArrow">
                                <img alt="" src={arrowRightBlue}/>
                            </div>
                        <div className="mobileSolutionItems">
                            <div className="mobileSolutionItem">
                                <h1>network<br/> building</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>advisory<br/> support</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>Pitching<br/> and intros</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>Listing<br/> management</h1>
                            </div>
                        </div>
                        <div></div>
                </div>
                }
                {step === 3 &&
                        <div>
                            <div onClick={() => setStep(4)} className="mobileSolutionArrow">
                                <img alt="" src={arrowRightBlue}/>
                            </div>
                        <div className="mobileSolutionItems">
                            <div className="mobileSolutionItem">
                                <h1>Product<br/> marketing </h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>Market<br/> analysis</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>viral<br/> marketing</h1>
                            </div>
                            <div className="mobileSolutionItem">
                                <h1>User<br/> acquisition</h1>
                            </div>
                        </div>
                        <div></div>
                </div>
                }
                </div>
                
                
                <div className="solutionContentText">
                    {step === 4 ? 
                    <p className="solutionStartText">Start crypto company from scratch or fuel<br/> your current business with blockchain to<br/> join the fastest growing industry</p>
                    :
                    <div
                    style={ step === 0 ? {background: "#282828"} :
                            step === 1 ? {background: "#313131"} :
                            step === 2 ? {background: "#3B3B3B"} :
                            {background: "#494949"}  } 
                    className="solutionWrapperBlock">
                        <div className="solutionStepBlock">
                        {dataSolution[step].map(item => {
                            return(
                            <div key={item.id} className="solutionContentBlock">
                                        <h1>{item.id}</h1>
                                    <div>
                                        <h2>{item.title}</h2>
                                        <p>{item.text}</p>
                                    </div>
                            </div> 
                            )
                           
                        })}
                    </div>
                    </div>
                    
                    }
                </div>
            </div>
            <div className="solutionButton">
                <button onClick={() => document.getElementById('blockForm').scrollIntoView({behavior: "smooth"})}>submit your application</button>
            </div>
        </div>
    </div>
  );
}

export default Solution;
