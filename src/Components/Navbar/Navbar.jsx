import React, { use } from 'react';
import logo from '../../assets/EasyPayBD.png'
import { Link, NavLink } from 'react-router';
import '../../index.css'
import { PayContext } from '../../Provider/PayProvider';
import ProfDropDown from '../../Pages/ProfDropDown';
const links = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/bills'>Bills</NavLink>
    <NavLink to='/profile'>Profile</NavLink>
</>

const Navbar = () => {
    const { user, SignOut,handleSignOut } = use(PayContext)
        ;
    // console.log(user);
    return (
        <div className=" bg-blue-50 shadow-sm">
            <div className='navbar w-11/12 mx-auto'>
                <div className="navbar-start">

                    <img className='w-20' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {user && <p className='mr-1'>{user.email}</p>} */}
                    <div className='gap-1 flex'>
                        {user ? (<button onClick={handleSignOut} className="btn ">SIgn Out</button>) : (<Link to='/login' className="btn ">SIgn In</Link>)}
                        {!user && <Link to='/register' className="btn ">Register</Link>}
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <ProfDropDown></ProfDropDown>

                </div>
            </div>
        </div>
    );
};

export default Navbar;