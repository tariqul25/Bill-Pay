import React, { use } from 'react';
import { PayContext } from '../Provider/PayProvider';
import { Link } from 'react-router';

const Profile = () => {
    const { user } = use(PayContext)
    // console.log(user.pho);
    return (
        <div className='mt-4 mb-16'>
            <img className='w-16 mx-auto m-2' src={user?.photoURL} alt="" />
            <p className='text-center text-3xl'>{user.displayName}</p>
            <p className='text-center mt-2 font-bold'>{user.email}</p>
            <Link to='/update' className='flex justify-center mt-3'><button className='btn btn-sm '>Update</button></Link>
        </div>
    );
};

export default Profile;