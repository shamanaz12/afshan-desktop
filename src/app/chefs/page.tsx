"use client";
import Image from "next/image";
import Link from "next/link";

// Static Chef data
const chefData = {
  name: "Gordon Ramsay",
  position: "Head Chef",
  experience: "20+ years",
  description:
    "Gordon Ramsay is a world-renowned chef known for his Michelin stars and cooking expertise. He has worked in some of the most prestigious kitchens around the world.",
  specialty: "Fine Dining & British Cuisine",
  available: "Monday - Friday",
  imageUrl: "/images/ch2.png", // Path to a static image in your 'public' folder
};

const Chefs = () => {
  return (
    <div>
      {/* Banner Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Chef Profile</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Chef Profile
          </p>
        </div>
      </section>

      {/* Chef Details */}
      <div className="container mx-auto my-16 px-4">
        <div className="flex flex-col md:flex-row gap-8">

          <div className="flex-1">
            <Image
              src={chefData.imageUrl}
              alt={chefData.name}
              width={500}
              height={700}
              className="object-cover w-[380px] h-[380px]"
            />
          </div>

          {/* Chef Info */}
          <div className="md:max-w-[615px] px-3 space-y-4">
            <h1 className="text-3xl font-bold">{chefData.name}</h1>
            <p className="text-lg">{chefData.description}</p>
            <p className="text-lg font-semibold">
              Position: <span className="text-orange-500">{chefData.position}</span>
            </p>
            <p className="text-lg font-semibold">
              Specialty: <span className="text-orange-500">{chefData.specialty}</span>
            </p>
            <p className="text-lg">
              Experience: {chefData.experience}
            </p>
            <p className="text-lg">
              Availability: {chefData.available}
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Contact Chef
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
