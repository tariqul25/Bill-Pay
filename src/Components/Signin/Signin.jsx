import React, { use, useState} from 'react';
import { PayContext } from '../../Provider/PayProvider';
import {  Link, useLocation, useNavigate } from 'react-router';

const Signin = () => {
  const {Signin}=use(PayContext)
  const location=useLocation()
  const navigate =useNavigate()
  const [errorMessage,setErrorMessage]=useState('')
  // console.log(location);
  const handleSignin=(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value


    setErrorMessage('')

    const passRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if(passRegex.test(password) === false){
      return setErrorMessage('Password must be 1 lower case, 1 upper case and at least 6 character')
    }



    Signin(email,password)
    .then((result) => {
      // Signed in 
      const user = result.user;
     navigate(`${location.state? location.state : '/' }`)
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    });

  }
    return (
        <div className="card w-full max-w-sm mx-auto bg-base-300 py-10 px-8 my-8 rounded-xl ">
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <div className="card-body   ">
        <form onSubmit={handleSignin} className="">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral w-full mt-4">Login</button>
        </form>
        <p>New to this website? Please <Link to='/register' className='underline'>Register</Link> </p>
        {
          errorMessage && <p className='text-red-400 text-center'>{errorMessage}</p>
        }
      </div>
      </div>
    );
};

export default Signin;