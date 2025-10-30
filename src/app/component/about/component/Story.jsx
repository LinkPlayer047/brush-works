import React from "react";
import { TiTick } from "react-icons/ti";
import { FaPaintRoller } from "react-icons/fa";

const Story = () => {
  return (
    <div className="bg-[#f1f6fa] w-full py-20 md:py-50 overflow-hidden -mt-20 z-20">
      <div className="mycontainer flex flex-col md:flex-row items-center justify-between gap-16 relative">
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full md:w-[90%]">
            <img
              src="/our-story.jpg"
              alt="Painter working on wall"
              className="rounded-2xl w-full object-cover"
            />
            <div
              className="
                absolute 
                bottom-[-50px]
                right-[-40px]
                bg-[#00205b] 
                flex flex-col items-start sm:flex-row
                sm:items-center
                justify-center sm:justify-start
                gap-4 sm:gap-5
                py-5 px-6
                rounded-2xl shadow-lg 
                w-[90%] sm:w-[70%] md:w-[65%] lg:w-[55%]
                max-w-[350px]
                mx-auto sm:mx-0
                transition-all duration-300
              "
            >
              <div className="p-4 bg-[#1a376c] rounded-full flex items-start justify-center mb-2 sm:mb-0">
                <FaPaintRoller className="text-white h-5 md:h-3 w-5 md:w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="text-start sm:text-left">
                <h3 className="text-3xl md:text-lg font-bold text-white leading-none">
                  15+
                </h3>
                <p className="text-base md:text-sm text-white font-light">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-24 md:mt-0 z-10">
          <p className="text-black uppercase tracking-wide mb-2">
            <span className="text-[#e71954]">//</span> Our Story
          </p>

          <h1 className="text-[#00205b] text-4xl md:text-5xl font-bold leading-tight mb-5">
            Delivering Exceptional Results Every Time
          </h1>

          <p className="text-gray-800 md:text-lg text-base leading-relaxed mb-6">
            Founded with a passion for craftsmanship and attention to detail,
            BrushWorks has grown into a leading provider of residential and
            commercial painting services. With years of experience under our
            belts, we pride ourselves on our ability to handle projects of any
            size, delivering exceptional results every time.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "98% Customer Satisfaction Rate",
              "Over 500 Homes Transformed",
              "10+ Qualified Professionals",
              "85% Repeat Clients",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <TiTick className="text-white bg-[#00205b] rounded-full h-6 w-6 p-0.5" />
                <p className="text-base md:text-lg text-black font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
