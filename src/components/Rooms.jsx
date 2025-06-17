import React from 'react';
import { useLoaderData } from 'react-router';
import RoomMap from './RoomMap';
import Navbar from './Navbar';

const Rooms = () => {
    const rooms=useLoaderData();
    rooms.sort((a, b) => a.room_number - b.room_number);
    console.log(rooms);
    return (
      <div>
        <Navbar></Navbar>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 w-11/12 mx-auto'>
          {  
          rooms.map((room)=>(<RoomMap key={room.room_number} room={room}></RoomMap>)
          )}
           
        </div>
      </div>
    );
};

export default Rooms;