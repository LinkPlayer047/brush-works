import React from 'react'

const Projects = () => {
  return (
    <section className="bg-[#FFFFFF] py-20 relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center">
        <div className="text-start md:w-1/2 mb-10 md:mb-0">
          <p className="uppercase text-sm tracking-widest text-gray-700">
            <span className="text-[#e71954]">//</span> Recent Projects
          </p>
          <h2 className="text-[#00205b] text-3xl md:text-5xl font-bold leading-snug mt-2">
            Transformation We Bring to Your Home.
          </h2>
        </div>
        <div className="md:w-1/2 flex md:justify-end justify-start">
          <button className="bg-[#e71954] hover:bg-[#c20e42] text-white font-semibold py-3 px-8 rounded transition">
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* First Row */}
          <img
            src="/projects-01.jpg"
            alt="Project 1"
            className="md:col-span-2 w-full h-64 md:h-80 object-cover rounded-lg"
          />
          <img
            src="/projects-02.jpg"
            alt="Project 2"
            className="md:col-span-2 w-full h-64 md:h-80 md:w-full object-cover rounded-lg"
          />
          <img
            src="/projects-03.jpg"
            alt="Project 3"
            className="md:col-span-1 w-full h-64 md:h-80 object-cover rounded-lg"
          />

          {/* Second Row */}
          <img
            src="/projects-04.jpg"
            alt="Project 4"
            className="md:col-span-3 w-full h-auto md:h-72 object-cover rounded-lg"
          />
          <img
            src="/projects-05.jpg"
            alt="Project 5"
            className="md:col-span-2 w-full h-auto md:h-72 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
