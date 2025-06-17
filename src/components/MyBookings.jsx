import React, { Suspense, use } from 'react'
import { useLoaderData } from 'react-router';
import { AuthContext } from './AuthProvider';
import BookingsList from './BookingsList';
import {myBookingsPromise} from './bookingsApi'
import Navbar from './Navbar';
const MyBookings=()=>{
  

    const {user}=use(AuthContext);
    console.log(user.accessToken);




    return(
        <div  className='w-11/12 mx-auto mt-8'>
      <Navbar></Navbar>

        <Suspense fallback={'loading.........'}>
               <BookingsList myBookingsPromise={myBookingsPromise(user.email,user.accessToken)} ></BookingsList>
        </Suspense>

        </div>
    )
}
export default MyBookings;