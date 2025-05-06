import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const PayContext = createContext()
const PayProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [total, setTotal] = useState(10000)
    // console.log(user);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const SignOut = () => {
        return signOut(auth)
    }
    const handleSignOut = () => {
        SignOut()
            .then(() => {
                console.log('signout successfull');
            }).catch((error) => {
                console.log(error);
            });
    }

    const handlePayBill=(amount)=>{
        const  remainingTotal=total-amount
        setTotal(remainingTotal)
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
        handlePayBill
    }
    return <PayContext value={userInfo}>
        {children}
    </PayContext>;

};

export default PayProvider;