import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div id="hero" className="mycontainer">
      <div className="flex flex-col lg:flex-row md:flex-row items-start justify-between md:mt-20 mt-10 gap-10 lg:gap-0">
        <div className="flex flex-col items-start w-full mt-10 lg:w-[40%] gap-5 text-start lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <FaStar className="text-[#e7194f]" />
            <span className="text-base md:text-lg text-gray-700">
              5/5 RATING ON TRUST PILOT
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#00205b] font-bold leading-tight">
            Transform Your Home with Expert Painting Services
          </h1>
          <p className="text-gray-700 font-light text-base md:text-lg">
            Experience the transformation with our dedicated team, delivering
            vibrant results that last.
          </p>
          <div className="flex justify-start lg:justify-start w-full mt-5">
            <button className="rounded bg-[#e7194f] hover:bg-[#c21645] transition-all duration-300 flex items-center gap-2 text-white font-semibold px-6 py-3 text-sm md:text-base">
              Get a Free Quote <IoIosArrowDroprightCircle className="text-lg" />
            </button>
          </div>
          <div className="flex flex-wrap justify-start lg:justify-start items-center gap-5 mt-8">
            <div className="flex md:items-center md:flex-row items-start flex-col gap-3">
              <div className="flex items-center justify-center rounded-full bg-[#00205b] p-3">
                <FaClock className="text-white h-5 w-5" />
              </div>
              <div className="text-gray-700 flex gap-1 md:flex-col text-sm md:text-base">
                <p>Mon-Fri (8am-5pm)</p>
                <p>Sat-Sun (10am-1pm)</p>
              </div>
            </div>
            <div className="flex md:items-center md:flex-row items-start flex-col gap-3">
              <div className="flex items-center justify-center rounded-full bg-[#00205b] p-3">
                <BsFillTelephoneFill className="text-white h-5 w-5" />
              </div>
              <div className="text-gray-700 flex md:flex-col gap-1 text-sm md:text-base">
                <p>Contact Us +088</p>
                <p>(246) 642-27-10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full z-40 lg:w-[60%]">
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full max-w-3xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
