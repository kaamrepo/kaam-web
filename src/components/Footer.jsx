

import React from 'react'
import {Linkedin,Mail,Instagram,Twitter} from "lucide-react"


function Footer() {
  return (
    <div className="container flex">
      <div className="div1 flex bg-green-700 text-white w-full text-justify p-5">
        <div className="footer1 flex font-bold w-full  cursor-pointer">
          <button className='px-10 py-10  text-white h-10 text-justify '>Customer</button>
          <button className='px-10 py-10  text-white h-10 text-justify'>Resources</button>
          <button className='px-10 py-10  text-white h-10 text-justify'>Company </button>

        </div>

        
        <div className=" font-bold  w-full  cursor-pointer ">
          <button className='px-10 py-10 text-white text-justify'>Contact Us

            <p className='text-white text-s mt-5'>
              Email - test@gmail.com
 
            </p>

            <p className='text-white text-s  mt-5'>
              Phone No. 1234567890
            </p>

          </button>
        </div>
      </div>
      <div className="div2 bg-green-700 text-white w-full text-justify p-5">
        <div className='text-white text-lg font-bold  w-full pt-8  ml-28'>Follow Us On 
          <div className="icon flex mt-5 space-x-4">
        <a href='' className='cursor-pointer hover:bg-green-600 p-1'> <Linkedin /></a>
        <a href='' className='cursor-pointer hover:bg-green-600 p-1'> <Mail /></a>
        <a href='' className='cursor-pointer hover:bg-green-600 p-1'> <Instagram /></a>
        <a href='' className='cursor-pointer hover:bg-green-600 p-1'> <Twitter /></a>
        </div>
        </div>
        
        <div class="text-white text-lg font-bold  w-full pt-32 ml-28">
          Copyright © 2024 KaamPe. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer;
