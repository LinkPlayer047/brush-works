import React from "react";
import { FaPaintRoller } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Cta = () => {
  return (
    <div className="relative w-full -mt-33 z-30">
      {/* Background section with wavy top */}
      <div
        className="relative w-full h-[650px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
          clipPath:
            "path('M0,100 C300,0 600,200 900,100 C1200,0 1500,200 1920,100 L1920,650 L0,650 Z')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

        {/* Content */}
        <div className="mycontainer relative z-10 flex flex-col items-center justify-center text-center h-full gap-5 px-4">
          <div className="p-5 border-2 border-white rounded-full">
            <FaPaintRoller className="text-white h-5 w-5" />
          </div>

          <h2 className="text-white text-3xl md:text-5xl font-bold leading-snug mt-2 md:w-[70%]">
            Ready to Transform your Space with a Fresh Coat of Paint?
          </h2>

          <button className="rounded bg-[#e7194f] hover:bg-[#c21645] transition-all duration-300 flex items-center gap-2 text-white font-semibold px-6 py-3 text-sm md:text-base">
            Get a Free Quote <IoIosArrowDroprightCircle className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
