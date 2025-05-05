import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const PayContext = createContext()
const PayProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    // console.log(user);
    const [loading,setLoading]=useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Signin =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const SignOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=  onAuthStateChanged(auth, (currentUser)=>{
              setUser(currentUser)
              setLoading(false)
            });
            return ()=>{
              unSubscribe();
            }
      },[])
  

    const userInfo = {
        createUser,
        Signin,
        user,
        SignOut,
        loading,
    }
    return <PayContext value={userInfo}>
        {children}
    </PayContext>;

};

export default PayProvider;