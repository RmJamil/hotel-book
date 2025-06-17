import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppCard from './AppCard';

const CategoryApps = () => {
    const {cat}=useParams();
    const data = useLoaderData();
    const [apps,setApps]=useState([]);
    useEffect(()=>{
        const filterdApps=data.filter((one)=>one.category==cat);
         console.log(filterdApps)
        setApps(filterdApps);
    },[data,cat]);
   
    return (
        <div>
          <h2 className='text-center text-3xl bg-green-400 w-1/3 mx-auto p-4 rounded-2xl mt-6'>Total <span>{apps.length} apps found.</span></h2>
          <h1 className='text-center text-4xl bg-green-300  w-1/3 mx-auto p-4 rounded-2xl mt-6'>Category: <span>{cat}</span></h1>
          <div className='grid grid-cols-3 gap-8'>
            {apps.map((app)=>(
                <AppCard key={app.id} app={app}></AppCard>

            ))}
          </div>
        </div>
    );
};

export default CategoryApps;