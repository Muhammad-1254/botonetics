'use client';
import React from 'react';
import { whyChooseUsAPI } from '../constantAPI/api';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const WhyChooseUs = () => {
  return (
    <div
      id="WhyChooseUs"
      className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] min-h-screen md:min-h-[75vh] lg:min-h-[50vh]:  mx-auto  mt-20 py-20 px-2 
       flex flex-col items-center justify-center overflow-x-hidden
    text-normalText "
    >
      {/* main heading  */}
      <div
        className="
        text-headingText text-2xl md:text-4xl lg:text-5xl tracking-wider capitalize font-bold md:font-semibold  "
      >
        {/* <h1>{whyChooseUsAPI.heading}</h1> */}
        <h1>Why choose Botonetics</h1>
        <div className="w-full mt-1 h-1 rounded-full bg-normalText mx-auto" />

      </div>

      {/* main heading description or excript  */}
      {/* <div className="text-headingText text-sm md:text-base font-semibold tracking-wider py-10 px-4 w-full text-center flex-shrink-0">
        <h3>{whyChooseUsAPI.excript}</h3>
      </div> */}

      {/* content  */}
      <div>
        {/* top line   */}
        {/* <div className="w-[90%] h-1 rounded-full bg-normalText mx-auto" /> */}

        {/* icons and trust portion   */}
        {/* <div className=" flex flex-wrap  items-center  lg:justify-evenly  gap-8 mt-5 mx-auto px-4">
          {whyChooseUsAPI.trustAndNetworthy.map(({ id, title }) => (
            <div className="flex items-center gap-x-4  mx-auto " key={id}>
              <span className="text-headingText text-4xl md:text-5xl lg:text-6xl ">
                <AiOutlineCheckCircle />
              </span>
              <strong className="text-xl md:text-2xl lg:text-3xl">
                {title}
              </strong>
            </div>
          ))}
        </div> */}

        {/* some desc  */}

        {/* <div className=" text-sm  lg:text-xl max-w-[95%] lg:max-w-[80%] mx-auto text-center text-ellipsis mt-10">
          {whyChooseUsAPI.description}
        </div> */}
<div className='max-w-[90%] md:max-w-[60%] lg:max-w-[40%] mx-auto px-5 mt-10
text-sm md:text-base lg:text-lg'>


          <p className=''>
            

          </p>
        <p className=''>
       
          {/* Welcome to Botonetics, where our name signifies more than just letters
         &nbsp;{"–"}&nbsp;it embodies our unwavering dedication. We transcend mere service
          provision; we craft dynamic solutions that adapt alongside your
          ever-evolving requirements. Our expertise extends beyond software
          development; we architect complete digital ecosystems. Instead of
          following trends, we establish new benchmarks. */}
        </p>
        <br/>
       
</div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
