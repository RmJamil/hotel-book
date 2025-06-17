import React, { use, useState } from 'react';
// import { useLoaderData } from 'react-router';
import Single from './Single';

const allApp=fetch("/allapps.json").then((res)=>res.json());
const All = () => {
    const data= use(allApp);
    // console.log(data)



    return (
       <div className='w-11/12 mx-auto '>
        <h2 className='text-center text-3xl bg-green-300 w-1/3 mx-auto p-4 rounded-2xl mt-6'>Total <span>{data.length} apps found.</span></h2>
        <h1  className='text-center text-3xl bg-lime-300 w-1/3 mx-auto p-4 rounded-2xl mt-6'>Category : All Apps</h1>
         
         <div className='grid grid-cols-3 gap-4 ml-20 my-12'>
          {
            data.map((one=>(<Single key={one.id} one={one}></Single>)))
          }
        </div>
       </div>
    );
};

export default All;