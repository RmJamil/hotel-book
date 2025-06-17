import React from 'react';
import { NavLink } from 'react-router';

const Single = ({one}) => {
    // console.log(one)
   
    return (
        <div className="card w-50 lg:w-150 shadow-sm">
           <NavLink to='/'>
  <figure className="lg:px-10 px-3 pt-10">
    <img
      src={one.image}
      alt="Shoes"
      className="rounded-xl lg:w-[560px] lg:h-[240px] h-28" />
  </figure>
  <div className="hidden lg:block card-body items-center text-center">
    <h2 className="card-title">{one.name}</h2>
  
  </div>
  </NavLink>
</div>
    );
};

export default Single;