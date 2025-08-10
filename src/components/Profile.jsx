import React, { use } from 'react';
import Navbar from './Navbar';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router';
import Footer from './Footer';

const Profile = () => {
    const {setUser,updateUser,user}=use(AuthContext);
    const navigate=useNavigate();

    const handleUpdate=(e)=>{

        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;

        updateUser({displayName:name, photoURL:photo}).then(()=>{
            setUser({...user, displayName:name, photoURL:photo});
            navigate("/");
          
          }).catch((error)=>{
            console.log(error);
            setUser(user);
          });

    }
    console.log(user)


    return (
       <div className='w-11/12 mx-auto mt-8 mb-24'>

        <div className='sticky top-0  z-50'><Navbar></Navbar></div>
        <div className='flex flex-row gap-12  mb-12 w-11/12 mx-auto '>
           
            <div className='flex flex-col pt-12 items-center gap-5 mt-10 w-1/2 border border-r-2 border-sky-500 rounded-2xl h-[70vh]'>
            <p className='text-3xl font-bold'>Update your profile</p>
           <div className="card  shadow-2xl ">
           <div className="card-body bg-sky-200 p-12 rounded-2xl ">
                <form onSubmit={handleUpdate}>
                <label className="label font-bold">Name</label>
                <input  type="text" name='name' className="input w-full mb-3" placeholder="Your name " required/>
                <label className="label font-bold">Photo</label>
                <input  type="text" name='photo' className="input w-full mb-3" placeholder="Photo url " required />
                <button type='submit' className="btn bg-sky-500 mt-4 w-full">Submit</button>
                </form>
            </div>
           </div>
            
           </div>

           <div className='border border-r-2 border-sky-500 rounded-2xl w-1/2 flex flex-col mt-10 p-16'>
                <p className='text-center mb-16 text-3xl underline font-bold'>Updated Profile</p>
                <p className='text-left mb-16 text-3xl'><span className='font-bold'>Name:</span>  {user.displayName} </p>
                <p className='text-left mb-16 text-3xl'><span className='font-bold'>Photo:</span>  <img className=' w-44 h-44 rounded-full' src={user.photoURL} alt="" /></p>
             </div>
           </div>

          
<Footer></Footer>
       </div>
    );
};

export default Profile;