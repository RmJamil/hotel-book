import React from 'react';
import { NavLink } from 'react-router';

const AppCard = ({app}) => {
    
    
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <NavLink to={`/card/${app.id}`}>
      <figure className="px-10 pt-10">
        <img
          src={app.thumbnail}
          alt="Shoes"
          className="rounded-xl w-[260px] h-[240px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{app.name}</h2>
        <p>Rating: {app.rating}</p>
        <div className="card-actions">
          <p className='text-xl'>Downloads: <span className='font-bold'> {app.downloads}</span> +</p>
        </div>
      </div>
      </NavLink>
    </div>
    );
};

export default AppCard;