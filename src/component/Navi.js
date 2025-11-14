import React from 'react';

export default function Navi() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <ul className="list-none flex font-bold space-x-4 md:space-x-8 flex-wrap">
        <li className="hover:bg-blue-400 px-2 py-1 rounded-full transition-all duration-300 hover:text-white">Individuals</li>
        <li className="hover:bg-blue-400 px-2 py-1 rounded-full transition-all duration-300 hover:text-white">Teams</li>
        <li className="hover:bg-blue-400 px-2 py-1 rounded-full transition-all duration-300 hover:text-white">Enterprise</li>
        <li className="relative">
          <span className="hover:bg-blue-400 px-2 py-1 rounded-full transition-all duration-300 hover:text-white cursor-pointer">Resources</span>
          <select className="absolute top-0 left-0 bg-transparent border-none focus:outline-none w-full h-full opacity-0 cursor-pointer" tabIndex={-1}>
            <option value="" disabled hidden>Resources</option>
            <option value="resource1">Resource 1</option>
            <option value="resource2">Resource 2</option>
            <option value="resource3">Resource 3</option>
          </select>
        </li>
        <li className="hover:bg-blue-400 px-2 py-1 rounded-full transition-all duration-300 hover:text-white">Pricing</li>
        <li className="relative">
          <span className="hover:bg-blue-400 px-2 py-1 rounded-full transition-all duration-300 hover:text-white cursor-pointer">Product</span>
          <select className="absolute top-0 left-0 bg-transparent border-none focus:outline-none w-full h-full opacity-0 cursor-pointer" tabIndex={-1}>
            <option value="" disabled hidden>Product</option>
            <option value="feature1">Feature 1</option>
            <option value="feature2">Feature 2</option>
            <option value="feature3">Feature 3</option>
          </select>
        </li>
      </ul>
      <div className="mt-4 md:mt-0">
        <ul className="list-none flex font-bold space-x-4 md:space-x-11">
          <li className="hover:bg-blue-400 px-2 py-1 rounded-full transition-all duration-300 hover:text-white">Log In</li>
          <li className="hover:bg-blue-400 px-2 py-1 rounded-full transition-all duration-300 hover:text-white">Sign Up Free</li>
        </ul>
      </div>
    </div>
  );
}
