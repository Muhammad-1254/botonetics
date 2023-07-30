import Image from 'next/image';
import React from 'react';
import featuredSVG from '../../../public/featuredSVG.svg';
const Featured = () => {
  return (
    <div id='Featured'
     className="max-w-[400px] h-full md:max-w-[800px] lg:max-w-[1600px] xl-max-w-[2300px] mx-auto gap-y-5 lg:gap-y-0  lg:px-10
    flex flex-wrap flex-col lg:flex-row  items-center justify-evenly   lg:justify-between 
    text-headingText overflow-hidden ">


      {/* text containre  */}

      <div className='max-w-[95%] lg:max-w-[45%]  '>

        <h1 className=' bg-neutral-950 bg-opacity-10 font-semibold 
        text-2xl md:text-4xl lg:text-5xl '>Connect,Orchestrate, <br/>Load and Consume</h1>
      </div>
      {/* text containre till here */}

      {/* featured image  */}
      <div className='max-w-[95%] lg:max-w-[55%]'>
      <Image className='w-full h-full object-cover object-center'
       width={1500} height={850}
       src={featuredSVG} alt='featuredImage'/>

      </div>

      {/* featured image till here */}
    </div>
  );
};

export default Featured;
