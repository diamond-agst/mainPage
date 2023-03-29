import React, {useState} from "react";
import { wallet_api } from "../../tools/constants";
import "./styles.scss"

function Jorney() {
    const [value, setValue] = useState("");
    const [errors, setErorrs] = useState()

    const onInput = (e) => {
        setValue(e.target.value);
    }

    function openTab() {
        const errors = {}
          
            if (!value) {
                setErorrs('Email is required')
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                setErorrs('Invalid email address')
            }else{
               window.open(`${wallet_api}/Identity/Account/Register?userEmail=${value}`, "_blank"); 
               setErorrs(false)
            }
          
            return errors
        
    }

  return (
    <div className="jorneyWrapper">
        <div className="jorneyBlock">
            <div className="headingJorney">
                <h1>Ready,<br/> set, go!</h1>
            </div>
            <div className="jorneyForm">
                    <div className="field" style={{marginBottom: 0}}>
                        <input style={errors ? {border: "2px solid red"} : null} value={value} onInput={onInput} placeholder=" " type="email" required id="email"/>
                        <label htmlFor="email" title="Your email" data-title="Your email"></label>
                    </div>
                    <button onClick={openTab}>start my journey</button>
            </div>
        </div>
    </div>
  );
}

export default Jorney;
