import React from "react";

const Form = () => {
  return (
    <div className="bg-[#f1f6fa] w-full py-20 md:py-50 overflow-hidden -mt-20 z-20">
      <div className="mycontainer flex flex-col md:flex-row items-center justify-between gap-16 relative">
        <div className="md:w-1/2 rounded-2xl lg:p-10 p-5 mt-10 bg-white w-full">
        <p className="text-sm font-semibold text-gray-900">Your Name*</p>
        <input type="text" className="rounded-lg mt-3 w-full p-3 border border-gray-300" />
        <p className="text-sm font-semibold text-gray-900 mt-5">Your Email*</p>
        <input type="email" className="rounded-lg mt-3 w-full p-3 border border-gray-300" />
        <p className="text-sm font-semibold text-gray-900 mt-5">Services you are looking for*</p>
        <input type="email" className="rounded-lg mt-3 w-full p-3 border border-gray-300" />
        <p className="text-sm font-semibold text-gray-900 mt-5">Your Message*</p>
        <textarea rows="5" className="border w-full mt-3 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#00205b] transition" required>
        </textarea>
        <button className="mt-10 rounded-lg bg-[#e7194f] text-white font-semibold hover:bg-[#c20e42] py-3 px-5">Submit</button>
        </div>
        <div className="md:w-1/2 w-full p-3">
          <h2 className="text-[#00205b] text-xl md:text-3xl font-bold">
            Expect a Response from our Representative in 1-2 Business Days!
          </h2>
          <img
            src="/contact-us.jpg"
            alt="contact us"
            className="rounded-2xl mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
