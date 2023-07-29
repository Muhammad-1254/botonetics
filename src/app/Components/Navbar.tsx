'use client';

import React, { useEffect, useState } from 'react';
import { navApi } from '../constantAPI/api';
import Link from 'next/link';
import Image from 'next/image';
import {
  AiOutlineArrowRight,
  AiOutlineDeploymentUnit,
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineMenu,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineRight,
  AiOutlineUp,
} from 'react-icons/ai';

const Navbar = () => {



 




  // const [isHover, setHover] = useState(false);
  const [nav, setNav] = useState(false);

  // for mobile sub menu
  const [subMenu, setSubMenu] = useState<null | number>(null);

  // sub meanu handler if 2 times prees than equal to  null
  const subMenuHandler = (index: number) => {
    if (subMenu == index) {
      setSubMenu(null);
    } else {
      setSubMenu(index);
    }
    return;
  };

  return (
    <>
    
    <header
      className="z-50 lg:w-full w-full h-16 lg:h-20   sticky top-0 
    border-b border-white bg-black bg-opacity-40 text-normalText group/lgHoverborderNone
    "
    >

 

      <div className="z-40 relative hidden lg:flex items-center justify-between h-20 px-10">
        <Link href={"/"} className="flex items-center justify-normal gap-x-6 ">
          <span>LOGO</span>
          <h1 className="text-4xl font-rem font-bold text-headingText">Botonetics</h1>
        </Link>
        <nav>
          <ul className="flex items-center justify-normal gap-x-10 ">
            {navApi.map((item, i) => {
              return (
                <li
                  className=" group  hover:text-headingText duration-200
                           text-xl font-mono font-bold capitalize"
                  key={item.id}
                >
                  <Link  className=' z-40 relative' href={item.link}>{item.title}
                    <div className='absolute -top-[3px] w-[120%] h-[140%] -right-2 rounded group-hover:bg-neutral-700 -z-10 duration-200'/>
                  </Link>
                  <div
                    className=" max-h-0  max-w-full group-hover:max-h-80 group-hover:pt-10 
                    overflow-hidden    
                     group-hover:border-2 group-hover:border-t-0  rounded border-dashed
                             absolute  top-20 left-0 right-0
                             bg-bg duration-[250ms]
                             flex  flex-row items-start justify-between   
                             
                             "
                  >
                    {/* Image and title  */}
                    <div className="relative w-[60%] pb-10 ">
                      <Image
                        width={400}
                        height={280}
                        className=" w-[75%] h-40 mx-auto object-cover object-center
                        rounded  "
                        src={item.featuredImage}
                        alt="featuredImage"
                      />

                      <div className="z-40 absolute  pb-10 bottom-0 left-[20%]  right-[20%] text-red-500  ">
                        <h3 className="text-base font-rem mb-4">
                          {item.featuredImageTitle}
                        </h3>
                      </div>
                    </div>

                    {/* sub nav links  */}
                    <div className="w-[40%] ">
                      <ul className="flex flex-wrap items-center  mr-4 gap-4">
                        {item.dropDown.map((subItem) => (
                          <li
                            className="bg-slate-300/50 hover:bg-slate-300/90 duration-200 rounded "
                            key={subItem.id}
                          >
                            <Link
                              className=" px-3 py-0.5 font-sans font-medium text-lg"
                              href={subItem.link}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>



      {/* for mobile devies */}
      <div className="relative lg:hidden flex items-center justify-between h-full px-3 rounded-b-md  ">
        <Link href={"/"} className=" ">
          <h1 className="text-4xl font-rem text-headingText font-bold">Botonetics</h1>
        </Link>

        {/* icons  */}
        <div onClick={() => setNav(!nav)} className="text-2xl">
          {nav ?
          <span className='text-headingText'> <AiOutlineMenuFold /> </span>: 
          <span ><AiOutlineMenuUnfold /></span>}
        </div>

        {/* nav side bar  */}
        <div
          className={`z-40 absolute top-16 left-0 
          ${
            nav ? 'max-w-full border-b-2 border-r-2 border-white border-opacity-100 ' : 'max-w-0'
          } w-[80%] md:w-[40%]  h-[80vh]   overflow-auto duration-300 bg-bg 
          rounded-br-lg `}
        >
          <div>
            <ul className="flex flex-col items-start justify-start mt-10 mx-2 gap-y-5 ">
              {navApi.map((item, index) => (
                <li key={item.id} className="">
                  <div
                    className={`${
                      subMenu == index ? ' bg-neutral-900' : 'bg-neutral-800'
                    }  py-1 px-3 rounded-r border-l-4   `}
                  >
                    <Link href={item.link} className="">
                      <div
                        className="flex items-center justify-between w-60 
                       capitalize font-sans font-semibold tracking-wider text-headingText
                        "
                      >
                        {item.title}
                        <span
                          className={``}
                          onClick={() => subMenuHandler(index)}
                        >
                          {subMenu == index ? (
                            <AiOutlineUp />
                          ) : (
                            <AiOutlineDown />
                          )}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* sub container  */}
                  <ul
                    className={`${subMenu == index ? 'max-h-full' : 'max-h-0'}
                  ${subMenu == index ? 'max-w-full' : 'max-w-0'} 
                    overflow-hidden 
                  flex flex-col items-start justify-normal gap-y-4    rounded-b-md duration-500
                  bg-neutral-800 border-l-4 border-white `}
                  >
                    {item.dropDown?.map((subItem, index) => {
                      return (
                        <li
                          className={` ${index == 0 ? 'pt-5' : 'pt-0'}
                      ${item.dropDown?.length - 1 == index ? 'pb-5' : 'pb-0'}
                       capitalize  pl-4 text-lg font-semibold    `}
                          key={item.id}
                        >
                          <Link href={subItem.link}>{subItem.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* navbar side bar  tiil here*/}

        {/* side bar neibour if cliack than side bar off  */}

        <div
          onClick={() => setNav(!nav)}
          className={`absolute top-0 right-0
         ${nav ? 'w-screen' : 'w-0'}  h-screen bg-transparent z-20`}
        />
      </div>
    </header>

  


    </>  );
};

export default Navbar;
