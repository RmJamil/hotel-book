
import { useLoaderData } from 'react-router';
import Navbar from './Navbar';
import { useState } from 'react';
import Footer from './Footer';

const TaskDetails = () => {
  let [count,setCount]=useState(0);
  const handleBids=()=>{
    count+=1;
    setCount(count);
  }
 
 
    const details=useLoaderData();
    console.log(details)
    return (
<div className='lg:w-11/12 mx-auto mt-8'>

<div className='sticky top-0  z-50'> <Navbar></Navbar></div>
 <p className='text-center lg:text-4xl mt-12'> you bid for <span className='font-bold text-lime-600'>{count}</span> opportunities</p>
      <div className=' flex justify-center items-center  my-16 rounded-xl'>
       
          <div className="flex flex-col gap-4 lg:w-2/3 p-4 rounded-xl shadow-sm border-2 border-lime-400 ">
          
      <h2 className="text-lg font-semibold mb-2">{details.title}</h2>
      <div className="text-sm  mb-2">Fixed-price </div>
      <div>Apply before {details.deadline}</div>
      <div className="flex justify-between items-center mb-3">
        <div className="text-lg font-bold">${details.budget}</div>
        <div className="text-sm ">Intermediate</div>
      </div>
      <p className="text-sm  mb-3">
       {details.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-sky-500 rounded-full text-sm text-gray-700">{details.category}</span>

      </div>
      <div>Publisher: {details.username}</div>
      <div>Contact Email: {details.email}</div>
      <button onClick={handleBids} className="btn px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
        Bids
      </button>
    </div>
      </div>
      <Footer></Footer>
</div>
        
    );
};

export default TaskDetails;