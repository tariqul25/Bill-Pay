import React, { use, useRef, useState } from 'react';
import { PayContext } from '../../Provider/PayProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';



const Signin = () => {
  const { Signin, GoogleSignIn ,passwordReset} = use(PayContext)
  const location = useLocation()
    // console.log(location);
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const emailRef= useRef()

  const handleGoogleSignIn = () => {
    GoogleSignIn().then(result => {
      console.log('sign in succcess');
      navigate(`${location.state ? location.state : '/'}`)
    }).catch(error => {
      console.log(error);
    })
  }



  const handleSignin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value


    setErrorMessage('')

    const passRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (passRegex.test(password) === false) {
      return setErrorMessage('Password must be 1 lower case, 1 upper case and at least 6 character')
    }



    Signin(email, password)
      .then((result) => {
        // Signed in 
        // const user = result.user;
        toast.success("Signed in Succesfully")
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }

  const handleForgetPassword=()=>{
    console.log(emailRef.current.value);
    const email= emailRef.current.value
     passwordReset(email).then(result =>{
      toast.success('password reseted succesfull');
     }).catch(error =>{
      console.log(error);
     })
   
  }

  return (
    <div className="card w-full max-w-sm mx-auto bg-base-300 py-10 px-8 my-8 rounded-xl ">
      <h1 className='text-3xl font-bold text-center'>Login</h1>
      <div className="card-body   ">
        <form onSubmit={handleSignin} className="">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" ref={emailRef} placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div onClick={handleForgetPassword}><p   className="link link-hover">Forgot password?</p></div>
          <button type='submit' className="btn btn-neutral w-full mt-4">Login</button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1  sm:w-16 "></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p>New to this website? Please <Link to='/register' className='underline'>Register</Link> </p>
        {
          errorMessage && <p className='text-red-400 text-center'>{errorMessage}</p>
        }
      </div>
    </div>
  );
};

export default Signin;