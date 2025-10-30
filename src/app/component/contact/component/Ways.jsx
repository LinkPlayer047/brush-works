import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const Ways = () => {
  return (
    <div>
      <div className="mycontainer py-20 flex flex-col items-center justify-center">
        <p className="text-black uppercase">
          <span className="text-[#e71954]">//</span> More Ways
        </p>
        <h1 className="text-[#00205b] text-4xl mt-3 md:text-5xl lg:font-bold font-bold">
          Reach Out to Us
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-5 mt-20">
          <div className="w-full lg:w-1/3 rounded-2xl flex gap-5 flex-col lg:flex-row border p-5 border-gray-400">
            <div className="">
              <FaLocationDot className="p-5 text-white rounded-full bg-[#00205b] h-15 w-15" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-[#00205b]">Location</h3>
              <p className="text-gray-800">
                Puputan Renon, 1131 DPS, Denpasar, Bali
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 rounded-2xl flex gap-5 flex-col lg:flex-row border p-5 border-gray-400">
            <div className="">
              <MdEmail className="p-5 text-white rounded-full bg-[#00205b] h-15 w-15" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-[#00205b]">Email</h3>
              <p className="text-gray-800">
                Support@example.com
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 rounded-2xl flex gap-5 flex-col lg:flex-row border p-5 border-gray-400">
            <div className="">
              <FaPhoneAlt className="p-5 text-white rounded-full bg-[#00205b] h-15 w-15" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-[#00205b]">Contact</h3>
              <p className="text-gray-800">
                +62 123-432-543
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ways;
