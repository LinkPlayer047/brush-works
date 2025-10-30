import React from 'react'

const Herocontact = () => {
  return (
    <div>
      <div className="mycontainer pt-30 md:max-h-screen max-h-screen flex flex-col justify-between gap-10 mix-h-screen md:flex-row">
        <div className="w-full pr-10 md:w-1/2">
          <p className="text-black uppercase">
            <span className="text-[#e71954]">//</span> Contact Us
          </p>
          <h1 className="text-[#00205b] text-4xl mt-5 md:text-5xl lg:text-6xl lg:font-bold font-bold">
            We are Here to Assist You
          </h1>
          <p className="text-sm md:text-lg pt-5 lg:pt-10">Whether you have questions, need a quote, or want to schedule a consultation, we’re just a call or message away.</p>
        </div>
        <div className="w-full md:w-1/2">
            <img src="/hero-contact.jpg" alt="" className="rounded-2xl z-40" />
        </div>
      </div>
    </div>
  )
}

export default Herocontact