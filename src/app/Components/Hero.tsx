'use client';

import React, { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

const Hero = () => {

// const {scrollYProgress} = useScroll()
// console.log("scrollYProgress: ",scrollYProgress);


// media query for logo 
  let WindowWidth = 0
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

      className={`
       w-[90%] h-full fixed top-[10%] left-[5%]   text-normalText  -mt-10
    flex items-center justify-center mx-auto `}
    >
      {/* <div className='w-'/> */}
      <div
        className="w-full h-[500px] rounded-[50px] shadow-[0px_0px_40px_-5px_]
       flex flex-col lg:flex-row items-start lg:items-center justify-evenly px-2 lg:px-20"
      >
        {/* text content  */}
        {/* <div
          className=" w-full md:w-[80%] lg:w-[60%]
        flex flex-col items-start  gap-y-5  mx-auto"
        > */}
       

          {/* <div className="flex flex-col md:flex-row items-center mx-auto  pt-10 max-w-[350px] md:max-w-[500px] lg:max-w-[750px] ">
            <h1 className="flex items-center text-3xl font-semibold lg:text-5xl text-headingText lg:tracking-wider">
              Botonetics
              <span className="hidden md:inline-block px-4 text-3xl font-bold text-white lg:text-5xl">
                -
              </span>
             
            </h1>
            
            <h3 className=" mt-5  text-base font-semibold text-white/90 ">
             Building Better Business 
             <span className='inline-block bg-slate-600 rounded-sm mx-1 px-2'>
              Byte by Byte. 
              
              </span>
            </h3>

          </div> */}

        {/* </div> */}
<h3 className="max-w-[95%] overflow-hidden text-center mt-5  text-5xl md:text-6xl font-semibold text-white/90
 ">
             Building
              Better Businesses&nbsp; 
              <br className='lg:hidden'/>
             <span className=' inline bg-slate-600 rounded-sm lg:mx-1 lg:px-2'>
              Byte by Byte
              
              </span>
              . 
            </h3>

      </div>
    </div>
  );
};

export default Hero;
