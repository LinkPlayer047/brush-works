import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { TiTick } from "react-icons/ti";




const About = () => {
  return (
    <div>
      <div className="mycontainer py-20 min-h-screen flex gap-10 flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img src="/overlay.png" alt="images" />
        </div>
        <div className="lg:w-1/2 w-full flex gap-5 flex-col">
          <p className="text-black uppercase">
            <span className="text-[#e71954]">//</span> About us
          </p>
          <h1 className="text-[#00205b] text-3xl md:text-5xl lg:font-bold leading-snug font-bold">
            Discover Our Passion for Painting Excellence
          </h1>
          <p className="text-sm text-black ">
            At BrushWorks, painting is more than just a service—it’s an art
            form. With years of experience and a deep commitment to transforming
            spaces, our team of skilled professionals is dedicated to bringing
            your vision to life.
          </p>
          <div className="mt-5 gap-5 w-full flex-col flex xl:flex-row justify-between">
            <div className="flex flex-col md:flex-row md:items-center gap-3 items-start py-5 border-b border-b-gray-200 xl:border-b-0 xl:border-r xl:border-r-gray-200 w-full">
              <div className=" flex items-start flex-col rounded-full bg-[#1a376c] p-3">
                <IoIosColorPalette className="text-white h-5 w-5" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#00205b] w-full lg:w-[70%] lg:text-xl  text-sm">
                  Expert Craftsmanship
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3 items-start py-5 w-full">
              <div className=" flex items-start flex-col rounded-full bg-[#1a376c] p-3">
                <FaUser className="text-white h-5 w-5" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#00205b] w-full lg:w-[70%] lg:text-xl  text-sm">
                  Customer Focused
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <div className="flex items-center gap-3">
                <TiTick className="text-white p-0.5 rounded-full bg-[#00205b] h-5 w-5" />
            <p className="text-lg text-black">Delivering precision and detail in every project.</p>
            </div>
            <div className="flex items-center gap-3">
                <TiTick className="text-white p-0.5 rounded-full bg-[#00205b] h-5 w-5" />
            <p className="text-lg text-black">Your satisfaction is our top priority.</p>
            </div>
            <div className="flex items-center gap-3">
            <TiTick className="text-white p-0.5 rounded-full bg-[#00205b] h-5 w-5" />
            <p className="text-lg text-black">Ensuring lasting beauty and durability.</p>
            </div>
          </div>
          <div className="w-full mt-5">
            <button className="rounded-lg bg-[#e7194f] text-white font-semibold hover:bg-[#c20e42] py-4 px-7">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
