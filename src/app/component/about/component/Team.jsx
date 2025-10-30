import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center py-20">
      <div className="mycontainer flex flex-col items-center justify-center gap-3">
        <p className="text-black uppercase">
          <span className="text-[#e71954]">//</span> Our story
        </p>
        <h1 className="text-[#00205b] text-3xl lg:text-5xl lg:w-[75%] text-center leading-snug font-bold">
          Meet the BrushWorks Team
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-full gap-5 relative">
          <div className="relative mt-10 w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-full rounded-2xl md:w-[90%]">
              <img src="/team-01.jpg" alt="team" className="rounded-2xl" />
            </div>
            <div className="absolute md:top-[85%] top-[80%] -translate-y-1/2 -translate-x-1/2 left-[50%] md:left-[55%] lg:left-[55%] rounded-2xl flex items-center justify-between bg-white w-[90%] md:w-[85%] px-3 py-3">
              <div className="w-[80%] md:w-full">
                <h1 className="text-[#00205b] md:text-sm lg:text-xl md:font-bold font-bold text-lg font-blue">
                  John Smith
                </h1>
                <p className="text-gray-700 md:text-sm text-sm">
                  Lead Painter & Project Manager
                </p>
              </div>
              <div className="w-[20%] flex justify-end">
                <FaLinkedinIn className="text-[#00205b] h-7 w-7 md:h-5 md:w-5" />
              </div>
            </div>
          </div>
          <div className="relative mt-10 w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-full rounded-2xl md:w-[90%]">
              <img src="/team-02.jpg" alt="team" className="rounded-2xl" />
            </div>
            <div className="absolute md:top-[85%] top-[80%] -translate-y-1/2 -translate-x-1/2 left-[50%] md:left-[55%] lg:left-[55%] rounded-2xl flex items-center justify-between bg-white w-[90%] md:w-[85%] px-3 py-3">
              <div className="w-[80%] md:w-full">
                <h1 className="text-[#00205b] md:text-sm lg:text-xl font-bold text-lg font-blue">
                  Emily Lu
                </h1>
                <p className="text-gray-700 md:text-sm text-sm">
                  Client Relationship Manager
                </p>
              </div>
              <div className="w-[20%] flex justify-end">
                <FaLinkedinIn className="text-[#00205b] h-7 w-7 md:h-5 md:w-5" />
              </div>
            </div>
          </div>
          <div className="relative mt-10 w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-full rounded-2xl md:w-[90%]">
              <img src="/team-03.jpg" alt="team" className="rounded-2xl" />
            </div>
            <div className="absolute md:top-[83%] top-[80%] -translate-y-1/2 -translate-x-1/2 left-[50%] md:left-[55%] lg:left-[55%] rounded-2xl flex items-center justify-between bg-white w-[90%] md:w-[85%] px-3 py-3">
              <div className="w-[80%] md:w-full">
                <h1 className="text-[#00205b] md:text-sm lg:text-xl font-bold text-lg font-blue">
                  Lisa Thompson
                </h1>
                <p className="text-gray-700 md:text-sm text-sm">
                  Design Specialist
                </p>
              </div>
              <div className="w-[20%] flex justify-end">
                <FaLinkedinIn className="text-[#00205b] h-7 w-7 md:h-5 md:w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
