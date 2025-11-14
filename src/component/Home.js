import React from 'react';
import logo from './images/view.png';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 flex justify-center md:justify-end">
        {/* Image */}
        <img src={logo} alt='dp' className="w-full md:max-w-sm md:mx-4" />
      </div>
      <div className="md:w-1/2 md:pl-8 ">
        {/* Text Content */}
        <div className="text-left my-5">
          <h1>WHAT'S NEW</h1>
        </div>
        <div className="text-left my-5">
          <h1 className="font-black text-2xl">Welcome to The Time Economy</h1>
        </div>
        <div className="text-left my-8">
          <h1 className="font-medium">
            Our most precious resource is time-- and the next Decode will be defined by how we manage it" suggests that in the<br/> upcoming period, the way we utilize and allocate our time will play a defining role.  
          </h1>
        </div>
        <div className="text-left my-12">
          <h1 className="font-medium">Read The Article </h1>
        </div>
      </div>
    </div>
  );
}
