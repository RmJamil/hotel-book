import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import RoomMap from './RoomMap';

const DiscountRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

      useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch(`http://localhost:3000/discount`);
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);

    // const rooms=useLoaderData();
    // rooms.sort((a, b) => a.room_number - b.room_number);
    // console.log(rooms);

    const handleLow = (e) => {
        setSortOrder(e.target.value); // sets 'low' or 'high'
    };

      console.log(sortOrder)
    
    return (
      <div className='w-full mx-auto mt-8'>

        <Helmet>
          <title>Hotel Jeal | Discound</title>
        </Helmet>
        <Navbar></Navbar>


   

            <div className='text-center mt-16 text-5xl font-bold text-sky-400'>Get up to 30% discount</div>
        <div className='grid grid-cols-1 my-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto'>
          {  
          rooms.map((room)=>(<RoomMap key={room.room_number} room={room}></RoomMap>)
          )}
           
        </div>
        <Footer></Footer>
      </div>
    );

};

export default DiscountRooms;