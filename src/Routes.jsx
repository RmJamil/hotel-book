
import { createBrowserRouter, Navigate } from "react-router"
import Root from "./Root"
// import { Children, Component } from "react"


import Register from "./components/Register"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"


import ErrorPage from "./components/ErrorPage"

import AddTask from "./components/AddTask"
import BrowseTask from "./components/BrowseTask"
import TaskDetails from "./components/TaskDetails"
import MyPosted from "./components/MyPosted"
import UpdatePost from "./components/UpdatePost"
import Rooms from "./components/Rooms"
import RoomDetails from "./components/RoomDetails"
import MyBookings from "./components/MyBookings"
import RoomConfirm from "./components/RoomConfirm"


const router=createBrowserRouter([
    { 
       index:true,
        path:"/",
        Component:Root,
        errorElement: <ErrorPage></ErrorPage>,
        
        
       

       

    },
    
     {
            path:"/rooms",
            loader:()=>fetch('http://localhost:3000/rooms'),
            Component:Rooms
           
           
         },
     {
            path:'/mybookings',
            element:(<PrivateRoute><MyBookings></MyBookings></PrivateRoute>)
           
           
         },
     {
            path:"/confirm",
            // loader:()=>fetch('http://localhost:3000/rooms'),
           element:(<RoomConfirm></RoomConfirm>)
           
           
         },
     {
            path:'/rooms/:id',
            loader:({params})=>fetch(`http://localhost:3000/rooms/${params.id}`),
            element:(<RoomDetails></RoomDetails>),
           
         },
     {
            path:'/updatepost/:id',
            loader:({params})=>fetch(`http://localhost:3000/addtask/${params.id}`),
            element:(<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>),
           
         },
     {
            path:'/mypost',
             loader:()=>fetch('http://localhost:3000/addtask'),
            element:(<PrivateRoute><MyPosted></MyPosted></PrivateRoute>),
           
         },
   
   
    {  
           
        path:"/register",
  
        Component:Register,
       
     },
     {  
            
        path:'/login',
  
        Component:Login,
       
     },
  

   
]);
export default router;