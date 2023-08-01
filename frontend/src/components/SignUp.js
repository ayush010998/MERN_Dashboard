import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [name,setName]=useState("")
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState("")
  const navigate=useNavigate();


  useEffect(()=>{
    const auth=localStorage.getItem("user")
    if (auth)
    {
      navigate('/')
    }
  })

  const collectData = async() =>{
    console.log(name,password,email);
    let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },

    });
    result=await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result.result));
    localStorage.setItem("user",JSON.stringify(result.auth));
    if(result){
      navigate('/')
    }
  }
  return (
    <div className='register'>
      <h1>Register</h1>
      <input className='input-box' type='text' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input className='input-box' type='text' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input className='input-box' type='password' placeholder='enter your paasword' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className='btn' type='button' onClick={collectData}>Signup</button>
    </div>
  )
}

export default SignUp
