import React from "react";
import { FaBrush } from "react-icons/fa";
import { RiPaintFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const Choose = () => {
  return (
    <>
    <div className="relative">
        <div className="relative h-16 sm:h-28 md:h-36 lg:h-48">
          <svg
            viewBox="0 0 1920 863"
            className="absolute bottom-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M-3,551 C186.257589,757.321118 319.044414,856.322454 
             395.360475,848.004007 C509.834566,835.526337 
             561.525143,796.329212 637.731734,765.961549 
             C713.938325,735.593886 816.980646,681.910577 
             1035.72208,733.065469 C1254.46351,784.220361 
             1511.54925,678.92359 1539.40808,662.398665 
             C1567.2669,645.87374 1660.9143,591.478574 
             1773.19378,597.641868 C1848.04677,601.75073 
             1901.75645,588.357675 1934.32284,557.462704 
             L1934.32284,863.183395 L-3,863.183395"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>
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
    </>
  );
};

export default Choose;
