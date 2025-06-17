import React, { useState } from 'react';
import { use } from 'react';
import { AuthContext } from './AuthProvider';
import { useLoaderData } from 'react-router';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import Footer from './Footer';


const UpdatePost = () => {
const {user}=use(AuthContext);
const initialjobs=useLoaderData();
console.log(initialjobs)

 const [jobs,setJobs]=useState(initialjobs)


const handleUpdate=(e)=>{
    e.preventDefault();

const formData=new FormData(e.target);
const data= Object.fromEntries(formData.entries());
console.log(data);

// send to db
fetch(`https://hotel-booking-server-three-lake.vercel.app/updatepost/${jobs._id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
  // …
}).then(res=>res.json())
.then(data=>{
  console.log('after job in DB',data);
  if(data.modifiedCount){
 Swal.fire({
        position: "center",
        icon: "success",
        title: "Congratulations! you successfully updated this task !",
        showConfirmButton: true,
        timer: 2000
      });
  }
  else{
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Update / Change atleast one field.",
 
});
  }

  
});


}
    return (
       <div className='lg:w-11/12 mx-auto mt-8 mb-24'>

        

        <div className='sticky top-0  z-50'><Navbar></Navbar></div>

<div className='flex justify-center flex-col items-center gap-2 mt-3'>
  
           <div className='text-3xl font-bold lg:mt-24'>Update your task</div>

      <div className="flex  justify-center w-full lg:my-10">
     
         
          <div className="card lg:w-1/3  shadow-2xl">
            <div className="card-body border-2 border-lime-400 lg:p-12 rounded-2xl mt-2">
             <form onSubmit={handleUpdate}>
    <label>Task Title</label>
    <input type="text" id="title" name="title" className="input w-full mb-3 mt-1 text-black" defaultValue={jobs.title}  required/>

    <label>Category</label>
    <select id="category" name="category" className="input w-full mb-3 mt-1 text-black" defaultValue={jobs.category} required>
      <option value="">-- Select a category --</option>
      <option value="web-development">Web Development</option>
      <option value="Graphic Design">Graphic Design</option>
      <option value="Data Entry">Data Entry</option>
      <option value="design">Design</option>
      <option value="writing">Writing</option>
      <option value="marketing">Marketing</option>
      <option value="Video Editing">Video Editing</option>
      <option value="vfx">VFX</option>
    </select>

    <label>Description</label>
    <textarea className="input w-full lg:h-12 mb-3 mt-1 text-black" id="description" name="description" rows="48" defaultValue={jobs.description} required></textarea>

    <label>Deadline</label>
    <input className="input w-full mb-3 mt-1 text-black" type="date" id="deadline" name="deadline" defaultValue={jobs.deadline} required/>

    <label >Budget</label>
    <input className="input w-full mb-3 mt-1 text-black" type="number" id="budget" name="budget" min="0" defaultValue={jobs.budget} required/>

    <label >User Email</label>
    <input className="input w-full mb-3 mt-1 text-black" type="email" id="email" name="email" value={ user && user.email} readOnly/>

    <label>User Name</label>
    <input className="input w-full mb-3 mt-1 text-black" type="text" id="username" name="username" value={ user && user.displayName} readOnly/>

    <button className="btn w-full mt-8 bg-lime-400 text-black border-[#e5e5e5]" type="submit">Update</button>
  </form>
     </div>       
     </div>    

        </div>
</div>
<Footer></Footer>
    </div>
    );
};

export default UpdatePost;