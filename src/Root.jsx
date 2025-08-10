import React, { useEffect} from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Header from './components/Header';
import LeftAside from './components/LeftAside';


import Footer from './components/Footer';


import Roomcarousel from './components/Roomcarousel';
import Carouse from './components/Carouse';
import Main from './components/Main';
import Modal from './components/Modal';
import { Helmet } from 'react-helmet';
import Roomservices from './components/Roomservices';
import Success from './components/Success';


const Root = () => {


 

  useEffect(() => {
    // Auto-show modal when component mounts
    document.getElementById('my_modal_2').showModal()

  }, []);

 
   
 
    return (
        <div className='w-full'>

          <Helmet>
            <title>Hotel Jeal | home</title>
          </Helmet>
            <header className='my-8 sticky top-0  z-50'>
                
          
            <Navbar></Navbar>
            
            </header>

            

            <main className='w-11/12 mx-auto'>
               
               
                <header>
              <Header></Header>
           
            </header>
<section>
       <Main></Main>
</section>
           

          
            <section className='my-3'>    <Roomservices></Roomservices></section>

            <section>
              <Success></Success>
            </section>
            <section className='mt-12'>
             
             <Outlet>
                 <div>
   
     <Modal />
    </div>
             </Outlet>
           </section>
           
            </main>
           <Footer></Footer>

   {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_2" className="modal text-center">
  <div className="modal-box  bg-sky-300">
    <h3 className="text-center lg:text-4xl font-bold text-red-700">Hotel Jeal</h3>
    <p className="py-4 text-center text-3xl font-bold text-gray-700">Get Limited time offer!</p>
    <img className='rounded-xl' src="https://i.postimg.cc/vB6838L5/off.jpg" alt="" />
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </div>
    );
};

export default Root;