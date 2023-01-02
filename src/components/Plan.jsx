import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://img.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?w=996&t=st=1672679796~exp=1672680396~hmac=b3e5924ab660f3faf96b8b60e4add231c5b3f9291010d4be8976e405dbd7b746"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-with-chair-blue-sky_74190-7488.jpg?w=996&t=st=1672679866~exp=1672680466~hmac=0470dfe584a117f437e133a3f4a6d93139b4f0caef4e729ad9f6d35446604885"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://img.freepik.com/free-photo/outdoor-patio_1203-3548.jpg?w=996&t=st=1672679983~exp=1672680583~hmac=d55c3a21cc1ce55ead0694616d1060cabaa972142bb78bad09daab5c46c86aa4"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://img.freepik.com/free-photo/beautiful-shot-cliffs-near-ocean-through-natural-stone-arch_181624-34344.jpg?w=996&t=st=1672680447~exp=1672681047~hmac=7f4d418af585741d92c81f570f6488117cab5c0ed9c617fe596974c837f6d263"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">Are you ready to plan your next trip?</p>
        <p className="pb-6">
          Look no further! Travels offers a wide variety of vacation options to
          suit your interests and budget. From beachfront resorts to mountain
          retreats, we have something for every type of traveler. Our
          experienced travel advisors will help you choose the perfect
          destination and plan every detail of your trip, ensuring that you have
          a stress-free and enjoyable vacation. Don't wait any longer to
          experience all that the world has to offer. Start planning your dream
          trip with Travels today!.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
