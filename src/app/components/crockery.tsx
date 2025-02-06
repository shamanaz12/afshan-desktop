import React from 'react';
import Image from 'next/image';

const ChooseItem = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">
      <div className="flex justify-between w-[80%] gap-6">
        
        {/* Image 1 */}
        <div className="bg-gray-100 p-4 rounded-lg flex justify-center items-center">
          <Image 
            src="/images/c1.png"
            alt="c1"
            width={160} 
            height={96} 
            className="rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="bg-gray-100 p-4 rounded-lg flex justify-center items-center">
          <Image 
            src="/images/c2.png"
            alt="c2"
            width={160}
            height={96}
            className="rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="bg-gray-100 p-4 rounded-lg flex justify-center items-center">
          <Image 
            src="/images/c3.png"
            alt="c3"
            width={160}
            height={96}
            className="rounded-lg"
          />
        </div>

        {/* Image 4 */}
        <div className="bg-gray-100 p-4 rounded-lg flex justify-center items-center">
          <Image 
            src="/images/c4.png"
            alt="c4"
            width={160}
            height={96}
            className="rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default ChooseItem;
