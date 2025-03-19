import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
    const[loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    function handleInput(e){
        setLoginData({...loginData,[e.target.name]:e.target.name})
    }


    function handleLogin(event){
        event.preventDefault();
        if(loginData.email==""){
            alert("Please enter email...");
            return;
        }

        if(loginData.password==""){
            alert("Please enter password...");
            return;
        }

        alert("You are successfully logged in");
    }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="">Email</label>
        <input type="email" value={loginData.email} name='email' onChange={handleInput} placeholder='Email...'/>
        <label>password</label>
        <input type="password" value={loginData.password} name="password" onChange={handleInput} placeholder='password...'/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Login
