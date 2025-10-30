import React from "react";
import { FaBrush } from "react-icons/fa";
import { RiPaintFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const Choose = () => {
  return (
    <div className="w-full bg-[#00205b] flex items-center justify-center py-20">
      <div className="mycontainer flex flex-col items-center justify-center gap-3">
        <p className="text-white uppercase">
          <span className="text-[#e71954]">//</span> Why choose us
        </p>
        <h1 className="text-white text-3xl lg:text-5xl lg:w-[75%] text-center leading-snug font-bold">
          We offer Top-Tier Residential Painting Services
        </h1>
        <div className="mt-10 gap-5 w-full flex-col flex md:flex-row justify-between">
          <div className="flex flex-col lg:flex-row gap-3 lg:w-1/3 w-full items-start">
            <div className="w-20% flex items-start flex-col rounded-full bg-[#1a376c] p-5">
              <FaBrush className="text-white h-5 w-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-white lg:text-xl text-lg font-bold">
                Expert Craftsmanship
              </h2>
              <p className="lg:text-lg text-sm text-white">
                Trained professionals dedicated to delivering exceptional
                results.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:w-1/3 w-full items-start">
            <div className="w-20% flex items-start flex-col rounded-full bg-[#1a376c] p-5">
              <RiPaintFill className="text-white h-5 w-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-white lg:text-xl text-lg font-bold">
                Premium Materials
              </h2>
              <p className="lg:text-lg text-sm text-white">
                We use only high-quality paints and materials for lasting
                durability.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:w-1/3 w-full items-start">
            <div className="w-20% flex items-start flex-col rounded-full bg-[#1a376c] p-5">
              <FaStar className="text-white h-5 w-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-white lg:text-xl text-lg font-bold">
                Customer Satisfaction
              </h2>
              <p className="lg:text-lg text-sm text-white">
                We prioritize your needs and ensure you are completely satisfied
                with our work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
