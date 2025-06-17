import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Router, RouterProvider } from 'react-router'
import router from './Routes.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(

<AuthProvider>
     <ToastContainer />
<RouterProvider router={router}/>
</AuthProvider>



)
