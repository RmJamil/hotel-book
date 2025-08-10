import React from 'react';

const Success = () => {
    return (
        <div className='bg-sky-100 lg:p-6 lg:m-4 lg:my-16 p-3 rounded-2xl'> 
            <p className='text-center font-bold text-sky-400 text-4xl lg:my-8 lg:mt-6'>Our Success</p>
         <div className='grid lg:grid-cols-3 gap-4'>
             <div>
            <div><img className='lg:h-[380px] rounded-2xl' src="https://i.postimg.cc/wxsH8zCT/sec.jpg" alt="" /></div>
            </div>  
            <div>
                <div><img className='lg:h-[380px] rounded-2xl' src="https://i.postimg.cc/MKxLP8xL/succ.jpg" alt="" /></div>
            </div>
            <div>
                <div>
                    <img className='lg:h-[380px] rounded-2xl' src="https://i.postimg.cc/bNZjHhTj/ro.jpg" alt="" />
                </div>
            </div>
         </div>
        </div>
    );
};

export default Success;