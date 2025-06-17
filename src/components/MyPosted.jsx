import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from './AuthProvider';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import '../../src/index.css'
import Footer from './Footer';

const MyPosted = () => {

  

    const {user}=use(AuthContext);
      let jobs=useLoaderData();
      
      const initialCart=jobs.filter(job=>job.email==user.email);
      console.log(initialCart);
      const[cart,setCart]=useState(initialCart);

const handleUpdate=(id)=>{

}
const handleDelete=(id)=>{
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "delete"
}).then((result) => {
  console.log(result.isConfirmed)
  if (result.isConfirmed) {
    fetch(`https://hotel-booking-server-three-lake.vercel.app/addtask/${id}`,
     {
      method:'DELETE'
     } 
    ).then(res=>res.json()).then(data=>{
      console.log('after delete',data);
      if(data.deletedCount){
 Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remCart=cart.filter(one=>one._id==id);
    setCart(remCart);
      }
    })
   
  }
});

}




    return (
      <div className='lg:w-11/12 mx-auto mt-8'>
       
         <div className='sticky top-0  z-50'><Navbar></Navbar></div>
   <p className='text-center text-5xl mt-24 border-b-2 pb-2 mb-4'>Jobs posted by : <span className='text-5xl font-bold text-blue-500'>{user.displayName}</span> </p>
<div className="hidden lg:block lg:w-4/5 mx-auto mt-24 border-1 border-lime-400 p-12 rounded-xl">
  <table className="table table-xs w-full mx-auto ">
    <thead>
      <tr className='sty text-green-600'>
        <th></th>
        <th>Title</th>
        
        <th>Category</th>
   
        <th>Deadline</th>
        <th>Budget</th>
      </tr>
    </thead>
     <tbody>
{
    cart.map((job,index)=><tr className='tsyle' key={job._id}>
         <th>{index+1}</th>
    <td>{job.title}</td>
     
        <td>{job.category}</td>
      
        <td>{job.deadline}</td>
        <td>${job.budget}</td>
        <td><Link to={`/updatepost/${job._id}`}><button onClick={()=>handleUpdate(job._id)} className='btn bg-lime-500'>Update</button></Link></td>
        <td><button onClick={()=>handleDelete(job._id)} className='btn bg-lime-500'>Delete</button></td>
        <td><Link to={`/addtask/${job._id}`}><button className='btn bg-lime-500'>Bids</button></Link></td>
    </tr>)
}

     </tbody>
  </table>




</div>


<div className='lg:hidden flex flex-col gap-3 mt-2'>

  {
cart.map((job)=>(
   <div className=' flex flex-col gap-1 justify-center items-center'>
       
          <div className="w-full lg:h-[400px] p-4 border-2 border-lime-400 rounded-xl shadow-sm ">
      <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
      <div className="text-sm  mb-2">Fixed-price </div>
      <div>Apply before {job.deadline}</div>
      <div className="flex justify-between items-center mb-3">
        <div className="text-lg font-bold">Budget: ${job.budget}</div>
        <div className="text-sm ">Intermediate</div>
      </div>
      <p className="text-smmb-3">
       {job.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-sky-500 rounded-full text-sm">{job.category}</span>

      </div>
      <div>Publisher: {job.username}</div>
      <div>Contact Email: {job.email}</div>
      <div className='flex flex-row gap-3 mt-2'>
        <Link to={`/updatepost/${job._id}`}><button onClick={()=>handleUpdate(job._id)} className='btn bg-lime-500'>Update</button></Link>
        <button onClick={()=>handleDelete(job._id)} className='btn bg-lime-500'>Delete</button>
        <Link to={`/addtask/${job._id}`}><button className='btn bg-lime-500'>Bids</button></Link>
      </div>
    </div>
      </div>
))



  }

</div>
<Footer></Footer>
        </div>
    );
};

export default MyPosted;