import React, { use } from 'react';
// import { useLoaderData } from 'react-router';
import Single from './Single';

const allApp=fetch("/allapps.json").then((res)=>res.json());
const Slider = ({visit}) => {
    const data= use(allApp);
    // const visitors=use(visit);
    console.log(visit)



    return (
      
       
         
        <div>
        
             <div className='flex flex-row '>
          {
            visit.map((one=>(<Single key={one.id} one={one}></Single>)))
          }
        </div>
        </div>
   
    );
};

export default Slider;