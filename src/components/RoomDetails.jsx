import React, { use, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation, useNavigate, useParams} from 'react-router';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import { IoIosStar } from 'react-icons/io';
import dateTime from 'date-time';
import Reviews from './Reviews';
import { Helmet } from 'react-helmet';
import { getTime } from 'date-fns';
import Footer from './Footer';


const RoomDetails = () => {
  const today= new Date();
  const yyyy=today.getFullYear();
  const mm=String(today.getMonth()+1).padStart(2,'0');
  const dd=String(today.getDate()).padStart(2,'0');
  const formattedDate=`${yyyy}-${mm}-${dd}`;
 const room = useLoaderData();
 console.log(room)
 const {id}=useParams();

 const[cart,setCart]=useState(room);
 const[rooms,setRooms]=useState('');
    console.log(room);
const navigate=useNavigate();
const location=useLocation();

  const {user}=use(AuthContext);

  const[num,setNum]=useState('');
    
    const [ratings,setRating]=useState(1);
  const[rateColor,setColor]=useState(null);
  
  const [reviews, setReviews] = useState([]);

const[hit,setHit]=useState(false);

//   const today = new Date();
// const formattedDate = today.toISOString().split('T')[0].slice(2);

  // console.log(user);
  const [load,setLoad]=useState(true);
  const [errMsg,setErrMsg]=useState('');
   const[his,setHis]=useState([]);
  const[con,setCon]=useState(false);
  const[day,setDay]=useState(formattedDate);
  const[booked,setBooked]=useState();
   const [unavl, setUnavl] = useState([]);
  // const {user}=use(AuthContext);

  const [revw,setrevw]=useState([])

   useEffect(()=>{
       fetch('http://localhost:3000/rooms/reviews').then(res=>res.json()).then(data=>{
      setrevw(data);
   
   
       })
    },[]);
    console.log(revw)

 useEffect(()=>{
         fetch(`http://localhost:3000/rooms/${id}`).then(res=>res.json()).then(data=>{
        setRooms(data);
     
     
         })
      },[cart,id]);
   

    useEffect(()=>{
       fetch('http://localhost:3000/history').then(res=>res.json()).then(data=>{
      setHis(data);
   
   
       })
    },[day,load]);
    console.log(his);
    console.log(room);


console.log(user?.email)
  const handleLog=()=>{

      navigate('/login');
      return;
          

  }

const handleConfirm=()=>{
  console.log(unavl);
  if(unavl.length!=0){

     window.alert('sorry this room is currently unavailable');
    setCon(false);

    return;
  }
  setCon(true);
  document.getElementById('my_modal_5').close()
 
}
const handleClose=()=>{
  document.getElementById('my_modal_5').close()
}




    const handleDetails=(e)=>{ 
  e.preventDefault();
      const date= e.target.bdate.value;
      const rent=room.rent;
      const roomNo=room.room_number;
      const image=room.image_url;
      const reviews=room.reviews;
      const name=user?.displayName;
      const email=user?.email;
      const booked={roomNo,date,rent,name,email,image,reviews};

    
      setBooked(booked);
      setCon(false);
     
   

     

     
       
    
console.log(unavl);
     // console.log(book);
    load &&  document.getElementById('my_modal_5').showModal()


  

  }

 const handleChange = (e) => {
const date=e.target.value;
 const time=new Date(date);
 const timest=time.getTime();
 const now=Date.now();
setDay(date);
const matching = his.filter((one) => (one.roomNo == room.room_number) && (one.date == date));
setUnavl(matching); 
console.log(matching);
  console.log(unavl);
if(timest>now){
  if (matching.length !=0) {
    setErrMsg('On that day, this room is unavailable!');
    // const fix = matching.filter(one => one.date === day);
    setLoad(false);
  }
  else{
// setUnavl([]);
setErrMsg('Available');
setLoad(true);
  }
}
else{
   setErrMsg('Please select a valid day after today!');
    // const fix = matching.filter(one => one.date === day);
    setLoad(false);
}

  

};

console.log(load);

  if(load)
    {con && ( fetch("http://localhost:3000/rooms/booked", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(booked),
  // …
}).then(res=>res.json())
.then(data=>{
  console.log('after job in DB',data);
  if(data.insertedId){
 setCon(false);
  setLoad(false);
// toast.success(`You successfully booked room number :  ${room.room_number} on ${day}`);

 Swal.fire({
      title: "successfully booked!",
      text: `Room no:${num} on date:${day} `,
      icon: "success"
    });
setErrMsg('');

  }
 
}) );
     

}  





