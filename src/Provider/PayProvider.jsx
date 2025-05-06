import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const PayContext = createContext()
const PayProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // console.log(user);
    const [loading, setLoading] = useState(true)
    
    // const getInitialTotal = () => {
    //     const saved = localStorage.getItem('total');
    //     return saved ? parseInt(saved) : 10000;
    // }

    const handlePayBill=(amount)=>{
        const  remainingTotal=total-amount
        setTotal(remainingTotal)
        // localStorage.setItem('total', remainingTotal); 
    }
    const [total, setTotal] = useState(10000)
    
    const provider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const GoogleSignIn =()=>{
        return signInWithPopup(auth,provider)
    }
    const Signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const SignOut = () => {
        return signOut(auth)
    }

    const passwordReset =(email)=>{
        return sendPasswordResetEmail(auth,email);
    }
    const handleSignOut = () => {
        SignOut()
            .then(() => {
                console.log('signout successfull');
            }).catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const userInfo = {
        createUser,
        Signin,
        user,
        SignOut,
        loading,
        total,
        handleSignOut,
        handlePayBill,
        GoogleSignIn,
        passwordReset,
        
    }
    return <PayContext value={userInfo}>
        {children}
    </PayContext>;

};

export default PayProvider;