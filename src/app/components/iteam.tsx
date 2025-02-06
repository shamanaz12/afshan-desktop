import Image from "next/image";

export default function Iteam() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-wrap justify-center items-center gap-4">
      {/* Card 1 */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Image
          src="/images/iteam1.png"
          alt="hey"
          className="rounded-lg object-cover"
          width={305}
          height={328}
        />
      </div>

      {/* Card 2 */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Image
          src="/images/iteam2.png"
          alt="Image 2"
          className="rounded-lg object-cover"
          width={305}
          height={328}
        />
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Image
          src="/images/iteam3.png"
          alt="Image 3"
          className="rounded-lg object-cover"
          width={305}
          height={328}
        />
      </div>


      {/* Card 4*/}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Image
          src="/images/f1.png"
          alt="hey"
          className="rounded-lg object-cover"
          width={305}
          height={328}
        />
      </div>

      {/* Card 5 */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Image
          src="/images/me8.png"
          alt="Image 5"
          className="rounded-lg object-cover"
          width={305}
          height={328}
        />
      </div>

      {/* Card 6 */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Image
          src="/images/me7.png"
          alt="Image 6"
          className="rounded-lg object-cover"
          width={305}
          height={328}
        />
      </div>
    </div>
  );
}
