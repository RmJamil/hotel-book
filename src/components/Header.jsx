import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import All from './All';
import Slider from './Slider';
import Trending from './Trending';
import TalentByCategory from './TalentByCategory';

const Header = () => {

  const [rooms,setrooms]=useState([]);
  const[visit,setVisit]=useState([]);

  useEffect(()=>{
    fetch('https://hotel-booking-server-three-lake.vercel.app/history').then(res=>res.json()).then(data=>{
      setVisit(data);
    })
  },[])
  console.log(visit);
  useEffect(()=>{
    fetch('https://hotel-booking-server-three-lake.vercel.app/rooms').then(res=>res.json()).then(data=>{
      setrooms(data);
    })
  },[])
  console.log(rooms);
  
  return (
    <div>
   <Marquee flex pauseOnHover={true}>

   <div className="carousel w-full">
<Slider visit={visit}></Slider>
  </div>


   </Marquee>

   <div>
    <Trending rooms={rooms}></Trending>
   </div>
   <div>
    <TalentByCategory></TalentByCategory>
   </div>
    </div>
  );
};

export default Header;