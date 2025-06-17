import React, { use, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation, useNavigate, useParams} from 'react-router';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import { IoIosStar } from 'react-icons/io';
import dateTime from 'date-time';
import Reviews from './Reviews';


const RoomDetails = () => {
  // const today= new Date();
  // const yyyy=today.getFullYear();
  // const mm=String(today.getMonth()+1).padStart(2,'0');
  // const dd=String(today.getDate()).padStart(2,'0');
  // const formattedDate=`${yyyy}-${mm}-${dd}`;
 const room = useLoaderData();
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
  const[day,setDay]=useState('');
  const[booked,setBooked]=useState();
   const [unavl, setUnavl] = useState([]);
  // const {user}=use(AuthContext);

 useEffect(()=>{
         fetch(`https://hotel-booking-server-three-lake.vercel.app/rooms/${id}`).then(res=>res.json()).then(data=>{
        setRooms(data);
     
     
         })
      },[cart,id]);
   

    useEffect(()=>{
       fetch('https://hotel-booking-server-three-lake.vercel.app/history').then(res=>res.json()).then(data=>{
      setHis(data);
   
   
       })
    },[day,load]);
    console.log(his);
    console.log(room);


console.log(user.email)
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
 
}




    const handleDetails=(e)=>{ 
  e.preventDefault();
      const date= e.target.bdate.value;
      const rent=room.rent;
      const roomNo=room.room_number;
      const image=room.image_url;
      const reviews=room.reviews;
      const name=user.displayName;
      const email=user.email;
      const booked={roomNo,date,rent,name,email,image,reviews};

    
      setBooked(booked);
      setCon(false);
     
   

     

     
       
    
console.log(unavl);
     // console.log(book);
    load &&  document.getElementById('my_modal_5').showModal()


  

  }

 const handleChange = (e) => {
const date=e.target.value; 
setDay(date);
const matching = his.filter((one) => (one.roomNo == room.room_number) && (one.date == date));
setUnavl(matching); 
console.log(matching);
  console.log(unavl);

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
  

};

console.log(load);

  if(load)
    {con && ( fetch("https://hotel-booking-server-three-lake.vercel.app/rooms/booked", {
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
toast.success(`You successfully booked room number :  ${room.room_number} on ${day}`);
setErrMsg('');

  }
 
}) );
     

}  





const handleModal=(room)=>{
console.log(room)
setNum(room?.room_number);

  document.getElementById('rev').showModal()
 

}


const handleRev=(e)=>{
e.preventDefault();
  const comment=e.target.comment.value;
  const name=e.target.name.value;
  const somoy=e.target.somoy.value;
  console.log(num);
  const email= user.email;
   const rev = {name, comment, ratings,somoy};
    const updatedReviews = [rev];
  setReviews(updatedReviews);
  revFetch(email,num,updatedReviews);
document.getElementById('rev').close();
}


const revFetch=(email,num,reviews)=>{
  console.log({email,num,reviews})
  fetch('https://hotel-booking-server-three-lake.vercel.app/review',{

  method:'PATCH',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify({email,num,reviews})
}).then(res=>res.json()).then(data=>{
  console.log('after patch',data,data.match.length);
  if(data.match.length!=0){
    Swal.fire({
      title: "review successfull!",
      text: `Room no:${num} `,
      icon: "success"
    });
  setCart(data.all);
  }
  else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "At first Book this room, then come to put a review !",

});
  }

 
})

}

const handleCot=()=>{
  window.alert('At first book a room,')
}




    return (
       <div>
            <Navbar></Navbar>
        <div className='grid lg:grid-cols-6 w-full my-6  p-4 border-2 border-purple-400 rounded-xl shadow-sm'>

          
<div className='col-span-5'>
   <form className='w-full ' onSubmit={user?handleDetails:handleLog}>

          <div className=' flex justify-center items-center p-2'>
       
          <div className='w-5/7'>
      <h2 className=" text-center bg-purple-300 w-1/2 mx-auto p-4 rounded-3xl mb-2"><span className=' mr-2 italic text-4xl'>Room No:</span> <span className='font-bold text-3xl'>{room.room_number}</span></h2>
      <img className=' w-full rounded-2xl' src={room.image_url} alt="" />
      <input type="date" name='bdate' value={day} onChange={handleChange} className="input text-black my-2" required/>
       {errMsg && <p className={`text-3xl ${load?'text-green-500': 'text-red-500'}`}>{errMsg}</p>}
     
           <p className="text-xl font-bold">
       {room.description}
      </p>
      <div className="text-sm  mb-2">Fixed-price </div>
      <div><span className='font-bold'>Rent (per Night) :  $</span> {room.rent}</div>
      <div>
            <button onClick={()=>handleModal(room)} className='btn bg-purple-400 hover:bg-purple-700 text-white mt-2'>Review</button>
            </div>
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
      <button type={load?'submit':''} className={`btn px-4 py-2 bg-purple-400 w-1/3 text-white border-none rounded-md hover:bg-purple-700 ${load? '': 'bg-red-400 hover:bg-red-600 cursor-not-allowed'}`}>
       {load? 'book now':'Unavailable'}
      </button>
      
      </div>
   
    </div>
      
    </div>
        </form>
</div>

<div className='col-span-1'>
  <p className='text-3xl font-bold text-green-400'>Reviews:  </p>
  <p> Total reviews : <span className='text-purple-500 text-xl ml-2 font-bold'>{cart.reviews.length}</span> </p>
   {cart.reviews.map((ek,ind)=><Reviews key={ind} ek={ek} ></Reviews>)
       }
</div>
       
  

        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={handleConfirm} className="btn">Confirm</button>
      </form>
    </div>
  </div>
</dialog>
       </div>


<dialog id="rev" className="modal ">
  <div className="modal-box w-11/12 max-w-5xl rounded-3xl">
    <div className="modal-action ">

 <form onSubmit={handleRev}  className='flex flex-col gap-3 justify-center w-5/6 mx-auto items-center'>
  <label className='mt-3'>User Name :
    <input className="input w-2/3 mb-3 text-xl ml-3 text-black" type="text" id="username" name="name" defaultValue={ user && user.displayName} readOnly/>
    </label> 
          <label className='text-2xl font-bold mt-4'>Please, write a review:</label>
          
            <textarea type='text' name='comment' className='bg-blue-100 w-full p-4 rounded-2xl' id="reviewText" rows="8" placeholder="Write your review here..."></textarea>
         
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
             <input className='mx-auto my-3 text-center' name="somoy" type="text" defaultValue={dateTime()} readOnly/>
       
                <button type="submit" className='btn bg-green-400 rounded-lg text-white'>Submit Review</button>
     
           
                </div>
              
          </form>


      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

       </div>
     
    );
};

export default RoomDetails;