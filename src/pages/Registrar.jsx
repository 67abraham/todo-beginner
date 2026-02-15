import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { Navbar } from '../compoent/Navbar'

export const Registrar = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviget = useNavigate();
  const [loading, setLoading] = useState(false);


  async function handerLogin(e){
    e.preventDefault();
    setLoading(true)


    try{

       if(!username | !email | !password){
       alert("Please Fill All Information")
       setLoading(false)
    }else{
      const userData = {username, email, password}

      const result = await axios.post("http://localhost:8080/api/todo/register", userData);
      if(result.data.ok){
        sessionStorage.setItem("user", JSON.stringify(result))
        naviget("/todo_plan")

      }

    }

    }catch{
      alert("User Already Exist")
      setLoading(false)
      

    }
    

  }

  return (
    <div>
      <Navbar/>
      <div className = "reText">
        <h1>Welcome to Todo Planning</h1>
      </div>
    <div className='mainCon'>
    <div className="container">
    <div className="heading">Register Account</div>
    <form action="onSubmit" class="form">
     
      <input class="input" 
        type="text" 
        name="username" 
        id="username" 
        placeholder="Full Name"
        value={username}
        onChange={(e)=> setUserName(e.target.value)}
        />
        

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
      <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
      {
        loading ?  <button className="login-button" > Please wait...</button> :  <button className="login-button" onClick={handerLogin}> Create Account</button>
      }
     
      
    </form>
    <div className="social-account-container">
        <span className="title font-extrabold">Already Have an Account? <Link to={"/"}>Click Here</Link></span>
        
      </div>
      <span className="agreement"><a href="#">Learn user licence agreement</a></span>
  </div>

  </div>
</div>
    
  )
}
