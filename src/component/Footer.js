import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Easy Ahead</h1>
          <p className="text-gray-300">Simplify connections, achieve more</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <FontAwesomeIcon icon={faTwitter} className="text-white mr-2 text-xl" />
          <FontAwesomeIcon icon={faFacebook} className="text-white mr-2 text-xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-white mr-2 text-xl" />
          <FontAwesomeIcon icon={faYoutube} className="text-white mr-2 text-xl" />
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-center md:text-left mb-4 md:mb-0 w-full">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <ul>
            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="/team" className="text-gray-400 hover:text-white transition-colors duration-300">Our Team</a></li>
          </ul>
        </div>
        <div className="text-white text-center md:text-left mb-4 md:mb-0 w-full">
          <h3 className="text-lg font-semibold mb-2">Solutions</h3>
          <ul>
            <li><a href="/solution1" className="text-gray-400 hover:text-white transition-colors duration-300">Solution 1</a></li>
            <li><a href="/solution2" className="text-gray-400 hover:text-white transition-colors duration-300">Solution 2</a></li>
          </ul>
        </div>
        <div className="text-white text-center md:text-left mb-4 md:mb-0 w-full">
          <h3 className="text-lg font-semibold mb-2">Features</h3>
          <ul>
            <li><a href="/feature1" className="text-gray-400 hover:text-white transition-colors duration-300">Feature 1</a></li>
            <li><a href="/feature2" className="text-gray-400 hover:text-white transition-colors duration-300">Feature 2</a></li>
          </ul>
        </div>
        <div className="text-white text-center md:text-left w-full">
          <h3 className="text-lg font-semibold mb-2">Support Add-Ons</h3>
          <ul>
            <li><a href="/support-addon1" className="text-gray-400 hover:text-white transition-colors duration-300">Support Add-On 1</a></li>
            <li><a href="/support-addon2" className="text-gray-400 hover:text-white transition-colors duration-300">Support Add-On 2</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
