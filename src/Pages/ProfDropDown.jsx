import React, { use } from 'react';
import { PayContext } from '../Provider/PayProvider';
import { Link } from 'react-router';
import Loading from './Loading';

const ProfDropDown = () => {
    const { user, SignOut,total,handleSignOut} = use(PayContext)
        
   
    
        return (
            <div>
               {
                user &&  <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="w-10 h-10 rounded-full overflow-hidden border ml-1 border-gray-300"> {user?.photoURL && (
                    <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                )}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-16  text-xs md:text-base md:w-20 lg:w-26 lg:h-31 p-2 shadow-sm">
                    <li><Link to='/profile' className='cursor-pointer'>Profile</Link></li>
                    <li><p>{total}</p></li>
                    <li><p onClick={handleSignOut} className=" md:text-base  md:h-9   cursor-pointer">Sign Out</p></li>
                </ul>
            </div>
               }

            </div>
        );
    };

export default ProfDropDown;