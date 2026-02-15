import axios from 'axios';
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const naviget = useNavigate();
    
    async function handlerLogin(e){
      e.preventDefault();
      setLoading(true);
      try{

        if(!email | !password){
        alert("Login Field is required")
        setLoading(false)

       }else{
        const loginData = {email, password}
        const result  = await axios.post("http://localhost:8080/api/todo/login", loginData, {headers:{"Content-Type": "application/json"}});
        console.log(result.data)
        if(result.data){
          sessionStorage.setItem("user", JSON.stringify((result.data)))
          naviget("/todo_plan")
        }

      }

      }catch {

        alert("Please Verified Login Detail")
        setLoading(false)

      }



    }

 
  return (
    <div className='mainCon'>


    <div class="container">
    <div class="heading">Sign In</div>
    <form action="" class="form">
        <input class="input" 
        type="email"
        name="email" 
        id="email" 
        placeholder="E-mail"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />

      <input class="input" 
        type="password" 
        name="password" 
        id="password" 
        placeholder="Password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
      <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
      { loading ?
       <button class="login-button">Please Wait...</button>:
      <button class="login-button" onClick={handlerLogin}>Login</button>
      
      }
      
      
    </form>
    <div class="social-account-container">
        <span class="title font-extrabold">Don't Have an Account? <Link to={"/register"}>Click Here</Link></span>
        
      </div>
      <span class="agreement"><a href="#">Learn user licence agreement</a></span>
  </div>

  </div>

  )
}
