import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Services = () => {
  return (
    <section className="bg-[#f1f6fa] py-20 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="text-center md:w-full max-w-3xl mb-20">
          <p className="uppercase text-sm tracking-widest text-gray-700">
            <span className="text-[#e71954]">//</span> Our Services
          </p>
          <h2 className="text-[#00205b] text-3xl md:text-5xl font-bold leading-snug mt-2">
            Transformative Painting Services Tailored to Your Needs
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-11/12 gap-5 relative">
          <div className="bg-white rounded-2xl border border-gray-300 flex flex-col items-center text-center p-6 md:w-1/3 w-full relative">
            <div className="absolute -top-8 w-[90%]">
              <img
                src="/1.jpg"
                alt="Indoor Painting"
                className="rounded-xl w-full h-56 object-cover shadow-md"
              />
            </div>
            <div className="pt-52 flex items-center flex-col">
              <h3 className="text-[#00205b] text-2xl font-bold mb-2">
                Indoor Painting
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Refresh your interiors with our expert indoor painting services.
              </p>
              <button className="text-[#00205b] font-semibold flex items-center justify-center gap-1 hover:text-[#e71954] transition">
                Know More <IoIosArrowDroprightCircle size={20} />
              </button>
            </div>
          </div>
          <div className="bg-white mt-10 rounded-2xl border border-gray-300 flex flex-col items-center text-center p-6 md:w-1/3 w-full relative md:mt-40">
            <div className="absolute -top-8 w-[90%]">
              <img
                src="/2.jpg"
                alt="Outdoor Painting"
                className="rounded-xl w-full h-56 object-cover shadow-md"
              />
            </div>
            <div className="pt-52 flex items-center flex-col">
              <h3 className="text-[#00205b] text-2xl font-bold mb-2">
                Outdoor Painting
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Boost your home's curb appeal with our weather-resistant
                painting solutions.
              </p>
              <button className="text-[#00205b] font-semibold flex items-center justify-center gap-1 hover:text-[#e71954] transition">
                Know More <IoIosArrowDroprightCircle size={20} />
              </button>
            </div>
          </div>
          <div className="bg-white mt-10 border border-gray-300 rounded-2xl flex flex-col items-center text-center p-6 md:w-1/3 w-full relative md:-mt-40">
            <div className="absolute -top-8 w-[90%]">
              <img
                src="/3.jpg"
                alt="Object Painting"
                className="rounded-xl w-full h-56 object-cover shadow-md"
              />
            </div>
            <div className="pt-52 flex items-center flex-col">
              <h3 className="text-[#00205b] text-2xl font-bold mb-2">
                Object Painting
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Bring new life to your cherished objects with our precise object
                painting services.
              </p>
              <button className="text-[#00205b] font-semibold flex items-center justify-center gap-1 hover:text-[#e71954] transition">
                Know More <IoIosArrowDroprightCircle size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <button className="bg-[#e71954] hover:bg-[#c20e42] text-white font-semibold py-3 px-8 rounded-lg transition">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
