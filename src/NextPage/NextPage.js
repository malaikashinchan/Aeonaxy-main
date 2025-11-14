import React from 'react';
import Background from '../component/images/background.jpg';
import Form from './Form';

export default function NextPage() {
  return (
    <div>
      <div className="relative flex flex-col justify-center ">{/*ml-11 mr-8*/}
        <img src={Background} alt='dp' style={{height:"400px" }} className="w-screen h-auto"/>
        <div className="absolute top-0 left-0 w-full h-full flex justify-start items-center">
          <div className="max-w-lg mx-20 text-white text-left md:block hidden">
            {/* Show text only on medium screens and above */}
            <h1 className="text-white mb-4">Stay Updated</h1>
            <div className="text-white font-bold mb-4 text-5xl">Subscribe to the newsletter</div>
            <p className="text-white mb-8">
              Money's limited impact on business cycles: Money is considered to have little influence on economic fluctuations.
            </p>
          </div>
          <div className="flex justify-center md:justify-center w-full">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
