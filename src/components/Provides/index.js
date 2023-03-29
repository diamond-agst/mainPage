import React, {useEffect, useState} from "react";
import "./styles.scss"
import PictureProviders from "../../assets/images/PictureProviders.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

function Provides() {
    const [show, setShow] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if(inView){
          setShow(true)  
        }
    }, [inView])

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="provides">
        <div className="providesWrapper">
            <div className="providesHeading">
                <h1>Indacoin provides:</h1>
                <p>Access to wide audience in 150+ countries with optimized<br/> conversion rate which became a proven way to grow revenue.</p>
            </div>
            <div ref={ref} className="providesTextBlock">
                <div style={show ? {opacity: 1, transition: "all 500ms ease-out"} : {opacity: 0, transition: "all 500ms ease-out"}} className="providesTextItem">
                    <h1>100%</h1>
                    <p>chargeback-<br/>free</p>
                </div>
                <div style={show ? {opacity: 1, transition: "all 1500ms ease-out"} : {opacity: 0, transition: "all 1500ms ease-out"}} className="providesTextItem">
                    <h1>200+</h1>
                    <p>crypto-<br/>currencies</p>
                </div>
                <div style={show ? {opacity: 1, transition: "all 2500ms ease-out"} : {opacity: 0, transition: "all 2500ms ease-out"}} className="providesTextItem">
                    <h1>14+</h1>
                    <p>fiat <br/>currencies</p>
                </div>
                <div style={show ? {opacity: 1, transition: "all 3000ms ease-out"} : {opacity: 0, transition: "all 3000ms ease-out"}} className="providesTextItem">
                    <h1>24/7</h1>
                    <p>clients’<br/>support</p>
                </div>
            </div>
        </div>
        <div className="providesBackground">
            <img alt="" width={"100%"} src={PictureProviders}/>
        </div>
    </div>
  );
}

export default Provides;
