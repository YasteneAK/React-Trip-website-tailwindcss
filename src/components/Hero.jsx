import React from "react";
const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Escape to Paradise{" "}
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Whether you're looking for a romantic getaway, a family vacation, or
            a business retreat, Travels has something for everyone. We look
            forward to welcoming you and providing an unforgettable experience.
          </p>
          <button className="bg-white text-black ">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
