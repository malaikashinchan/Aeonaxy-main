import React from 'react';

export default function Header() {
  return (
    <div className='my-8 mx-4'>
        <h1 className='font-extrabold text-2xl text-center'>The Calendly Blog</h1>
        <div className="flex justify-center mt-4">
            <ul className='list-none flex flex-wrap justify-center font-normal space-x-2 text-sm'>
                <li className='hover:bg-blue-400 px-3 py-1 rounded-full transition-all duration-300 hover:text-white my-1'>ALL</li>
                <li className='hover:bg-blue-400 px-3 py-1 rounded-full transition-all duration-300 hover:text-white my-1'>WHAT'S NEW</li>
                <li className='hover:bg-blue-400 px-3 py-1 rounded-full transition-all duration-300 hover:text-white my-1'>SALES</li>
                <li className='hover:bg-blue-400 px-3 py-1 rounded-full transition-all duration-300 hover:text-white my-1'>RECRUITING</li>
                <li className='hover:bg-blue-400 px-3 py-1 rounded-full transition-all duration-300 hover:text-white my-1'>PRODUCTIVITY</li>
                <li className='hover:bg-blue-400 px-3 py-1 rounded-full transition-all duration-300 hover:text-white my-1'>CREATING CALENDLY</li>
            </ul>
        </div>
    </div>
  )
}
