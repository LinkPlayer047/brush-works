import React from 'react'
import { FaStar } from "react-icons/fa";


const Clients = () => {
  return (
    <section className="bg-[#f1f6fa] py-20 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="text-center md:w-full max-w-3xl mb-20">
          <p className="uppercase text-sm tracking-widest text-gray-700">
            <span className="text-[#e71954] text-lg">//</span> Satisfied Clients
          </p>
          <h2 className="text-[#00205b] text-3xl md:text-5xl font-bold leading-snug mt-2">
            Hear from our Satisfied Customers
          </h2>
        </div>
        <div className='flex md:flex-row gap-5 flex-col'>
            <div className='bg-[#FFFFFF] md:w-1/3 p-10 rounded-2xl'>
            <div className='flex'>
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
            </div>
            <p className='pt-5 text-sm md:text-lg text-gray-600'>The team at BrushWorks was outstanding from start to finish. They helped us choose the perfect colors and executed the job flawlessly. Our home feels brand new, and we've received so many compliments from friends and family. Truly a top-notch service!</p>
            <div className='flex items-center gap-3 pt-5'>
                <div><img src="/01.png" alt="" className='h-15 w-15' /></div>
                <div>
                    <h3 className='text-black font-bold'>Jane Head</h3>
                </div>
            </div>
            </div>
            <div className='bg-[#FFFFFF] md:w-1/3 p-10 rounded-2xl'>
            <div className='flex'>
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
            </div>
            <p className='pt-5 text-sm md:text-lg text-gray-600'>We were amazed at the professionalism and efficiency of BrushWorks. They completed our entire house within the timeline promised, with incredible attention to detail. The quality of their work is exceptional, and we are thrilled with the results!</p>
            <div className='flex items-center gap-3 pt-5'>
                <div><img src="/02.png" alt="" className='h-15 w-15' /></div>
                <div>
                    <h3 className='text-black font-bold'>Mark Wood</h3>
                </div>
            </div>
            </div>
            <div className='bg-[#FFFFFF] md:w-1/3 p-10 rounded-2xl'>
            <div className='flex'>
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
                <FaStar className='text-[#e7194f] h-5 w-5' />
            </div>
            <p className='pt-5 text-sm md:text-lg text-gray-600'>Excellent service and beautiful results! The painters at BrushWorkswere courteous, tidy, and very skilled. They transformed our living room with such precision, it’s like a whole new space. We highly recommend them to anyone looking for quality painting services.</p>
            <div className='flex items-center gap-3 pt-5'>
                <div><img src="/03.png" alt="" className='h-15 w-15' /></div>
                <div>
                    <h3 className='text-black font-bold'>Tom Henry</h3>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Clients