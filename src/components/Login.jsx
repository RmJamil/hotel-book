import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import { GoogleAuthProvider } from 'firebase/auth';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Login = () => {
const {googleSignIn}=use(AuthContext)
  const provider =new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
      googleSignIn(provider).then(result=>{
        const user=result.user;
        setUser(user);
        navigate(`${location.state? location.state :"/"}`);
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Congratulations!  you have successfully Logged in",
          showConfirmButton: true,
          timer: 3000
        });
      }).catch((error)=>{
        const errorMsg=error.message;
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: errorMsg,

});
        // alert(errorMsg)
    })
  }
  

const {signIn,setUser}=use(AuthContext);
const location=useLocation();
const navigate=useNavigate();
console.log(location)

const handleLogin=(e)=>{
  e.preventDefault();
  
    const email=e.target.email.value;
    const password=e.target.password.value;

    signIn(email,password).then((result)=>{
        const user=result.user;
        setUser(user);
        navigate(`${location.state? location.state :"/"}`);
        Swal.fire({
              position: "center",
              icon: "success",
              title: "Congratulations!  you have successfully Logged in",
              showConfirmButton: true,
              timer: 1300
            });

           
           
    }).catch((error)=>{
        const errorMsg=error.message;
   
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: errorMsg,

});
        // alert(errorMsg)
    })

}

    return (
      <div className=' my-8'>
           <Helmet>
      <title>Hotel Jeal | Log in </title>
    </Helmet>
       <div className='sticky top-0  z-50'> <Navbar></Navbar></div>
         <div className="  w-full my-4">
        <div className="flex items-center flex-col   w-full lg:my-10">
         <div className='text-3xl font-bold lg:my-6'>Log in</div>
          <div className="card  lg:w-1/3  shadow-2xl">
            <div className="card-body border-2 border-sky-400 lg:p-12 rounded-2xl my-3">
              <form onSubmit={handleLogin} className=''>
                <label className="label font-bold">Email</label>
                <input  type="email" name="email" className="input w-full mb-3 text-black" placeholder="Email" required/>
               
                <label className="label font-bold">Password</label>
                <input type="password" name="password" className="input w-full mb-3 text-black" placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button type='submit' className="btn bg-sky-400 mt-4 w-full">Login</button>
                
                <button onClick={handleGoogleSignIn} className="btn w-full mt-16 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<p className='mt-8 text-right'>Don't have an account?  <Link className='underline text-xl ml-3 ' to='/register'>Sign up</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      </div>
       
    );
};

export default Login;