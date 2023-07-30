'use client';

import React from 'react';
import { ContactUsAPI } from '../constantAPI/api';
import { AiOutlineBars, AiOutlineLine } from 'react-icons/ai';

const ContactUs = () => {
  return (
    <div
    id='ContactUs'
      className="w-full flex  flex-col lg:flex-row items-baseline lg:gap-x-10 mx-auto px-4 mt-20 py-10 mb-28
    text-normalText "
    >
      {/* left  */}
      <div
        className="flex-1 flex flex-col items-center justify-evenly mx-auto 
        "
      >
        <h1
          className="text-headingText font-bold md:font-semibold text-lg md:text-xl lg:text-2xl capitalize 
py-4 tracking-widest"
        >
          Contact us
        </h1>

        <div className="bg-neutral-900  p-10 rounded-lg">
          {/* input elements  */}
          <div
            className="flex flex-col items-center justify-evenly gap-4  
text-base "
          >
            <input
              className="p-1 placeholder:text-center placeholder:text-xs placeholder:md:text-sm rounded-t"
              type="text"
              placeholder="First Name*"
              required
            />
            <input
              className="p-1 placeholder:text-center placeholder:text-xs placeholder:md:text-sm"
              type="text"
              placeholder="Last Name*"
              required
            />
            <input
              className="p-1 placeholder:text-center placeholder:text-xs placeholder:md:text-sm"
              type="email"
              placeholder="E-mail*"
              required
            />
            <input
              className="p-1 placeholder:text-center placeholder:text-xs placeholder:md:text-sm"
              type="number"
              placeholder="+92-333-3333333"
              required
            />
            <input
              className="p-1 placeholder:text-center placeholder:text-xs placeholder:md:text-sm"
              type="text"
              placeholder="Company"
            />
            <textarea
              className="p-1 placeholder:text-center placeholder:text-xs placeholder:md:text-sm 
        h-28 w-[81%] md:w-[44%] rounded-b"
              placeholder="Tell us about your project"
            />
          </div>

          {/* input elements till here  */}


          {/* privacy policy  */}
          <div className="flex items-baseline justify-evenly gap-x-2 mt-5 text-xs  mx-auto max-w-[90%] md:max-w-[60%] ">
            <input  type='checkbox'  required/>
            <p className='-mt-1'>
              By sending this form I confirm that I have read and accept
              Botonetics &nbsp;
              <span className="text-headingText text-sm underline">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* send button  */}
          <div className="flex items-center justify-center mx-auto md:max-w-[50%]
           text-headingText md:text-normalText md:hover:text-headingText  bg-black
           md:duration-200 cursor-pointer
            mt-10 rounded-lg">
            <button className="p-2 font-semibold tracking-wider" type="button">
              SEND
            </button>
          </div>
        </div>
      </div>

      {/* right  */}
      <div
        className="flex-1 flex flex-col justify-evenly items-start pt-14 lg:pt-0 
        text-normalText "
      >
        {/* heading  */}
        <h1 className="text-headingText text-start text-lg md:text-xl lg:text-2xl">
          WHAT{"'"}S NEXT?
        </h1>

        <div className="z30 relative flex flex-col items-center justify-normal mx-auto mt-5 gap-4 ">
          {ContactUsAPI.map(({ id, descripton }) => (
            <div key={id} className="flex items-center  gap-x-4 ">

              <div className=" w-10 h-10 rounded-xl bg-headingText  " />
             
        




              <p className="w-[75%] text-start text-sm md:text-base ">
                {descripton}
            
              </p>
            </div>
            
          ))}
           <div className='-z-10 absolute w-1 top-[7%]  h-[80%] left-[18px]  my-auto   bg-normalText'/>

          {/* square box bars  */}
          {/* <div className="absolute w-1  h-[80%] bg-headingText  top-0 " /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
