import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Router, RouterProvider } from 'react-router'
import router from './Routes.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
 <HelmetProvider>
<AuthProvider>

   
<RouterProvider router={router}/>

</AuthProvider>

</HelmetProvider>

)
