import React from 'react';
import Single from './Single';


import Featured from './Featured';
import { Typewriter } from 'react-simple-typewriter';
const Trending = ({rooms}) => {
  
rooms.sort((a, b) => ((b.reviews.length) - (a.reviews.length)));

rooms=rooms.slice(0,6);

console.log(rooms)


    return (
      
       
   <div>
    <p className='text-center text-5xl my-10 '>
      <span className='text-sky-500 font-bold'>
        <Typewriter
            words={['Featured Rooms']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={800}
           
         
          /></span></p>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
  {
  rooms.map((room)=>(
<Featured key={room.room_number} room={room}></Featured>
  ))
}
</div>
   </div>
   
    );
};

export default Trending;