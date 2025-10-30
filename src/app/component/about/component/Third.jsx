import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { PiPaintBucketFill } from "react-icons/pi";
import { FaClipboardCheck } from "react-icons/fa";



const Third = () => {
  return (
    <div className="w-full bg-[#00205b] flex items-center justify-center py-20">
      <div className="mycontainer flex flex-col items-center justify-center gap-3">
        <p className="text-white uppercase">
          <span className="text-[#e71954]">//</span> Our Story
        </p>
        <h1 className="text-white text-3xl lg:text-5xl lg:w-[40%] text-center leading-snug font-bold">
          Our Simplified Painting Process
        </h1>
        <div className="mt-15 gap-5 w-full flex-col flex md:flex-row justify-between">
          <div className="flex flex-col lg:flex-row gap-3 bg-white rounded-2xl lg:w-1/3 w-full items-start">
            <div className="w-20% flex items-start rounded-tl-2xl flex-col bg-[#e7194f] p-5">
              <IoHomeSharp className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col gap-3 px-5 py-10">
              <h2 className=" lg:text-xl text-[#00205b] text-lg font-bold">
                1. Consultation
              </h2>
              <p className="lg:text-lg text-sm">
                We kick off your project with a detailed consultation to understand your vision and preferences.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 bg-white rounded-2xl lg:w-1/3 w-full items-start">
            <div className="w-20% flex items-start rounded-tl-2xl flex-col bg-[#e7194f] p-5">
              <PiPaintBucketFill className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col gap-3 px-5 py-10">
              <h2 className=" lg:text-xl text-[#00205b] text-lg font-bold">
                2. Preparation
              </h2>
              <p className="lg:text-lg text-sm">
                Our team prepares your space meticulously, ensuring all surfaces are ready for painting & use premium materials.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 bg-white rounded-2xl lg:w-1/3 w-full items-start">
            <div className="w-20% flex items-start rounded-tl-2xl flex-col bg-[#e7194f] p-5">
              <FaClipboardCheck className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col gap-3 px-5 py-10">
              <h2 className=" lg:text-xl text-[#00205b] text-lg font-bold">
                3. Completion
              </h2>
              <p className="lg:text-lg text-sm">
                Once painting is complete, we perform a thorough quality check and clean-up & conduct a final walkthrough .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
