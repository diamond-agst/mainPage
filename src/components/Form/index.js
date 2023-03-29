import React, { useState } from "react";
import "./styles.scss"
import axios from "axios";
import successIcon from "../../assets/images/successIcon.svg"

function Form() {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        project: "",
        website: "",
    })
    const[success, setSuccess] = useState(false)
    const[error, setError] = useState(false)

    const changeHandle = (e) => {
        setError(false)
        if(e.target.id === "email"){
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
                console.log("error")
            }else{
                setData(prevState => ({
                    ...prevState,
                    [e.target.id]: e.target.value
                }));
            }
        }else if(e.target.id === "phone"){
            if (!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(e.target.value)) {
                console.log("error")
            }else{
                setData(prevState => ({
                    ...prevState,
                    [e.target.id]: e.target.value
                }));
            }
        }else{
            setData(prevState => ({
                ...prevState,
                [e.target.id]: e.target.value
            }));
        }
        
    }

    const onSubmit = () => {
        if(data.name && data.phone && data.email && data.website && data.project && data.message){
            axios.post('https://gw.indacoin.io/api/v1/Partners/AddNewPotentialPartner', data)
            .then(response => setSuccess(true))
        }else{
            setError(true)
        }
    }

  return (
    <div className="form" id="blockForm">
        <div className="formBlockHeading">
            <h1>Tell us about<br/> your project</h1>
        </div>
        {success
        ?
        <div className="successBlock">
            <img alt="" src={successIcon}/>
            <p>Thank you!</p>
            <p>Your application has been successfully submitted</p>
        </div>
        :
        <div className="formBlock">
            <div className="formBlockLeft">
                <div className="field">
                    <input placeholder=" " style={error && !data.name ? {border: "2px solid red"} : null} type="text" onChange={changeHandle} required autoComplete="off" id="name"/>
                    <label htmlFor="username" title="Your name" data-title="Your name"></label>
                </div>
                <div className="field">
                    <input placeholder=" " style={error && !data.email ? {border: "2px solid red"} : null} type="text" onChange={changeHandle} required autoComplete="off" id="email"/>
                    <label htmlFor="username" title="Your email" data-title="Your email"></label>
                </div>
                <div className="field">
                    <input placeholder=" " style={error && !data.phone ? {border: "2px solid red"} : null} type="text" onChange={changeHandle} required autoComplete="off" id="phone"/>
                    <label htmlFor="username" title="Phone" data-title="Phone"></label>
                </div>
                <div className="field">
                    <input placeholder=" " style={error && !data.website ? {border: "2px solid red"} : null} type="text" onChange={changeHandle} required autoComplete="off" id="website"/>
                    <label htmlFor="username" title="Website" data-title="Website"></label>
                </div>
            </div>
            <div className="formBlockRight">
            <div className="field">
                    <input placeholder=" " style={error && !data.project ? {border: "2px solid red"} : null} type="text" onChange={changeHandle} required autoComplete="off" id="project"/>
                    <label htmlFor="username" title="Type of project" data-title="Type of project"></label>
                </div>
                <div className="field">
                    <textarea style={error && !data.message ? {border: "2px solid red"} : null} type="text" onChange={changeHandle} required autoComplete="off" id="message"></textarea>
                    <label htmlFor="message" title="Tell us about your project" data-title="Tell us about your project"></label>
                </div>
                
            </div>
        </div>
        }
        {!success ? 
        <>
            <button onClick={onSubmit}>Send</button>
            <a style={{textDecoration: "none"}} rel="noreferrer" href="https://t.me/ellytinger" target="_blank"><p className="subButton">or go to Telegram now</p></a> 
        </>
        : null}
    </div>
  );
}

export default Form;
