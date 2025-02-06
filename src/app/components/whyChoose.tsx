import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="max-w-[1320px] h-[716px] mx-auto flex bg-gray-100 rounded-lg p-0">
      {/* Left Side - Images Grid */}
      <div className="w-1/2 grid grid-cols-2 gap-4 bg-black">
        {/* Image 1 */}
        <div className="w-[362px] h-[356px] rounded-lg overflow-hidden">
          <Image src="/images/w1.png" alt="Image 1" width={362} height={356} unoptimized className="w-full h-full object-cover" />
        </div>

        {/* Image 2 */}
        <div className="w-[281px] h-[231px] rounded-lg overflow-hidden">
          <Image src="/images/w2.png" alt="Image 2" width={281} height={231} unoptimized className="w-full h-full object-cover" />
        </div>

        {/* Image 3 */}
        <div className="w-[244px] h-[306px] rounded-lg overflow-hidden">
          <Image src="/images/w3.png" alt="Image 3" width={244} height={306} unoptimized className="w-full h-full object-cover" />
        </div>

        {/* Image 4 */}
        <div className="w-[161px] h-[168px] rounded-lg overflow-hidden">
          <Image src="/images/w4.png" alt="Image 4" width={161} height={168} unoptimized className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-1/2 flex flex-col justify-center text-left p-10 bg-black">
        <h2 className="text-4xl font-bold mb-4 text-[#FF9F0D]">
          Extraordinary Taste & Experienced
        </h2>

        <p className="text-white text-lg mb-6 text-[16px] font-normal leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        {/* Small Icon */}
        <div className="flex justify-start">
          <Image src="/images/icon.png" alt="Icon" width={56} height={56} unoptimized className="w-14 h-14" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
