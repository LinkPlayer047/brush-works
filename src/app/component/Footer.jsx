"use client"
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='bg-[#00205b] w-full'>
        <div className='border-b border-b-white py-15'>
        <div className='mycontainer flex flex-col lg:flex-row gap-10 items-center justify-between'>
            <div className='lg:w-1/3 w-full flex justify-center lg:justify-start'>
                <img src="/footer-logo.svg" alt="Logo" />
            </div>
            <div className='w-1/3'>
                <footer className='flex flex-col items-center md:flex-row lg:gap-5 md:gap-10 justify-center gap-3 md:text-lg'>
                    <a href="/" className='text-white text-sm hover:text-[#c20e42]'>Home</a>
                    <a href="/about" className='text-white text-sm hover:text-[#c20e42]'>About</a>
                    <a href="/services" className='text-white text-sm hover:text-[#c20e42]'>Services</a>
                    <a href="/contact" className='text-white text-sm hover:text-[#c20e42]'>Contact</a>
                </footer>
            </div>
            <div className='w-1/3 flex justify-center lg:justify-end gap-5'>
            <a href="#"><FaInstagram className='text-white hover:text-[#c20e42]' /></a>
            <a href="#"><FaFacebookF className='text-white hover:text-[#c20e42]' /></a>
            <a href="#"><FaLinkedinIn className='text-white hover:text-[#c20e42]' /></a>
            <a href="#"><FaXTwitter className='text-white hover:text-[#c20e42]' /></a>
            </div>
        </div>
        </div>
        <div className='w-full py-5'>
            <p className='text-sm text-white flex items-center justify-center'>© Copyright 2025 GMS Agency</p>
        </div>
    </div>
  )
}

export default Footer