import React from 'react'
import Add from "../assets/addAvatar.png"
import { useState } from 'react';
import {auth} from '../firebase'
import { useNavigate,Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [err,setErr] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      
    }catch(err){
      setErr(true);
    }
      
    
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Gamma Chatter</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Sign In</button>
        </form>
        {err && <span>Something went wrong</span>}
        <p>You do dont't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login