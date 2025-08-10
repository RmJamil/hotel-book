import React from 'react';
import { Link } from 'react-router';


const RoomMap = ({room}) => {
    
   
    console.log(room);
    return (
       <div className='lg:w-11/12 mx-auto mt-8'>
        <Link to={`/rooms/${room._id}`}>
       <div className=' flex justify-center items-center p-2'>
       
          <div className="w-full lg:h-[530px] p-4 border-2 border-sky-500 rounded-xl shadow-sm ">
      <h2 className=" mb-2"><span className=' mr-2 italic '>Room No:</span> <span className='font-bold'>{room.room_number}</span></h2>
      <img className='lg:h-48 w-full rounded-2xl' src={room.image_url} alt="" />
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
              <button key={ind} className='border-2 m-1 border-sky-400 p-2 cursor-pointer rounded-xl hover:bg-sky-500'>{facility}</button>
          ))
        }
      </div>
   
    </div>
      </div>
      </Link>
       </div>
    );
};

export default RoomMap;