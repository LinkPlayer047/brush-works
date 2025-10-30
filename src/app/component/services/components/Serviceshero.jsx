import React from 'react'

const Serviceshero = () => {
  return (
    <div>
      <div className="mycontainer pt-20 flex flex-col justify-between gap-15 mix-h-screen md:flex-row">
        <div className="w-full md:w-1/2 pr-5">
          <p className="text-black uppercase">
            <span className="text-[#e71954]">//</span> Services
          </p>
          <h1 className="text-[#00205b] text-4xl md:text-5xl lg:text-6xl lg:font-bold font-bold">
            Comprehensive Painting Services
          </h1>
          <p className="text-lg pt-5">We provide a wide array of painting services tailored to transform your spaces with precision and artistry.</p>
        </div>
        <div className="w-full md:w-1/2">
            <img src="/hero-services.jpg" alt="" className="rounded-2xl z-40" />
        </div>
      </div>
    </div>
  )
}

export default Serviceshero