
import {useState,React, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    },[])

    const handleLogin=async ()=>{
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }

        });
        result=await result.json();
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user))
            localStorage.setItem("token",JSON.stringify(result.user))
            navigate('/')

        }else{
            alert('please enter correct credentials')
        }

    }

  return (
    <div className='register'>
    <h1>Login</h1>
    <input className='input-box' type='text' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} value={email} />
    <input className='input-box' type='password' placeholder='enter your paasword' onChange={(e)=>setPassword(e.target.value)} value={password}/>
    <button className='btn' type='button' onClick={handleLogin} >Login</button>
  </div>
  )
}

export default Login
