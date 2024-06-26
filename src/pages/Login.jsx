import React from 'react'
import { useNavigate } from 'react-router-dom';
import MsIcon from '../assets/Microsoft_16_SVG.ico';
import WebMailIcon from '../assets/webMail.ico'


const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='AllBody'>
      <div className="container">
        <div className="loginTitle">Login With</div>
        <div className="eachCase" onClick={()=> navigate("/OfficeReadLogin")}>
          <img src={MsIcon} alt="" className="eachImg" />
          <div className="eachTitle">Login with Microsoft</div>
        </div>
        <div className="eachCase" onClick={()=> navigate("/webber")}>
          <img src={WebMailIcon} alt="" className="eachImg" />
          <div className="eachTitle">Login With Webmail</div>
        </div>
      </div>
    </div>
  )
}

export default Login
