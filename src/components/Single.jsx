import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from './AuthProvider';

const Single = () => {

   
    return (
       <div className="hero m-6 w-full r">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-sky-600">Welcome to </h1> 
      <p className='text-8xl text-red-700'>Hotel Jeal</p>
      <p className="py-6 text-pink-800 text-xl">
        We prioritize personalized and attentive services ! 
      </p>
      <NavLink to='/rooms'><button className="btn bg-sky-500 border-none text-white">Book your room Now</button></NavLink>
    </div>
  </div>
</div>
    );
};

export default Single;