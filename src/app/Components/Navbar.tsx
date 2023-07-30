'use client';
import styles from './navbar.module.css';
import React, { useEffect, useState } from 'react';
import { navApi } from '../constantAPI/api';
import Link from 'next/link';
import Image from 'next/image';
import {
  
  AiOutlineLinkedin,

  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineRight,

} from 'react-icons/ai';
import {motion,useScroll} from 'framer-motion'

import logo from '../../../public/logo-black-svg.svg';

const Navbar = () => {

// progress bar 
const {scrollYProgress} =useScroll()


  // const [isHover, setHover] = useState(false);
  const [nav, setNav] = useState(false);

  // for mobile sub menu
  const [subMenu, setSubMenu] = useState(false);

  // sub meanu handler if 2 times prees than equal to  null


    console.log("scrollYProgress:, ",scrollYProgress.get());

    

  return (
    <> 
    <motion.div className=' w-full h-1 z-[9999] bg-white sticky  top-0' style={{scaleX:scrollYProgress}}/>

    
      <motion.header 
        className="z-[100] lg:w-full w-full    sticky top-0 
 bg-neutral-950/90  text-normalText 
    overflow-hidden  md:py-3 lg:py-5
    "
      >
    
        <div className="relative  flex items-center justify-between h-full px-3 rounded-b-md  ">
          {/* left side  logo and name*/}
          <Link
            href={'/'}
            className="flex items-center justify-normal gap-x-2 md:gap-x-10 group/logo"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 md:group-hover/logo:scale-110 duration-200 ease-out">
              <Image
                className="w-full h-full object-cover object-center "
                src={logo}
                alt="logo"
              />
            </div>
            <h1
              className="text-4xl font-rem text-headingText font-bold
         md:group-hover/logo:scale-105 duration-200 ease-out
          "
            >
              Botonetics
            </h1>
          </Link>
          {/* left side till here */}

          {/* nav icon  */}
          <div
            onClick={() => setNav(!nav)}
            className=" cursor-pointer hover:text-headingText duration-200 ease-linear 
           pr-2 md:pr-5 lg:pr-20 text-2xl md:text-3xl lg:text-5xl"
          >
            {nav ? (
              <span className="text-headingText">
                {' '}
                <AiOutlineMenuFold />{' '}
              </span>
            ) : (
              <span>
                <AiOutlineMenuUnfold />
              </span>
            )}
          </div>
        </div>
      </motion.header>



      {/* nav bar items  */}
      <div
        id=""
        className={`navbar absolute top-0 right-0 left-0  w-full h-screen duration-300 ease-out 
    bg-black text-headingText z-30 
   ${nav ? 'max-w-full max-h-screen scale-100' : 'scale-50 max-h-0'} 
    `}
      >
        <ul
          className=" flex flex-col items-center justify-center gap-y-14  
      w-full h-full
      "
        >
          {navApi?.map(({ id, link , Icon, dropDown, title }) => {

            return (
              <li
                className={`${dropDown && 'flex items-center gap-x-2'}
          group/nav overflow-hidden 
          text-xl md:text-2xl lg:text-4xl font-semibold tracking-widest`}
                key={id}
              >
                {Icon ? (
                  <Link
                    className="flex items-end justify-center gap-x-4
               hover:text-blue-500 duration-200  "
                    href={link} 
                    target='_blank'
                    onClick={()=>setNav(!nav)}
                  >
                    <AiOutlineLinkedin size={50} />
                    <span>Linkedin</span>
                  </Link>
                ) : (
                  <>
                    <Link
                      onClick={() => {dropDown ? setSubMenu(!subMenu) :setNav(!nav)}}
                      className={`overflow-hidden`}
                      href={link}
                    >
                      {title}
                    </Link>
                    <span
                      className=" md:group-hover/nav:rotate-90 duration-200 ease-linear
            "
                    >
                      {dropDown && <AiOutlineRight />}
                    </span>
                  </>
                )}

                {/* sub nav items  */}
                {dropDown ? (
                  <div
                    className={` z-40 bg-neutral-800 overflow-hidden
max-w-[80%]  left-[10%] right-[10%]   max-h-0 w-full
flex flex-col items-center  justify-center gap-y-10
${subMenu ? 'max-w-[80%] max-h-full  ' : ''}

      md:group-hover/nav:max-w-[50%]  lg:group-hover/nav:max-w-[40%]
      md:group-hover/nav:max-h-[50%] 
      md:max-w-[50%]
      lg:max-w-[40%]
      md:h-full h-[65%]
      absolute bottom-0 md:left-[25%] md:right-[25%] lg:left-[30%] lg:right-[30%]
       duration-200 ease-linear rounded-t-lg
       `}
                  >
                    {dropDown.map(({ id, link, title }) => (
                      <div key={id}>
                        <Link
                        onClick={()=>setNav(!nav)}
                        
                        href={link}>{title}</Link>
                      </div>
                    ))}
                  </div>
                ) :null}
              </li>
            );
          })}
        </ul>

        {/* this is for mobile devie of sub menu if clicked outer part of sub meanu than sub menu closes */}
        {subMenu && (
          <div
            onClick={() => setSubMenu(!subMenu)}
            className="z-20 absolute top-0 w-full h-screen bg-transparent"
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
