import React, { use, useEffect, useState } from 'react'
import '../../src/index.css'
import Swal from 'sweetalert2';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { IoIosStar } from 'react-icons/io';
import { AuthContext } from './AuthProvider';
import dateTime from 'date-time';
import { Helmet } from 'react-helmet';
const BookingsList=({myBookingsPromise})=>{
 
  const {user}=use(AuthContext);
  const day = new Date();


const bookList=use(myBookingsPromise)
 const[cart,setCart]=useState(bookList);
 console.log(bookList)
//  if(bookList.message)
 console.log(cart)
// const today= new Date();
//   const yyyy=today.getFullYear();
//   const mm=String(today.getMonth()+1).padStart(2,'0');
//   const dd=String(today.getDate()).padStart(2,'0');
//   const formattedDate=`${yyyy}-${mm}-${dd}`;

  const [revw,setrevw]=useState([])
  const [selected, setSelected] = useState(null);
  const [book,setBook]=useState('');
  const[rooms,setRooms]=useState('');
  const[room,Setroom]=useState('');
  
  const [ratings,setRating]=useState(1);
const[rateColor,setColor]=useState(null);

const [reviews, setReviews] = useState([]);
  


   useEffect(()=>{
         fetch('https://hotel-booking-server-three-lake.vercel.app/history').then(res=>res.json()).then(data=>{
        setRooms(data);
     
     
         })
      },[cart]);
  

     
  console.log(rooms);
const handleFetch=(id,selected)=>{
  console.log({id,selected})
  fetch('https://hotel-booking-server-three-lake.vercel.app/mybooking',{

  method:'PATCH',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify({id,selected})
}).then(res=>res.json()).then(data=>{
  console.log('after patch',data);
  if(data.result.modifiedCount){
    Swal.fire({
      title: "Booking date updated successfully !",
      text: `Room no: ${book.roomNo} Updated date: ${selected}`,
      icon: "success"
    });
 
  }
   setCart(data.history);
 
})

}


const handleUpdate=(room)=>{
setBook(room);
console.log(room)

console.log(book);
 document.getElementById('my_modal_4').showModal()
}

const handleUpclose=()=>{
  document.getElementById('my_modal_4').close()
}

const handleConfirm=()=>{
  const date = new Date(selected);
  // const formattedDate = date.toISOString().split("T")[0];
  // console.log(formattedDate);
 

  const offset = date.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
const adjustedDate = new Date(date.getTime() - offset);
const formattedDate = adjustedDate.toISOString().split('T')[0];
console.log(formattedDate)



 const matching = rooms.filter(one => (one.roomNo == book.roomNo) && (one.date === formattedDate));
console.log(matching);
 const d1=new Date(formattedDate);
 const d2=day;
 console.log(d1,d2)
  handleUpdate();
  const id=book._id;
  console.log(id)
  if(matching.length==0){
    if(d1>d2){
 handleFetch(id,formattedDate);

  }
   else{
    Swal.fire({
  title: "Choose a valid date after today's date !",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
  }
 

  }
  
  else{
    Swal.fire({
  title: "Unavailable ! On that day this room already occupied, please book it for another day .",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
  }
 
}




const handleDelete=(room)=>{
  const id=room._id;
 

  const day=new Date(room.date);
  const time =day.getTime();
 const remday=time-Date.now();
  console.log(remday);
  if(remday<86400000){
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "You can only cancel a room untill  1 day before of booking date !",
  
});
return;
  }
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
    fetch(`https://hotel-booking-server-three-lake.vercel.app/room/${id}`,
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
    const remCart=cart.filter(one=>one._id!=id);
    setCart(remCart);
    console.log(cart)
      }
    })
   
  }
});

}

const handleModal=(room)=>{
console.log(room)
Setroom(room);

  document.getElementById('rev').showModal()

}


const handleClose=()=>{
   document.getElementById('rev').close()
   return;
}
const handleRev=(e)=>{
e.preventDefault();
  const comment=e.target.comment.value;
  const name=e.target.name.value;
  const somoy=e.target.somoy.value;
const time=new Date(somoy);
const timestamp = time.getTime();
console.log(timestamp)

  const house=room.roomNo;
  const houseImg=room.image;

  const email= user?.email;
  const photo=user?.photoURL;
   const rev = {house,houseImg,email,name,photo, comment, ratings,timestamp};

  console.log(rev);
    const updatedReviews = [rev];
  setReviews(updatedReviews);
  revFetch(email,house,updatedReviews);
  postRev(rev);
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
  console.log('after patch',data);
  // if(data.final.modifiedCount){
  //   Swal.fire({
  //     title: "review successfull!",
  //     text: `Room no:${num} `,
  //     icon: "success"
  //   });
 
  // }
  
 
})

}


