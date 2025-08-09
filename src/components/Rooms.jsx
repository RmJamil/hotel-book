import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import RoomMap from './RoomMap';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import Footer from './Footer';

const Rooms = () => {

  //  const [rooms, setRooms] = useState([]);
   const [rooms, setRooms] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

      useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch(`http://localhost:3000/rooms?sort=${sortOrder}`);
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, [sortOrder]);

    // const rooms=useLoaderData();
    // rooms.sort((a, b) => a.room_number - b.room_number);
    // console.log(rooms);

    const handleLow = (e) => {
        setSortOrder(e.target.value); // sets 'low' or 'high'
    };

      console.log(sortOrder)
    
    return (
      <div className='w-11/12 mx-auto mt-8'>

        <Helmet>
          <title>Hotel Jeal | Rooms</title>
        </Helmet>
        <Navbar></Navbar>


   
         <div className='flex justify-end lg:mr-8 lg:mt-8 '>

                <select name="sorting" onChange={handleLow} value={sortOrder} className='bg-sky-200 p-2 rounded-2xl m-3 cursor-pointer hover:bg-sky-300 border-2 border-red-700'>
                    <option value="" disabled selected>Sort</option>
                    <option value="low">Low price</option>
                    <option value="high">High price</option>
                    <option value="no">Default</option>
                </select>
               
            </div>
            <div className='text-center text-5xl font-bold text-sky-400'>Choose your dream room</div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 w-11/12 mx-auto'>
          {  
          rooms.map((room)=>(<RoomMap key={room.room_number} room={room}></RoomMap>)
          )}
           
        </div>
        <Footer></Footer>
      </div>
    );

};

export default Rooms;