import React from "react";

const First = () => {
  return (
    <div>
      <div className="mycontainer pt-20 flex flex-col justify-between gap-10 mix-h-screen md:flex-row">
        <div className="w-full md:w-1/2">
          <p className="text-black uppercase">
            <span className="text-[#e71954]">//</span> About us
          </p>
          <h1 className="text-[#00205b] text-4xl md:text-5xl lg:font-bold font-bold">
            Your Trusted Painting Experts
          </h1>
          <p className="text-sm pt-5">We are dedicated to providing high-quality painting services that enhance the beauty and value of your home or business.</p>
        </div>
        <div className="w-full md:w-1/2">
            <img src="/hero-about.jpg" alt="" className="rounded-2xl z-40" />
        </div>
      </div>
    </div>
  );
};

export default First;
