"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", service: "", message: "" });
    } else {
      setStatus("❌ Failed to send message!");
    }
  };

  return (
    <div className="bg-[#f1f6fa] w-full py-20 md:py-50 overflow-hidden -mt-20 z-20">
      <div className="mycontainer flex flex-col md:flex-row items-center justify-between gap-16 relative">
        <div className="md:w-1/2 rounded-2xl lg:p-10 p-5 mt-10 bg-white w-full">
          <form onSubmit={handleSubmit}>
            <p className="text-sm font-semibold text-gray-900">Your Name*</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-lg mt-3 w-full p-3 border border-gray-300"
              required
            />
            <p className="text-sm font-semibold text-gray-900 mt-5">Your Email*</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg mt-3 w-full p-3 border border-gray-300"
              required
            />
            <p className="text-sm font-semibold text-gray-900 mt-5">
              Services you are looking for*
            </p>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="rounded-lg mt-3 w-full p-3 border border-gray-300"
              required
            />
            <p className="text-sm font-semibold text-gray-900 mt-5">Your Message*</p>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="border w-full mt-3 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#00205b] transition"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-10 rounded-lg bg-[#e7194f] text-white font-semibold hover:bg-[#c20e42] py-3 px-5"
            >
              Submit
            </button>
            <p className="mt-3 text-sm text-gray-700">{status}</p>
          </form>
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
