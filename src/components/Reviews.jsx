import React, { useState } from 'react';
import { IoIosStar } from 'react-icons/io';

const Reviews = ({ek}) => {
   
    const[rateColor,setColor]=useState(null);
    const {comment,ratings}=ek;
    // console.log(ek)
    return (
        <div className='border border-r-4 border-sky-400 my-8 p-6 rounded-2xl text-wrap overflow-hidden'>
          <div className='wrap-break-word overflow-hidden'>
            <span className='text-2xl text-sky-400 font-bold'>{ek.name}:</span> <span className='mr-6 text-3xl'>{comment}</span>
          </div>

             {
                    ratings?(<div className='flex'>{[...Array(5)].map((star,index)=>{
                                    const currentRate=index+1;
                                    return(
                                        <>
                                        <label>
                                            <input type='radio'className='hidden'  name="rate" value={currentRate} /> 
                                            <IoIosStar className='mr-1' size={16} color={currentRate <=(rateColor || ratings)? "red":"gray"}  />
                                            
                                        </label>
                                        </>
                                    )
                                })}</div>) :('')
                  }
        </div>
    );
};

export default Reviews;