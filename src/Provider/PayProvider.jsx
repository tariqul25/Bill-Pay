import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import toast from 'react-hot-toast';
import Loading from '../Pages/Loading';

export const PayContext = createContext();

const PayProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [paid, setPaid] = useState(() => {
        const saved = localStorage.getItem('paidBills');
        try {
            const parsed = JSON.parse(saved);
            return Array.isArray(parsed) ? parsed : []; 
        } catch {
            return [];
        }
    });

    const getInitialTotal = () => {
        const saved = localStorage.getItem('total');
        return saved ? parseInt(saved) : 10000;
    };

    const [total, setTotal] = useState(getInitialTotal);

    const handlePayBill = (amount, billId) => {
        const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];

        if (paidBills.includes(billId)) {
            toast.error('This bill is already paid.');
            return;
        }

        const remainingTotal = total - amount;
        setTotal(remainingTotal);
        localStorage.setItem('total', remainingTotal);

        const updatedPaidBills = [...paid, billId];
        setPaid(updatedPaidBills);

        localStorage.setItem('paidBills', JSON.stringify(updatedPaidBills)); // ✅ এখানে updatedPaidBills ব্যবহার হয়েছে

        toast.success('Paid Successfully');
    };

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const GoogleSignIn = () => {
        return signInWithPopup(auth, provider);
    };

    const Signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const SignOut = () => {
        return signOut(auth);
    };

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const handleSignOut = () => {
        SignOut()
            .then(() => {
                localStorage.clear();
                console.log('signout successful');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

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
        paid,
        setPaid
    };

    return (
        <PayContext value={userInfo}>
            {children}
        </PayContext>
    );
};

export default PayProvider;
