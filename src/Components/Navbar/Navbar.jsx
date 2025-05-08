import React, { use } from 'react';
import logo from '../../assets/EasyPayBD.png'
import { Link, NavLink } from 'react-router';
import '../../index.css'
import { PayContext } from '../../Provider/PayProvider';
import ProfDropDown from '../../Pages/ProfDropDown';
import Loading from '../../Pages/Loading';
const links = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/bills'>Bills</NavLink>
    <NavLink to='/profile'>Profile</NavLink>
</>

const Navbar = () => {
    const { user, SignOut, handleSignOut, loading } = use(PayContext)

    if (loading) {
        return <Loading></Loading>;
    }
    // console.log(user);
    return (
        <div className=" bg-blue-50 shadow-sm">
            <div className='navbar w-11/12 mx-auto'>
                <div className="navbar-start">

                    <img className='w-20' src={logo} alt="" />
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 space-x-3 md:space-x-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {user && <p className='mr-1'>{user.email}</p>} */}
                    <div>
                        {
                            !user && (
                                <div className="flex gap-1">
                                    {user ? (
                                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                                    ) : (
                                        <Link to="/login" className="btn btn-xs md:btn">Sign In</Link>
                                    )}
                                    <Link to="/register" className="btn btn-xs md:btn">Register</Link>
                                </div>
                            )
                        }
                    </div>
                    <ProfDropDown></ProfDropDown>
                </div>
            </div>
        </div>
    );
};

export default Navbar;