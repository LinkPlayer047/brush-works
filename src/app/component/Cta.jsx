import React from 'react'
import { FaPaintRoller } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Cta = () => {
  return (
    <div>
    <div className='w-full relative h-150 bg-cover bg-center' style={{ backgroundImage: "url('/footer-bg.jpg')"}}>
        <div className='absolute inset-0 bg-gray-900 opacity-50'></div>
        <div className='mycontainer z-20 relative flex flex-col items-center text-center justify-center h-full gap-5'>
            <div className='p-5 border-2 border-white rounded-full'>
                <FaPaintRoller className='text-white h-5 w-5' />
            </div>
            <h2 className="text-white text-3xl md:w-[70%] md:text-5xl font-bold leading-snug mt-2">
            Ready to Transform your Space with a Fresh Coat of Paint?
          </h2>
          <button className="rounded bg-[#e7194f] hover:bg-[#c21645] transition-all duration-300 flex items-center gap-2 text-white font-semibold px-6 py-3 text-sm md:text-base">
               Get a Free Quote <IoIosArrowDroprightCircle className="text-lg" />
          </button>
        </div>
    </div>
    </div>
  )
}

export default Cta