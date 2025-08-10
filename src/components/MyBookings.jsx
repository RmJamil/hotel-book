import React, { Suspense, use } from 'react'
import { AuthContext } from './AuthProvider';
import BookingsList from './BookingsList';
import {myBookingsPromise} from './bookingsApi'
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
const MyBookings=()=>{
  

    const {user}=use(AuthContext);
    console.log(user.accessToken);




    return(
        <div  className=' mt-8'>
          <Helmet>
            <title>Hotel Jeal | My Bookings</title>
          </Helmet>
      <Navbar></Navbar>

        <div className='w-11/12 mx-auto'>
          <Suspense fallback={'loading.........'}>
               <BookingsList myBookingsPromise={myBookingsPromise(user.email,user.accessToken)} ></BookingsList>
        </Suspense>
        </div>
          <Footer></Footer>
        </div>
    )
}
export default MyBookings;