import React from 'react';
import { Link, useLoaderData } from 'react-router';
import '../../src/index.css';
import Navbar from './Navbar';
import Footer from './Footer';

const BrowseTask = () => {
    let jobs=useLoaderData();
    console.log(jobs);

    jobs.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
console.log(jobs);



 
    return (
        <div className='mt-8'>
       
         <div className='sticky top-0  z-50'><Navbar></Navbar></div>
   <p className='text-center lg:text-5xl font-bold text-blue-500 lg:mt-24 border-b-2 pb-2 my-4'>All jobs are shown as per shorter deadline</p>
<div className="w-full mx-auto lg:mt-24 border-1 border-lime-400 lg:p-12 rounded-2xl">
  <table className="table table-xs">
    <thead>
      <tr className='sty text-lime-500'>
        <th></th>
        <th>Title</th>
        
        <th className='hidden lg:block'>Category</th>
   
        <th>Deadline</th>
        <th className='hidden lg:block'>Budget</th>
      </tr>
    </thead>
     <tbody>
{
    jobs.map((job,index)=><tr className='tsyle' key={job._id}>
         <th>{index+1}</th>
    <td>{job.title}</td>
     
        <td className='hidden lg:block'>{job.category}</td>
      
        <td>{job.deadline}</td>
        <td className='hidden lg:block'>${job.budget}</td>
        <td><Link to={`/addtask/${job._id}`}><button className='btn bg-lime-500'>See Details</button></Link></td>
    </tr>)
}

     </tbody>
  </table>
</div>
<Footer></Footer>
        </div>
    );
};

export default BrowseTask;