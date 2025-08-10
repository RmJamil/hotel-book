import React, { useEffect, useState } from 'react';
import Service from './Service';

const Roomservices = () => {

const [serv,setServ]=useState([]);

 useEffect(()=>{
       fetch('https://hotel-booking-server-three-lake.vercel.app/service').then(res=>res.json()).then(data=>{
      setServ(data);
   
   
       })
    },[]);
console.log(serv)
    return (
        <div>
            <p className='text-center text-5xl my-6 text-sky-400 font-bold lg:my-12'>Our premium services</p>
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    serv.map((one)=>(<Service one={one}></Service>))
                }
        
            </div>
        </div>
    );
};

export default Roomservices;