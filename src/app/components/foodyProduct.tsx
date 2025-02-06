import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex h-screen bg-black">
      
      <div className="w-1/2 flex flex-col items-start justify-center p-8 text-white">
        <h1 className="text-4xl font-bold">
        We Create the best foody product

        </h1>
        <p className="text-xl mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600">
        Read More
        </button>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Image 
            src="/images/ps1.png"
            alt="Foody 1"
            width={320} // Width specify ki gayi hai
            height={192} // Height specify ki gayi hai
            className="rounded-lg"
          />
          <Image 
            src="/images/ps2.png"
            alt="Foody 2"
            width={320}
            height={192}
            className="rounded-lg"
          />
          <Image 
            src="/images/ps3.png"
            alt="Foody 3"
            width={320}
            height={192}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
