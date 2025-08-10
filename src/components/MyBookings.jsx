import React, { Suspense, use } from 'react';
import { AuthContext } from './AuthProvider';
import BookingsList from './BookingsList';
import { myBookingsPromise } from './bookingsApi';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import Footer from './Footer';

const MyBookings = () => {
  const { user } = use(AuthContext);
  console.log(user.accessToken);

  return (
    <div className="mt-8 ">
      <Helmet>
        <title>Hotel Jeal | My Bookings</title>
      </Helmet>

 <div className='sticky top-0 z-50'>
       <Navbar />
 </div>

      <div className="w-11/12 mx-auto">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              {/* Tailwind Spinner */}
              <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          }
        >
          <BookingsList
            myBookingsPromise={myBookingsPromise(user.email, user.accessToken)}
          />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};

export default MyBookings;