const handleModal=(room)=>{
console.log(room)
setNum(room?.room_number);
const search=his.filter(one=>(rooms.room_number==one.roomNo && user.email==one.email));
 console.log(search);
 if(search.length!=0){
 document.getElementById('rev').showModal()
 }
else{
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "At first Book this room, then come to put a review !",

});
}
 
 

}


const handleRev=(e)=>{
e.preventDefault();
  const comment=e.target.comment.value;
  const name=e.target.name.value;
  const somoy=e.target.somoy.value;
const time=new Date(somoy);
const timestamp = time.getTime();
console.log(timestamp)

  const house=room.room_number;
  const houseImg=room.image_url;
  console.log(num);
  const email= user?.email;
  const photo=user?.photoURL;
   const rev = {house,houseImg,email,name,photo, comment, ratings,timestamp};

  console.log(rev);
    const updatedReviews = [rev];
  setReviews(updatedReviews);
  revFetch(email,num,updatedReviews);
  postRev(rev);
 document.getElementById('rev').close();
}

const closeRev=()=>{
  document.getElementById('rev').close();
}

const postRev=(reviews)=>{
 fetch("http://localhost:3000/rooms/reviews", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(reviews),
  // …
}).then(res=>res.json())
.then(data=>{
  console.log('after post review in DB',data);
  if(data.result.insertedId){
 setCon(false);
  setLoad(false);
// toast.success(`You successfully booked room number :  ${room.room_number} on ${day}`);

 Swal.fire({
      title: "you successfully posted a review!",
      text: `For room no:${num}.`,
      icon: "success"
    });
setErrMsg('');

setrevw(data.review)
  }
 
} );
     

 
}
 

console.log(revw)






const revFetch=(email,num,reviews)=>{
  console.log({email,num,reviews})
  fetch('http://localhost:3000/review',{

  method:'PATCH',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify({email,num,reviews})
}).then(res=>res.json()).then(data=>{
  console.log('after patch',data,data.match.length);
 
  setCart(data.all);

 

 
})

}



// cart.sort((a, b) => a.date - b.date);
//     console.log(cart);

const revone=revw.filter(one=>(one.house==room.room_number));

