import React from 'react';

const categories = [
  {
    name: 'Development & IT',
    rating: 4.85,
    skills: 1853,
  },
  {
    name: 'AI Services',
    rating: 4.8,
    skills: 294,
  },
  {
    name: 'Design & Creative',
    rating: 4.91,
    skills: 968,
  },
  {
    name: 'Sales & Marketing',
    rating: 4.77,
    skills: 392,
  },
  {
    name: 'Writing & Translation',
    rating: 4.92,
    skills: 505,
  },
  {
    name: 'Admin & Customer Support',
    rating: 4.77,
    skills: 508,
  },
  {
    name: 'Finance & Accounting',
    rating: 4.79,
    skills: 214,
  },
  {
    name: 'Engineering & Architecture',
    rating: 4.85,
    skills: 650,
  },
];

const TalentByCategory = () => {
  return (
    <div className="w-full mx-auto lg:p-8 mt-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Browse talent by category</h2>
      <p className=" mb-8 text-center">
        Looking for work?{' '}
        <a href="#" className="text-green-600 hover:underline">
          Browse jobs
        </a>
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl border-1 border-lime-400 p-3 lg:p-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border-2 border-lime-400 rounded-lg shadow-md p-2 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <div className="flex items-center  text-sm">
              <span className="text-green-500 mr-1">★</span>
              <span>{category.rating}/5</span>
              <span className="ml-2">|</span>
              <span className="ml-2">{category.skills} skills</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentByCategory;