import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';

interface blogDataI {
  id: number;
  blogType: string;
  title: string;
  description: string;
  blogImageURL: StaticImageData;
  blogLink: string;
}
const BlogsCard: FC<blogDataI> = ({
  id,
  title,
  description,
  blogType,
  blogLink,
  blogImageURL,
}) => {


    // console.log("len :",description.length);
    
  return (
    <Link href={blogLink}>
    <div
      key={id}
      className="flex items-start justify-normal 
    w-full h-[250px] bordr border-normalText rounded-md cursor-pointer
    group"
    >

      <div className=" w-[40%] md:w-[35%] h-full rounded-l overflow-hidden">
        <Image
          className="h-full w-full object-cover object-center group-hover:scale-110 duration-200 ease-out"
          width={200}
          height={350}
          quality={75} 
          priority={false}
    
          src={blogImageURL}
          alt="blogImage"
        />
      </div>

      <div className='-z-10 bg-bg flex flex-col items-start justify-evenly 
       w-[60%] md:w-[65%] h-full  pl-5 -ml-2
      rounded-lg md:group-hover:border border-l-0 border-normalText md:duration-200 md:ease-linear
      border md:border-0 overflow-hidden
      '>
        <div className='md:group-hover:bg-neutral-800 md:group-hover:text-headingText md:duration-100 md:ease-linear 
         md:group-hover:rounded-md   
         px-4 py-0.5 mt-2 md:mt-4 md:mb-2 
          rounded-none border-b border-normalText'>
        <h3 className=' text-lg md:text-xl '>
            {blogType}
            </h3>
            </div>

        <h1 className='text-sm md:text-base text-headingText tracking-wide '>{title}</h1>
        <p className=' pt-1 md:pt-2 text-xs md:text-sm tracking-wide max-w-[90%] mx-auto'>{description.length <= 130 ? description: description + "..."}</p>
      </div>
    </div>
    </Link>
  );
};

export default BlogsCard;
