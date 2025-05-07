import React, { use, useState } from 'react';
import { PayContext } from '../../Provider/PayProvider';
import { Link, Navigate, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser } = use(PayContext)
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)



  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value
    const photoURL=e.target.photoUrl.value
    const password = e.target.password.value
    // console.log(name,email,password);

    // setSuccess(false)
    setErrorMessage('');

    const passRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (name.length < 6) {
      return setErrorMessage('Name should be atleast 6 character')
    }
    if (passRegex.test(password) === false) {
      setErrorMessage('Password must be 1 lower case, 1 upper case and at least 6 character')
      return;
    }



    createUser(email, password).then((result) => {
      // sendEmailVerification(auth.currentUser)
      //   .then(() => {
      //     setSuccess(true)
      //     alert('We send you a verification email. Please check your email')
      //   });
      // Signed up 
      // const user = result.user;
      // console.log(user);

      updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photoURL,
      }).then(()=>{
        toast.success('profile updated');
        console.log(auth.currentUser);
      }).catch(error =>{
        console.log(error);
        setErrorMessage(error)
      })

      navigate('/')
    })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className="card w-full max-w-sm mx-auto shrink-0 py-10  bg-base-300 px-6 my-8">
      <h1 className='text-3xl font-bold text-center'>Register</h1>
      <div className="card-body     rounded-xl ">
        <form onSubmit={handleRegister} className="">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          <label className="label">Photo-Url</label>
          <input type="text" name='photoUrl' className="input py-2" placeholder='photoUrl' />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <button type='submit' className="btn btn-neutral w-full mt-4">Register</button>
          <p className="text-start mb-0">
            Already  Have an account? <Link to="/login" className="underline">Login</Link>
          </p>
        </form>
        {
          errorMessage && <p className='text-red-400 text-center'>{errorMessage}</p>
        }
        {
          success && <p className='text-green-400 text-center'>User Created Successfully</p>
        }
      </div>
    </div>
  );
};

export default Register;