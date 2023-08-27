'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const formData = {
    name: '',
    email: '',
    contactNumber: '',
    comapany: '',
    subject: '',
    message: '',
  };
  const [user, setUser] = useState(formData);
  const [btnDisabeld, setBtnDisabled] = useState(true);

  const checkFormData = () => {
    if (
      user.name.length > 0 &&
      user.email.length > 0 &&
      user.message.length > 0 &&
      user.contactNumber.length > 0
    ) {
      setBtnDisabled(false);
      return true;
    } else {
      setBtnDisabled(true);
      return false;
    }
  };
  useEffect(() => {
    // console.log('use Effect run');
    checkFormData();
  }, [user]);

  const buttonHandler = async () => {
    try {
      if (checkFormData()) {
        await axios.post('/api/email', user);
        setUser(formData);
        alert('Email Successfully Sent!');
      } else {
        alert('Input the required fields!');
        // console.log('alert');
      }
    } catch (error: any) {
      // console.log('error: ', error);
    }
  };

  return (
    <div
      id="ContactUs"
      className="w-full flex   flex-col lg:flex-row items-baseline lg:gap-x-10 mx-auto px-4 mt-20 py-10 mb-28
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
          E-mail Us
        </h1>

        <div className="bg-neutral-900  p-10 rounded-[50px]">
          {/* input elements  */}
          <div
            className="flex flex-col items-center justify-evenly gap-4  
text-base "
          >
            <input
              name="name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
              className="p-1 w-full md:w-[70%] placeholder:text-center placeholder:text-xs placeholder:md:text-sm rounded-t"
              type="text"
              placeholder="Your Name*"
              required
            />

            <input
              name="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              className="w-full md:w-[70%] p-1 placeholder:text-center placeholder:text-xs placeholder:md:text-sm"
              type="email"
              placeholder="E-mail*"
              required
            />
            <input
              name="contactNumber"
              onChange={(e) =>
                setUser({ ...user, contactNumber: e.target.value })
              }
              value={user.contactNumber}
              className="p-1 w-full md:w-[70%] placeholder:text-center placeholder:text-xs placeholder:md:text-sm"
              type="tel"
              placeholder="+92-333-3333333"
              required
            />
            <input
              name="company"
              onChange={(e) => setUser({ ...user, comapany: e.target.value })}
              value={user.comapany}
              className="p-1 w-full md:w-[70%] placeholder:text-center placeholder:text-xs placeholder:md:text-sm"
              type="text"
              placeholder="Company"
            />
            <input
              name="subject"
              onChange={(e) => setUser({ ...user, subject: e.target.value })}
              value={user.subject}
              className="p-1 w-full md:w-[70%] placeholder:text-center placeholder:text-xs placeholder:md:text-sm"
              type="text"
              placeholder="subject"
            />
            <textarea
              name="message"
              onChange={(e) => setUser({ ...user, message: e.target.value })}
              value={user.message}
              className="p-1 w-full md:w-[70%] placeholder:text-center placeholder:text-xs placeholder:md:text-sm 
              h-28 rounded-b"
              placeholder="Tell us about your project"
            />
          </div>

          {/* input elements till here  */}

          {/* privacy policy  */}
          <div className="flex items-baseline justify-evenly gap-x-2 mt-5 text-xs  mx-auto max-w-[90%] md:max-w-[60%] ">
            <input name="privacyPolicy" type="checkbox" required />
            <p className="-mt-1">
              By sending this form I confirm that I have read and accept
              Botonetics &nbsp;
              <span className="text-headingText text-sm underline">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* send button  */}
          <div
            className="flex items-center justify-center mx-auto md:max-w-[50%]
           text-headingText md:text-normalText md:hover:text-headingText  bg-black
           md:duration-200 cursor-pointer
            mt-10 rounded-lg"
          >
            <button
              onClick={buttonHandler}
              className={`
             p-2 font-semibold tracking-wider`}
            >
              SEND
            </button>
          </div>
        </div>
      </div>

      {/* right  */}
      {/* <div
        className="flex-1 flex flex-col justify-evenly items-start pt-14 lg:pt-0 
        text-normalText " 
      >
        */}
      {/* heading  */}
      {/* <h1 className="text-headingText text-start text-lg md:text-xl lg:text-2xl">
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
           <div className='-z-10 absolute w-1 top-[7%]  h-[80%] left-[18px]  my-auto   bg-normalText'/> */}

      {/* square box bars  */}
      {/* <div className="absolute w-1  h-[80%] bg-headingText  top-0 " /> */}

      {/* </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
