import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from './AuthProvider';
import { IoIosStar } from 'react-icons/io';
const Carouse = (product) => {
   console.log(product)
     const {user}=use(AuthContext);
     const[rateColor,setColor]=useState(null);
        const ratings=product?.ratings;
   
    return (
        <div className="card border-2  border-sky-500 shadow-sm">
           <NavLink to='/'>
  <figure className="lg:px-10 lg:pt-10">
    <img
      src={product.houseImg}
      alt=""
      className="rounded-xl  lg:h-[240px]  "  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product?.name}</h2>
    <p>{product?.comment} </p>

    <div className='text-center'>
     {
                     ratings?(<div className='flex justify-center items-center my-3'> <span className='font-bold mr-2'>Rating:</span> {[...Array(5)].map((star,index)=>{
                                     const currentRate=index+1;
                                     return(
                                         <>
                                         <label className=''>
                                             <input type='radio'className='hidden'  name="rate" value={currentRate} /> 
                                             <IoIosStar className='mr-1' size={16} color={currentRate <=(rateColor || ratings)? "#0ea5e9":"gray"}  />
                                             
                                         </label>
                                         </>
                                     )
                                 })}</div>) :('')
                   }
   </div>
    <div className="avatar mt-4">
  <div className="lg:w-28 lg:h-28 rounded-full ">
    <img src={product?.photo}/>
  </div>

      
  </div>
  </div>
  </NavLink>

   
</div>
    );
};

export default Carouse;