import Lottie from 'lottie-react';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import animationData from "../../src/assets/lot.json";
const Behind = () => {
    return (
      <div className='mx-auto w-full'>
        <div className='text-center text-5xl font-bold text-sky-500 '>

          <span className='text-lime-600 font-bold'>
                  <Typewriter
                      words={['Behind this app']}
                      loop={30}
                      cursor
                      cursorStyle='_'
                      typeSpeed={80}
                      deleteSpeed={60}
                      delaySpeed={1000}
                   
                    /></span>
        </div>
          <div className="flex justify-center  mx-auto rounded-2xl shadow-sm my-12 border-2 border-lime-400 py-8 px-60 ">

  <figure className='flex flex-col gap-4'>
    <img
      src="https://i.postimg.cc/v81QyHD0/IMG-20240918-WA0002.jpg"
      alt="Movie" />
     <div>Contact: <a href="https://www.jecoton@gmail.com"><span className='text-sky-500 underline'>jecoton@gmail.com</span></a></div>
  </figure>
   
  <div className="card-body ml-20">
    <h2 className="card-title text-4xl text-sky-500">MERN stack Web Developer</h2>
    <p className='text-3xl text-sky-500'>Skills :</p>
    <ul className='text-xl list-disc ml-24'>
        <li>Html</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>BootStrap</li>
        <li>JavaScript</li>
        <li>React Js</li>
        <li>MongoDb</li>
        <li>Node Js</li>
        <li>Express Js</li>
    </ul>
    
   
  </div>
  <div className='flex flex-col gap-4'>
    
            <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  <div className='flex gap-6 justify-center items-center'>
  <a href="https://www.facebook.com"><CiFacebook size={60} color=' #4267B2' /></a>
  <a href="https://www.youtube.com"><FaYoutube size={60} color='red' /></a>
  <a href="https://www.instagram.com"><FaInstagram size={60} color='#d62976' /></a>
  <a href="https://www.linkedin.com"><FaLinkedin size={60} color='#0077B5' /></a>
</div>
  </div>

</div>


      </div>
    );
};

export default Behind;