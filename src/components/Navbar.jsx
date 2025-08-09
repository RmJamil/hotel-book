import React, { use, useEffect, useState } from 'react';
import log3 from '../assets/log3.png';

import '../../src/index.css';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { addCart, getCart } from './Local';
import { NavLink } from 'react-router';

const Navbar = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // NEW: toggle mobile menu

  
  const { user, setUser, logout } = use(AuthContext);

  const handleLogOut = () => {
    logout().then(() => {
      setUser(null);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You Logged out",
        showConfirmButton: true,
        timer: 1300
      });
    }).catch((error) => {
      console.log(error);
    });
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/rooms">Rooms</NavLink></li>
      <li><NavLink to='/mybookings'>My Bookings</NavLink></li>
      
    </>
  );

  return (
    <div className="navbar bg-sky-300 lg:px-16 lg:py-4 w-full shadow-sm rounded-md lg:rounded-xl">
      <div className="flex-1 flex items-center justify-between w-full">
        {/* Logo and Mobile Toggle */}
        <div className="flex flex-col-reverse top-0 lg:flex-row items-center">
          <img className="w-16 rounded-2xl mr-2" src='https://i.postimg.cc/9FC4LYZw/h.avif' alt="Logo" />
          <div className="flex flex-col">
            <span className="text-xl font-bold italic">Hotel Jeal</span>
           
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex flex-col justify-end">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="btn btn-ghost p-0 bg-sky-300 border-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

           {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          
         <div className='flex flex-col'>
           <ul className=" menu menu-vertical gap-2 shadow rounded p-4 mt-4 highlighted">
            {links}
            {user ? (
              <li><button onClick={handleLogOut}>Log out</button></li>
            ) : (
              <>
                <li><NavLink to="/register">Sign up</NavLink></li>
                <li><NavLink to="/login">Log in</NavLink></li>
              </>
            )}
          </ul>
         </div>
        </div>
      )}

          
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
         
          <ul className="menu menu-horizontal gap-4 highlighted">
            {links}
          </ul>
        </div>

        {/* Auth Section */}
        <div className="hidden lg:flex items-center gap-4 highlighted">
          {user ? (
            <div className="flex items-center gap-3 group">
              <span className="opacity-0 group-hover:opacity-100">{user.displayName}</span>
              <img src={user.photoURL} alt="User" className="w-12 h-12 rounded-full" />
              <button onClick={handleLogOut} className="btn bg-blue-500 font-semibold rounded-sm border-none">Log out</button>
            </div>
          ) : (
            <>
              <NavLink to="/register" className="btn bg-blue-500 font-semibold rounded-sm border-none">Sign up</NavLink>
              <NavLink to="/login" className="btn bg-blue-500 font-semibold rounded-sm border-none">Log in</NavLink>
            </>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
