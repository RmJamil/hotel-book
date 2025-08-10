import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from './AuthProvider';

const Single = () => {

   
    return (
       <div className="hero lg:m-6 w-full">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="lg:text-5xl font-bold text-sky-500">Welcome to </h1> 
      <p className='lg:text-8xl text-sky-500'>Hotel Jeal</p>
      <p className="py-6 hidden lg:block text-sky-500 lg:text-xl">
        We prioritize personalized and attentive services ! 
      </p>
      <NavLink to='/rooms'><button className="btn bg-sky-500 border-none text-sm text-white">Book your room Now</button></NavLink>
    </div>
  </div>
</div>
    );
};

export default Single;