const postRev=(reviews)=>{
 fetch("https://hotel-booking-server-three-lake.vercel.app/rooms/reviews", {
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
 
// toast.success(`You successfully booked room number :  ${room.room_number} on ${day}`);

 Swal.fire({
      title: "you successfully posted a review!",
      text: `For room no:${room.roomNo}.`,
      icon: "success"
    });


setrevw(data.review)
  }
 
} );
     

 
}
 

console.log(revw)




    return(
         <div className='mt-12 flex justify-center items-center border-2 border-red-800 rounded-2xl lg:p-16'>
          

               {bookList.length?(<div className=' w-full'>

                 <table className="table table-xs  w-full mx-auto ">
    <thead>
      <tr className='sty text-sky-500 '>
        <th></th>
        <th>Room No.</th>
        
       
   
        <th>Image</th>
        <th>Date</th>
        <th>Rent(per night)</th>
      </tr>
    </thead>
     <tbody>
{
   cart?.map((room,index)=><tr className='tsyle' key={room._id}>
    <Helmet>
      <title>Hotel Jeaj | Update booking date</title>
    </Helmet>
         <th>{index+1}</th>
    <td>{room.roomNo}</td>
     <td><img className='w-34 text-center mx-auto rounded-xl' src={room.image} alt="" />  <button onClick={()=>handleModal(room)} className='btn bg-sky-400 m-2'>Review</button></td>
        <td><p>{room.date}</p>
         <button className="btn m-2 bg-sky-400 border-none" onClick={()=>handleUpdate(room)}>Update date</button>
        </td>
      
        <td>$ {room.rent} USD</td>
        
        {/* <td><Link to={`/update/${room._id}`}><button onClick={()=>handleUpdate(room._id)} className='btn bg-lime-500'>Cancel</button></Link></td> */}
        <td><button onClick={()=>handleDelete(room)} className='btn bg-sky-400'>Cancel</button></td>
        {/* <td><Link to={`/addtask/${room._id}`}><button className='btn bg-lime-500'>review</button></Link></td> */}
    </tr>)
}

     </tbody>
  </table>

               </div>):(<div className='flex justify-between items-center'> <p className='text-4xl text-center'>you have not booked a room yet !</p></div>)
}
{/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_4" className="modal">
 
  <div className="modal-box w-11/12 max-w-5xl bg-sky-200">
   <div className='text-right'> <button onClick={handleUpclose} className='btn bg-red-500 '>Close</button></div>
    <h3 className="font-bold text-3xl my-3  text-center">Update your booking date !</h3>

 <div className='flex justify-center'>
  <DayPicker className='text-lg'
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : 'Pick a day.'
      }
    />
 </div>

    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button onClick={handleConfirm} className="btn bg-lime-500 border-none">Confirm</button>
      </form>
    </div>
   
  </div>
</dialog>


{/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="rev" className="modal ">
   <Helmet>
      <title>Hotel Jeaj | Review</title>
    </Helmet>
  <div className="modal-box w-11/12 max-w-5xl rounded-3xl bg-sky-300">
  <p className='text-center text-5xl text-red-800 font-bold'>Hotel Jeal</p>
  <p className='text-center text-3xl'>Room no: <span className='font-bold'>{room.roomNo}</span></p>
    <div className="modal-action ">

 <form onSubmit={handleRev}  className='flex flex-col gap-3 justify-center w-5/6 mx-auto items-center'>
  <label className='mt-3'>User Name :
    <input className="input w-2/3 mb-3 text-xl ml-3 text-black rounded-2xl" type="text" id="username" name="name" value={ user && user.displayName} readOnly/>
    </label> 
          <label className='text-2xl font-bold mt-4'>Please, write a review:</label>
          
            <textarea type='text' name='comment' className='bg-blue-100 w-full p-4 rounded-2xl' id="reviewText" rows="8" placeholder="Write your review here..."></textarea>
         
         <div className='flex'>
                    {[...Array(5)].map((star,index)=>{
                        const currentRate=index+1;
                        return(
                            <>
                            <label>
                                <input type='radio'className='hidden'  name="rate" value={currentRate} onClick={()=>setRating(currentRate)}/> 
                                <IoIosStar className='mr-4' size={50} color={currentRate <=(rateColor || ratings)? "red":"gray"}  />
                                
                            </label>
                            </>
                        )
                    })}
                </div>
                <div className='flex flex-col items-center justify-center text-center '>
             <input className='mx-auto my-3 text-center' name="somoy" type="text" value={dateTime()} readOnly/>
            <button type="submit" className='btn border-none bg-green-400 rounded-lg text-white'>Submit Review</button>
                </div>
             
          </form>
 <button onClick={handleClose} className="btn bg-red-500 border-none text-white">Close</button>


    </div>
  </div>
</dialog>
         </div>
    )
}
export default BookingsList;
