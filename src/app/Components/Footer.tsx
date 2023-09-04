import Link from 'next/link';
import React from 'react';


const Footer = () => {
  return (

    <div
      className="  max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] h-full 

    text-normalText"
    >
      {/* upper image portions  */}
      <div
        className="flex flex-col items-start justify-evenly  h-full w-full pl-8 md:pl-24 
            text-headingText tracking-wider"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold -mb-24">
          Get In Touch
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl -mb-28 ">
          Let{"'"}s Build Together
        </h1>

        <div className="bg-neutral-900 rounded cursor-pointer 
         px-20 py-2 -mb-32 ">
          <Link className="" href={''}>
            Talk To Us
          </Link>
        </div>
      </div>

      {/*  image cover  */}
      <div className='-z-10 absolute top-0 
      bg-neutral-950/50  w-full h-full'/>

      {/* upper image portions till here  */}

      {/* bottom part */}

      <div
        className="flex items-center justify-center md:justify-end   md:pr-24 py-4
        border-b-2
        "
      >
 
    

   
        <div className=' flex items-center justify-center py-4  md:justify-end md:pr-24'>

        <p className="text-xs md:text-base ">© 2023 Botonetics.&nbsp;</p>
        <strong className="text-headingText tracking-widest">
          Privacy Policy
        </strong>

      
      </div>
 

    </div>
    </div>

  );
};

export default Footer;
