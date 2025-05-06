import React, { use } from 'react';
import { PayContext } from './PayProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}= use(PayContext)
    const location =useLocation()
    // console.log(location);
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }

     return   <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRoute;