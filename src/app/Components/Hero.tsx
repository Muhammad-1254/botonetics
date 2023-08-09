'use client';

import React, { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

const Hero = () => {

// media query for logo 
  let WindowWidth = 0;
  let logoSize = 0;
  if (typeof window !== 'undefined') {
    WindowWidth = window.innerWidth;
  }
  if (WindowWidth >= 1600) {
    logoSize = 800;
  } else if (WindowWidth >= 1200) {
    logoSize = 500;
  } else if (WindowWidth >= 650) {
    logoSize = 360;
  } else if (WindowWidth >= 340) {
    logoSize = 300;
  }

// media query for logo  till here

  
  
 
  return (
    <div
      id="Home"
      style={{}}
      className=" w-[90%] text-normalText h-screen -mt-10
    flex items-center justify-center mx-auto "
    >
      {/* <div className='w-'/> */}
      <div
<<<<<<< Updated upstream
        style={{
          boxShadow: `${offsetX}px ${offsetY}px 50px -30px ${color}`,
        }}
        className="w-full h-[500px] rounded-[50px] border-8 border-neutral-950
=======
        className="w-full h-[500px] rounded-[50px] border-8 border-neutral-950 
>>>>>>> Stashed changes
       flex flex-col lg:flex-row items-start lg:items-center justify-evenly px-2 lg:px-20"
      >
        {/* text content  */}
        <div
          className=" w-full md:w-[80%] lg:w-[60%]
        flex flex-col items-start  gap-y-5  mx-auto"
        >
          {/* baar  */}
          <div className="w-20 h-1 bg-secondaryColor bg-neutral-800 " />

          <div className="pt-10 max-w-[350px] md:max-w-[500px] lg:max-w-[750px] ">
            <h1 className="flex items-center text-3xl  lg:text-5xl  text-headingText font-semibold lg:tracking-wider">
              Botonetics
              <span className="text-3xl lg:text-5xl text-white font-bold px-4">
                -
              </span>
              <h3 className="text-base text-normalText font-semibold pt-1.5 flex-shrink-0">
                {' '}
                Building Better
              </h3>
            </h1>

            <h3 className="pt-5 text-base text-normalText font-semibold">
              Business Byte by Byte.
            </h3>
          </div>
        </div>

        {/* logo  or image*/}
<<<<<<< Updated upstream
        <div className="mx-auto w-[200px] md:w-[300px] lg:w-[500px] ">
          <Image
            className=" w-full object-cover object-center"
            src={logo}
            alt=""
          />
        </div>
=======
        {/* <div className=" ">
          <LogoAnimation size={logoSize} />
        </div> */}
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Hero;
