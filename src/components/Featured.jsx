import React from 'react';

const Featured = ({room}) => {
  
    return (
      <div className=' flex justify-center items-center p-2'>
       
          <div className="w-full lg:h-[530px] p-4 border-2 border-lime-400 rounded-xl shadow-sm ">
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
          room.facilities.map((facility)=>(
              <button className='btn border-none bg-blue-500 m-1'>{facility}</button>
          ))
        }
      </div>
   
    </div>
      </div>
    );
};

export default Featured;