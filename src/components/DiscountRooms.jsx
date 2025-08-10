import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import RoomMap from './RoomMap';

const DiscountRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true); // start loading
        const response = await fetch(`https://hotel-booking-server-three-lake.vercel.app/discount`);
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="lg:w-full mx-auto mt-8">
      <Helmet>
        <title>Hotel Jeal | Discount</title>
      </Helmet>
      <div className='sticky top-0 z-50'>
       <Navbar />
 </div>
      <div className="text-center mt-16 text-xl lg:text-5xl font-bold text-sky-400">
        Get up to 30% discount
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          {/* Tailwind Spinner */}
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 my-2 lg:grid-cols-3 gap-3 lg:w-11/12 mx-auto">
          {rooms.map((room) => (
            <RoomMap key={room.room_number} room={room} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DiscountRooms;
