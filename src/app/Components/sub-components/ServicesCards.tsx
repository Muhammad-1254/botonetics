"use client"
import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';
import servicesImg from '../../../../public/img1.jpg';


interface apiI{
  id:number,
  title:string,
  description:string,
  link:string,
  image:StaticImageData
}



const ServicesCards:FC<apiI> = ({id,title,description,image,link}) => {


  return (
    <>
    <div 
    
    className=" max-w-[360px]   mx-auto  rounded-lg
    flex flex-col items-center justify-start mt-20 text-normalText
    overflow-hidden duration-200 cursor-pointer
    group ">
      <div className=' relative w-full h-[55%] overflow-hidden'>

{/* image darker */}

<div className='w-full h-full absolute top-0 left-0 bg-neutral-950/10 md:bg-neutral-950/30
 md:group-hover:bg-neutral-950/0  rounded-t-lg'/>
      <Image
      className='w-full h-full object-cover object-center
      md:group-hover:scale-110 md:duration-200 ease-in'
        width={300}
        height={180}
        priority
        src={image}
        alt="service-img"
      />
      </div>

      <div className='flex flex-col bg-bg items-center justify-start gap-y-3 w-full h-[45%] 
      rounded-lg rounded-t-none 
         '>
           {/* border-b border-r border-l */}
        {/* main heading */}
        <h1 className='text-headingText text-xl p-4'>{title}</h1>

        {/* description  */}
        <h3 className='  duration-200 px-3 text-center pb-3'>
         {description}
        </h3>
      </div>
      
    </div>
    
    
    </>


  );
};

export default ServicesCards;
