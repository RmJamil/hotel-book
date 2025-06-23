import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import All from './All';
import Slider from './Slider';
import Trending from './Trending';
import TalentByCategory from './TalentByCategory';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css'; // Icons
import Single from './Single';
import Carouse from './Carouse';

const Header = () => {

 
  return (
    <div className='bg-[url(https://i.postimg.cc/tCCM1S7C/hhh.jpg)] flex flex-col justify-center bg-no-repeat bg-cover bg-center h-[90vh] border-2 border-red-800 m-8 rounded-2xl'>
   <Marquee flex pauseOnHover={true}>

  <div className='flex items-center justify-center'>
     <div className="carousel">
<Slider></Slider>

  </div>
  </div>

     </Marquee>
 
    </div>
  );
};

export default Header;