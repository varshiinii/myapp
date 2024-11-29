import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const Navigate=useNavigate();
  const handleLogin=()=>
    {
      Navigate("/login");
    }
  return (
    <div>
      <h3> Signup </h3>
      <p>
        Enter Email Address: 
        <input type='text' placeholder=''></input>
      </p>
      <p>
        Enter Name: 
        <input type='text' placeholder=''></input>
      </p>
      <p>
        Enter Date of Birth: 
        <input type='datetime-local' placeholder=''></input>
      </p>
      <p>
        Enter Mobile Number: 
        <input type='text' placeholder=''></input>
      </p>
      <p>
        Create User ID: 
        <input type='text' placeholder=''></input>
      </p>
      <p>
        Create New Password: 
        <input type='text' placeholder=''></input>
      </p>
      <p>
        Confirm New Password: 
        <input type='text' placeholder=''></input>
      </p>
      <button> Submit </button>
      <hr></hr>
      <button onClick={handleLogin}> Already a member? Login here </button>
    </div>
  )
}
