import React from "react";
import "./styles.scss"
import { InlineWidget } from "react-calendly";
import Arrows from "../../assets/images/Arrows.svg"
import { Link } from "react-scroll";

function BookDemoCall() {
  return (
    <div className="callBlock" id="callBlock">
        <div className={"callBlockWrapper"}>
            <div className={"callBlockText"}>
                <div className={"callBlockHeading"}>
                    <h1>book<br/> demo call</h1>
                    <p>The quickest way to get all the answers you need,<br/> and check how our solution works in real time.</p>
                </div>
                <div className="calendlyBlockMobile">
                    <InlineWidget 
                    pageSettings={{
                        hideEventTypeDetails: true,
                      }}
                    className="inlineCalendly" url="https://calendly.com/maria_p/meeting?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=3463fa&hide_event_type_details=1&embed_type=Inline&embed_domain=1" styles={{ height: 725}}/>
                </div>
                <div className="callBlockSubtitle">
                    <h1>don’t want TO TALK?<br/> Chat with us</h1>
                </div>
            </div>
            <div className="calendlyBlock">
                <InlineWidget className="inlineCalendly"
                pageSettings={{
                    hideEventTypeDetails: true,
                  }}
                url="https://calendly.com/maria_p/meeting?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=3463fa&hide_event_type_details=1&embed_type=Inline&embed_domain=1" 
                styles={{ height: 725}}/>
            </div>
        </div>
        <div className="bottomBlockCall" style={{paddingBottom: 88}}>
            <div/>
            <div style={{cursor: "pointer"}}>
            <Link smooth={true} to="blockForm">
                <img alt="" width={43} height={45} src={Arrows}/>
            </Link>
            </div>
            <div/>
        </div>
    </div>
  );
}

export default BookDemoCall;
