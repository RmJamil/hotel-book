import React from 'react';
import { Link } from 'react-router';

const Featured = ({room}) => {
  
    return (
      <div className=' flex justify-center w-full items-center p-2'>
       <Link to={`/rooms/${room._id}`}>
       
          <div className="w-full lg:h-[530px] p-4 border-2 border-red-800 rounded-xl shadow-sm ">
              <div className='flex justify-between items-center my-1'>
                <div className='flex justify-end mt-1 '><button className='btn bg-sky-500 hover:bg-sky-600'>Book now</button></div>
      <h2 className=" mb-2"><span className=' mr-2 italic '>Room No:</span> <span className='font-bold'>{room.room_number}</span></h2>
              </div>
      <img className='lg:h-48 lg:w-[500px] rounded-2xl' src={room.image_url} alt="" />
           <p className="text-xl font-bold">
       {room.description}
      </p>
      <div className="text-sm  mb-2">Fixed-price </div>
      <div><span className='font-bold'>Rent (per Night) :  $</span> {room.rent}</div>
      <div className="flex justify-between items-center mb-3">
      </div>
 
      <div className="flex flex-wrap gap-2 mb-4">
     

      </div>
     
      <div>Total review: <span className="font-bold">{room.reviews.length}</span></div>
      <div>
        {
          room.facilities.map((facility,ind)=>(
              <button key={ind} className='btn border-none bg-sky-300 m-1'>{facility}</button>
          ))
        }
      </div>
    
   
    </div>
       </Link>
      </div>
    );
};

export default Featured;