revone.sort((a,b) => ((b.timestamp)-(a.timestamp)));
console.log(revone);


    return (
       <div className='w-11/12 mx-auto mt-8'>
         <Helmet>
      <title>{`Hotel Jeal | Room No:${room.room_number}`}</title>
    </Helmet>
            <Navbar></Navbar>
                {/* <Helmet>
      <title>{room.name} - Room Details</title>
      <meta name="description" content={room.description} />
    </Helmet> */}
        <div className='grid lg:grid-cols-6 w-full my-6  p-4 border-2 border-sky-400 rounded-xl shadow-sm'>

           
<div className='col-span-5'>
 
   <form className='w-full ' onSubmit={user?handleDetails:handleLog}>

          <div className=' flex justify-center items-center p-2'>
       
          <div className='w-5/7'>
      <h2 className=" text-center bg-sky-400 w-1/2 mx-auto p-4 rounded-3xl mb-2"><span className=' mr-2 italic text-4xl'>Room No:</span> <span className='font-bold text-3xl'>{room.room_number}</span></h2>
      <img className=' w-full rounded-2xl' src={room.image_url} alt="" />
      <input type="date" name='bdate' value={day} onChange={handleChange} className="input text-black my-2" required/>
       {errMsg && <p className={`text-3xl ${load?'text-green-500': 'text-red-500'}`}>{errMsg}</p>}
     
           <p className="text-xl font-bold">
       {room.description}
      </p>
      <div className="text-sm  mb-2">Fixed-price </div>
      <div><span className='font-bold'>Rent (per Night) :  $</span> {room.rent}</div>
     
      <div className="flex justify-between items-center mb-1">
      </div>
 
      <div className="flex flex-wrap gap-2 mb-4">
     

      </div>
     
      <div>Total review: <span className="font-bold">{cart.reviews.length}</span></div>
      <div>
        {
          room.facilities.map((facility,ind)=>( 
              <button key={ind}  className='btn border-none  m-1'>{facility}</button>
          ))
        }
      </div>
      <div className='flex justify-end mt-3'> 
      <button type={load?'submit':''} className={`btn bg-sky-400  px-4 py-2 w-1/3 text-white border-none rounded-md hover:bg-sky-500 ${load? '': 'bg-red-400 hover:bg-red-600 cursor-not-allowed'}`}>
       {load? 'book now':'Unavailable'}
      </button>
      
      </div>
   
    </div>
      
    </div>
        </form>
         <div className='text-right w-6/7'>
            <button onClick={user?()=>handleModal(room):handleLog} className='btn lg:w-4/14  bg-blue-400 hover:bg-blue-500 text-white mt-2'>Review</button>
            </div>

</div>

<div className='col-span-1'>
  <p className='text-3xl font-bold text-sky-400'>Reviews:  </p>
  <p> Total reviews : <span className='text-sky-400 text-xl ml-2 font-bold'>{revone.length}</span> </p>
   {revone.map((ek,ind)=><Reviews key={ind} ek={ek} ></Reviews>)
       }
</div>
       
  

        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black ">
  <div className="modal-box bg-sky-300">
     <p className='text-center text-5xl text-red-800 font-bold'>Hotel Jeal</p>
     <br />

       <h3 className="font-bold text-lg text-center ">Are you sure to book ?</h3>
       <br></br>
     <p className='text-center text-3xl'>Room no: <span className='font-bold'>{room.room_number}</span></p>

  

    <p className='text-lg'><span className='font-bold'>description:</span> {room.description}</p>
    <p className="py-4">Date: <span className='font-bold'>{day}</span></p>
    <p>rent (per night) : <span className='font-bold'>$ {room.rent}</span> USD</p>
    <div className="modal-action">
     
        {/* if there is a button in form, it will close the modal */}
         <button onClick={handleClose} className="btn bg-red-400">Close</button>
        <button onClick={handleConfirm} className="btn bg-lime-500">Confirm</button>

    </div>
  </div>
</dialog>
       </div>


<dialog id="rev" className="modal ">
  <div className="modal-box w-11/12 max-w-5xl rounded-3xl bg-sky-300">

        {/* if there is a button, it will close the modal */}
        <div className='text-right'>
          <button onClick={closeRev} className="btn bg-red-500 border-none">Close</button>
        </div>

   <p className='text-center text-5xl text-red-800 font-bold'>Hotel Jeal</p>
   <br />
   <p className='text-center text-3xl'>Room no: <span className='font-bold'>{room.room_number}</span></p>
    <div className="modal-action  ">

 <form onSubmit={handleRev}  className='flex flex-col gap-3 justify-center w-5/6 mx-auto items-center'>
  <label className='mt-3'>User Name :
    <input className="input w-2/3 mb-3 text-xl ml-3 text-black rounded-2xl" type="text" id="username" name="name" defaultValue={ user && user.displayName} readOnly/>
    </label> 
          <label className='text-2xl font-bold mt-4'>Please, write a review:</label>
          
            <textarea type='text' name='comment' className='bg-blue-100 w-full p-4 rounded-2xl' id="reviewText" rows="8" placeholder="Write your review here..." required></textarea>
         
         <div className='flex'>
                    {[...Array(5)].map((star,index)=>{ 
                        const currentRate=index+1;
                        return(
                            <>
                            <label >
                                <input type='radio'className='hidden'  name="rate" value={currentRate} onClick={()=>setRating(currentRate)}/> 
                                <IoIosStar className='mr-4' size={50} color={currentRate <=(rateColor || ratings)? "red":"gray"}  />
                                
                            </label>
                            </>
                        )
                    })}
                </div>
                <div className='flex flex-col items-center justify-center text-center '>
             <input className='mx-auto my-3 text-center ' name="somoy" type="text" defaultValue={dateTime()} readOnly/>
       
                <button type="submit" className='btn border-none bg-green-400 rounded-lg text-white'>Submit Review</button>
     
           
                </div>
              
          </form>


     
    </div>
  </div>
</dialog>

<Footer></Footer>
       </div>
     
    );
};

export default RoomDetails;