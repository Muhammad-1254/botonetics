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


// scaling while scrolling 

// let scroll = 0
// let zoomSpeed = 0.000375
// let maxZoom = 1 
// let minZoom = 0.75
// const [zoom, setZoom] = useState(1-zoomSpeed)
// const [lastScroll, setLastScroll] = useState(0)


// if(typeof window !== 'undefined'){


// window.addEventListener('scroll',()=>{
//  scroll = window.scrollY

//   if(zoom > minZoom && scroll > lastScroll){
//     setZoom(zoom - zoomSpeed)
//     setLastScroll(scroll)

//   }else{
//     setZoom(zoom + zoomSpeed)
//     setLastScroll(scroll)

//   }})}



 
  return (
    <div
      id="Home"
// style={{scale:zoom,}}
      className={`
       w-[90%] h-full fixed top-[10%] left-[5%]   text-normalText  -mt-10
    flex items-center justify-center mx-auto dark: `}
    >
      {/* <div className='w-'/> */}
      <div
        className="w-full h-[500px] rounded-[50px] shadow-[0px_0px_40px_-5px_]
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
            <h1 className="flex items-center text-3xl font-semibold lg:text-5xl text-headingText lg:tracking-wider">
              Botonetics
              <span className="px-4 text-3xl font-bold text-white lg:text-5xl">
                -
              </span>
              <h3 className="text-base text-normalText font-semibold pt-1.5 flex-shrink-0">
                {' '}
                Building Better
              </h3>
            </h1>

            <h3 className="pt-5 text-base font-semibold text-normalText">
              Business Byte by Byte.
            </h3>
          </div>
        </div>

        {/* logo  or image*/}
        {/* <div className="">
          <LogoAnimation size={logoSize} />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
