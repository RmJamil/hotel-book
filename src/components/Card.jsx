import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from './Navbar';
import Rate from './Rate';
import { AuthContext } from './AuthProvider';
import { IoIosStar } from 'react-icons/io';
import Reviews from './Reviews';
import Swal from 'sweetalert2';
import 'animate.css';
import Footer from './Footer';


        

const Card = () => {

const [reviews, setReviews] = useState([]);
const[show,setShow]=useState(true);
const [ratings,setRating]=useState(null);
const[rateColor,setColor]=useState(null);
const[count,setCount]=useState(false);
  // const {ratings}=use(AuthContext)
  console.log(ratings)
  const details = useLoaderData();
  const { roll } = useParams();
  const [det, setDet] = useState(null);
  const [com,setCom]=useState(null)


  useEffect(() => {
    const filteredApp = details.find((one) => one.id == roll);
    setDet(filteredApp);
  }, [details, roll]);
  console.log(det)

  if (!det) {
    return <div>Loading...</div>;
  }

  const { name, developer, thumbnail, banner, downloads, category, rating, description } = det;
  
  const handleInstall=()=>{
    setShow(!show)
    setCount(true);
  }

const handleRev=(e)=>{
  e.preventDefault();
  const comment=e.target.comment.value;
    //  const ratings=e.target.rate.value;
setCom(comment);
handleComment(comment,ratings);
}
console.log(com)
console.log(ratings)

const handleComment = (com, ratings) => {
  if(count){
    const rev = { comment: com, ratings: ratings };
  setReviews((prev) => [...prev, rev]);
  }
  else{
     Swal.fire({
     title: "Install and experience it. Then come to post a review 🔒",
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
   }) 
  }
};
console.log(reviews)

  return (
    <div className='w-11/12 mx-auto my-8'>
      <div className='sticky top-0  z-50'> <Navbar></Navbar></div>
      <div className='flex flex-row gap-12 my-12'>
      <div className="card bg-base-100 w-96 shadow-sm flex-1/4">
        <figure className="px-10 pt-10">
          <img
            src={thumbnail}
            alt={name}
            className="rounded-xl w-[260px] h-[240px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Rating: {rating}</p>
          <div className="card-actions">
            <p className='text-xl'>
              Downloads: <span className='font-bold'>{downloads}</span> +
            </p>
          </div>
          <button onClick={handleInstall} className='btn btn-primary bg-green-400 rounded-lg text-white border-none'>{show?"Install":"Uninstall"}</button>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-sm flex-1/2">
       
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-4xl mb-8">{name}</h2>
          <p className='text-3xl'>Descriptions : <span className='font-bold'>{description}</span></p>
          <div className="card-actions">
            <p className='text-xl'>
              Category: <span className='font-bold'>{category}</span> 
            </p>
          </div>
          <p className='text-3xl'>Developer Name: <span className='font-bold'>{developer}</span></p>
          
        </div>
 
      </div>
      <div className='flex-1/4'>
      <form onSubmit={handleRev}  className='flex flex-col gap-6 justify-center items-center'>
          <label for="reviewText" className='text-2xl font-bold mt-4'>Review :</label>
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

            <button type="submit" className='btn bg-green-400 rounded-lg text-white'>Submit Review</button>
          </form>
  </div>
    </div>

    <div className=' mt-24'>
      <p className='text-5xl mb-16'>Reviews:</p>
    
     
     <div className='mb-16'>
      
    
       { reviews.map((ek,ind)=><Reviews key={ind} ek={ek} ></Reviews>)
       }
  
      
     </div>
    </div>

    <Footer></Footer>
    </div>

  );
};

export default Card;
