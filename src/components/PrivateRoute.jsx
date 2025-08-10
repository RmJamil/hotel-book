import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import 'animate.css';
const PrivateRoute = ({children}) => {

    const location=useLocation();

    const{user,loading}=use(AuthContext);

    if(loading){
        return <div className='flex justify-center items-center h-[70vh]'>
<div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
    }

    if(user && user?.email){
        return children;
    }
    else{

         Swal.fire({
  title: "Log in first to get access 🔒",
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
return <Navigate state={location.pathname} to='/login'></Navigate>;


    }
    
    
 
};

export default PrivateRoute;