import React, { use, useState } from 'react';
import Navbar from './Navbar';
import { AuthContext } from './AuthProvider';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import Footer from './Footer';

const AddTask = () => {
  
  const initialjobs=useLoaderData();

  const [jobs,setJobs]=useState(initialjobs)
const {user}=use(AuthContext);
console.log(user)
const handleAdd=(e)=>{
    e.preventDefault();

const formData=new FormData(e.target);
const data= Object.fromEntries(formData.entries());
console.log(data);

// send to db
fetch("http://localhost:3000/addtask", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
  // …
}).then(res=>res.json())
.then(data=>{
  console.log('after job in DB',data);
  const updated=[...initialjobs,data];
  setJobs(updated);
  e.target.reset();
   Swal.fire({
        position: "center",
        icon: "success",
        title: "Congratulations! you successfully posted your task !",
        showConfirmButton: true,
        timer: 2000
      });
});


}


    return (
        <div className='w-11/12 mx-auto mt-8 mb-24'>

        <div className='sticky top-0  z-50'><Navbar></Navbar></div>

      <div className="flex items-center flex-col  w-full  my-10">
         <div className='text-3xl font-bold my-4'>Post your job</div>
          <div className="card w-full lg:w-5/9 my-2 shadow-2xl">
            <div className="w-full border-1 border-lime-400 p-2 lg:p-12 rounded-2xl">
             <form onSubmit={handleAdd}>
    <label>Task Title</label>
    <input type="text" id="title" name="title" className="input w-full mb-3 mt-1 text-black" required/>

    <label>Category</label>
    <select id="category" name="category" className="input w-full mb-3 mt-1 text-black" required>
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
    <textarea className="input w-full h-18 mb-3 mt-1 text-black" id="description" name="description" rows="48" required></textarea>

    <label>Deadline</label>
    <input className="input w-full mb-3 mt-1 text-black" type="date" id="deadline" name="deadline" required/>

    <label >Budget</label>
    <input className="input w-full mb-3 mt-1 text-black" type="number" id="budget" name="budget" min="0" required/>

    <label >User Email</label>
    <input className="input w-full mb-3 mt-1 text-black" type="email" id="email" name="email" value={ user && user.email} readOnly/>

    <label>User Name</label>
    <input className="input w-full mb-3 mt-1 text-black" type="text" id="username" name="username" value={ user && user.displayName} readOnly/>

    <button className="btn w-full mt-8 bg-lime-500 text-black border-[#e5e5e5]" type="submit">Add</button>
  </form>
     </div>       
     </div>       
        </div>

  <Footer></Footer>
    </div>
    );
};

export default AddTask;