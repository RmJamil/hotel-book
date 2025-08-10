import React, { useEffect, useState } from 'react';
import Carouse from './Carouse';
import Trending from './Trending';
import TalentByCategory from './TalentByCategory';
import { Carousel } from 'primereact/carousel';
import MapView from './MapView';



const Main = () => {

      const [rooms,setrooms]=useState([]);


        const [revw,setrevw]=useState([])
      
         useEffect(()=>{
             fetch('https://hotel-booking-server-three-lake.vercel.app/rooms/reviews').then(res=>res.json()).then(data=>{
            setrevw(data);
         
         
             })
          },[]);
          console.log(revw)
          
          revw.sort((a,b) => ((b.timestamp)-(a.timestamp)));
  // const[visit,setVisit]=useState([]);

  // useEffect(()=>{
  //   fetch('https://hotel-booking-server-three-lake.vercel.app/history').then(res=>res.json()).then(data=>{
  //     setVisit(data);
  //   })
  // },[])
  // console.log(visit);
  useEffect(()=>{
    fetch('https://hotel-booking-server-three-lake.vercel.app/rooms').then(res=>res.json()).then(data=>{
      setrooms(data);
    })
  },[])
  console.log(rooms);
  

    return (
        <div>
            
             <div className='grid lg:grid-cols-2 gap-2'>
            <div className='hidden lg:block'>
                 <p className='text-center my-6 lg:text-3xl text-sky-500 font-bold'>Top Review</p>
    <Carousel value={revw} numVisible={3} numScroll={2}  className="custom-carousel " 
    circular autoplayInterval={3000}
 itemTemplate={Carouse} />
            </div>
           <div>
            <p className='text-center text-3xl font-bold text-sky-500 mt-6'>Visit our exclusive hotel</p>
             <div className='mt-8 p-2 border-2 border-red-800 rounded-2xl'>
            <MapView/>
            <p className='italic lg:text-3xl font-bold mt-4 lg:ml-4 text-sky-500'>Address:</p>
            <p className='lg:text-5xl font-bold mt-4 lg:ml-24 text-red-700'>Hotel Jeal <span className='text-xl text-green-400' >(5 Star hotel)</span></p>
           
            <p className='lg:text-2xl font-bold  lg:ml-34'>
                   Mongla port beach, <br />
                   Khulna,  <br />
                   Bangladesh. <br />
                   contact:0199-123456
            </p>
    
            </div>
           </div>
  </div>
{/* autoplayInterval={3000} */}



   <div>
    <Trending rooms={rooms}></Trending>
   </div>

     
        </div>
    );
};

export default Main;