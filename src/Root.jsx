import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Header from './components/Header';
import LeftAside from './components/LeftAside';


import Footer from './components/Footer';
import Behind from './components/Behind';
import { useLoaderData } from 'react-router';
import Roomcarousel from './components/Roomcarousel';


const Root = () => {

 
    return (
        <div className='lg:w-11/12 mx-auto'>
            <header className='my-8 sticky top-0  z-50'>
                
          
            <Navbar></Navbar>
            
            </header>

            

            <main>
               
               
                <header>
            <Header></Header>
            <Roomcarousel></Roomcarousel>
            </header>
     

            </main>
            <section className='mt-12'>
             
             <Outlet>
               
             </Outlet>
           </section>
           <section className='hidden lg:flex'>
            <Behind></Behind>
           </section>
          
           <Footer></Footer>
            
        </div>
    );
};

export default Root;