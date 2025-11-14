import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, cta, minutes, functionality }) => {
  return (
    <div className="bg-white text-black rounded-lg shadow-md overflow-hidden w-full sm:w-72 mx-4 my-3 transition duration-300 hover:bg-purple-500 hover:text-white hover:border-white">
      <div className="h-80">
        <div className="p-4">
          <div className="rounded-full border-2 border-blue-400 p-2 hover:border-white">
            <h2 className="text-left text-blue-400 hover:text-white text-lg sm:text-xl">{title}</h2>
          </div>
          <div className='my-3'>
            <p className="text-left font-semibold text-sm sm:text-base">{description}</p>
          </div>
          <div className='text-left my-5 font-thin text-sm sm:text-base'>
            <h1>Read Time: {minutes} </h1>
          </div>
          <div className='text-left'>
            <h1 className="text-sm sm:text-base">{functionality}</h1>
          </div>
        </div>
      </div>
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <span className="text-sm font-extrabold sm:text-base">{cta} <FontAwesomeIcon icon={faCircleArrowRight} className="ml-2 text-black-500 text-lg sm:text-xl" /></span>
      </div>
    </div>
  );
};

export default Card;
