import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

export const PayContext = createContext()
const PayProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // console.log(user);
    const [loading, setLoading] = useState(true)

    
    const getInitialTotal = () => {
        const saved = localStorage.getItem('total');
        return saved ? parseInt(saved) : 10000;
    }

    // const handlePayBill=(amount,id)=>{
    //     const  remainingTotal=total-amount
    //     setTotal(remainingTotal)
    //     localStorage.setItem('total', remainingTotal); 
    // }
    const handlePayBill = (amount, billId) => {
        const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
    
        if (paidBills.includes(billId)) {
            toast.error('This bill is already paid.');
            return;
        }
    
        const remainingTotal = total - amount;
        setTotal(remainingTotal);
        localStorage.setItem('total', remainingTotal);
        paidBills.push(billId);

        localStorage.setItem('paidBills', JSON.stringify(paidBills));
        toast.success('Paid Successfully')
    } 

    const [total, setTotal] = useState(getInitialTotal)
    
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
                localStorage.clear()
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