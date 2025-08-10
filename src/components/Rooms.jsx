import React, { useEffect, useState } from 'react';
import RoomMap from './RoomMap';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import Footer from './Footer';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true); 
        const response = await fetch(`https://hotel-booking-server-three-lake.vercel.app/rooms?sort=${sortOrder}`);
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchRooms();
  }, [sortOrder]);

  const handleLow = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="mt-8">
      <Helmet>
        <title>Hotel Jeal | Rooms</title>
      </Helmet>
     <div className='sticky top-0 z-50'>
       <Navbar />
 </div>

      <div className="flex justify-end lg:mr-16 lg:mt-8">
        <select
          name="sorting"
          onChange={handleLow}
          value={sortOrder}
          className=" p-2 rounded-2xl m-3 cursor-pointer border-2 border-sky-500  hover:bg-sky-500"
        >
          <option value="" disabled>
            Sort
          </option>
          <option value="low">Low price</option>
          <option value="high">High price</option>
          <option value="no">Default</option>
        </select>
      </div>

      <div className="text-center text-5xl font-bold text-sky-400">
        Choose your dream room
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          {/* Simple Tailwind Spinner */}
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 lg:w-11/12 mx-auto">
          {rooms.map((room) => (
            <RoomMap key={room.room_number} room={room} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Rooms;
