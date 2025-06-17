import React, { use } from 'react';
import { NavLink } from 'react-router';
import '../../src/index.css';

const catPromise=fetch("/category.json").then((res)=>res.json());

const Categories = () => {
  const  cat=use(catPromise);
  console.log(cat)
   
    return (
        <div className='mt-12'>
            

         
            <div className='bg-lime-300 p-5 px-12 rounded-2xl'>
            <ul className='highlighted flex flex-row  justify-around '>
          <NavLink className={"btn bg-lime-100 rounded-xl"} to="/all">Show All Apps</NavLink>
          {
                cat.map((one)=>(
                    <NavLink key={one.categoryId} className={"btn bg-lime-100 rounded-xl"} to={`/apps/${one.category}`}>{one.category}</NavLink>
                ))
            }
          </ul>
            </div>
        </div>
    );
};

export default Categories;