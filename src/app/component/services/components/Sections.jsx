import React from "react";

const Sections = () => {
  return (
    <div className="bg-[#f1f6fa] w-full py-20 -mt-20 z-20">
      <div className="mycontainer md:pt-40 overflow-hidden">
        <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-2 gap-20 lg:-mt-10 w-full md:w-11/12 mx-auto">
          <div className="bg-white rounded-2xl border border-gray-300 flex flex-col items-center text-center p-6 relative min-h-[520px] sm:min-h-[500px]">
            <div className="absolute -top-8 w-[90%] left-1/2 -translate-x-1/2">
              <img
                src="/1.jpg"
                alt="Indoor Painting"
                className="rounded-xl w-full h-56 object-cover shadow-md"
              />
            </div>
            <div className="pt-52 flex flex-col justify-between h-full w-full text-start">
              <div>
                <h3 className="text-[#00205b] text-2xl font-bold mb-2">
                  Indoor Painting
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Transform your interior spaces with BrushWorks’ expert indoor painting services. We specialize in creating inviting and vibrant environments, offering precise color matching and flawless finishes. From single rooms to entire homes, our attention to detail ensures a seamless and beautiful result every time.
                </p>
              </div>
              <button className="rounded-lg bg-[#e7194f] text-white font-semibold hover:bg-[#c20e42] py-3 px-6 mt-6 w-fit">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-300 flex flex-col items-center text-center p-6 relative min-h-[520px] sm:min-h-[500px]">
            <div className="absolute -top-8 w-[90%] left-1/2 -translate-x-1/2">
              <img
                src="/2.jpg"
                alt="Outdoor Painting"
                className="rounded-xl w-full h-56 object-cover shadow-md"
              />
            </div>
            <div className="pt-52 flex flex-col justify-between h-full w-full text-start">
              <div>
                <h3 className="text-[#00205b] text-2xl font-bold mb-2">
                  Outdoor Painting
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Enhance your home’s exterior with our weather-resistant outdoor painting solutions. Our team uses high-quality paints & techniques to protect your home from the elements while boosting its curb appeal. Whether it’s a fresh coat or a complete color change, we deliver durable and stunning finishes.
                </p>
              </div>
              <button className="rounded-lg bg-[#e7194f] text-white font-semibold hover:bg-[#c20e42] py-3 px-6 mt-6 w-fit">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-300 flex flex-col items-center text-center p-6 relative min-h-[520px] sm:min-h-[500px]">
            <div className="absolute -top-8 w-[90%] left-1/2 -translate-x-1/2">
              <img
                src="/3.jpg"
                alt="Object Painting"
                className="rounded-xl w-full h-56 object-cover shadow-md"
              />
            </div>
            <div className="pt-52 flex flex-col justify-between h-full w-full text-start">
              <div>
                <h3 className="text-[#00205b] text-2xl font-bold mb-2">
                  Object Painting
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Give new life to your favorite objects with our specialized object painting services. From decorative items to functional pieces, we provide meticulous care and creativity, ensuring each object complements your space beautifully with a fresh, personalized touch.
                </p>
              </div>
              <button className="rounded-lg bg-[#e7194f] text-white font-semibold hover:bg-[#c20e42] py-3 px-6 mt-6 w-fit">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-300 flex flex-col items-center text-center p-6 relative min-h-[520px] sm:min-h-[500px]">
            <div className="absolute -top-8 w-[90%] left-1/2 -translate-x-1/2">
              <img
                src="/services-04.jpg"
                alt="Furniture Painting"
                className="rounded-xl w-full h-56 object-cover shadow-md"
              />
            </div>
            <div className="pt-52 flex flex-col justify-between h-full w-full text-start">
              <div>
                <h3 className="text-[#00205b] text-2xl font-bold mb-2">
                  Furniture Painting
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Revitalize your furniture with BrushWorks’ custom painting services. Our skilled team offers a range of finishes and colors to transform your furniture pieces, enhancing their appearance and longevity. Whether it’s a beloved antique or a modern piece, we ensure a perfect match for your decor.
                </p>
              </div>
              <button className="rounded-lg bg-[#e7194f] text-white font-semibold hover:bg-[#c20e42] py-3 px-6 mt-6 w-fit">
                Get Quote Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sections;
