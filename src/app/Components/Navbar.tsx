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
import { shapes } from '../constantAPI/shadowCirlce';
import {colorPalleteWise , colors_array,randowColors } from '../constantAPI/colors';

const Navbar = () => {

  // this is for random colors in shadow or bg 
  // let windowWidth = ""
  // if(typeof window != 'undefined'){
  //    windowWidth = window.innerWidth.toFixed(0)

  // }else{
  //  windowWidth = "1920"
  // }
  // const max = parseInt(windowWidth) 
  // const min = 0
  // // console.log("max:",typeof parseInt(max));
  


  // const [color, setColor] = useState<string>(colors_array[0])
  // const [colorIndex, setColorIndex] = useState<number>(0)
  // const [offsetX, setOffsetX] = useState<number>(0)  /// offsetY is fixed b/c height of container
  // const [incX,setIncX] = useState(true); //width++ else width set to zero



  // const colorsArrayLength = colors_array.length
  // setTimeout(()=>{
  
  //       if(colorIndex < colorsArrayLength ){
  //         setColorIndex(colorIndex + 1)
  //       }else{
  //         setColorIndex(0)
  //       }
        
      
  // },200)

  // setTimeout(()=>{
 
  //   if(offsetX < max ){
  //     setOffsetX(offsetX +35)
  //   }else{
  //     setOffsetX(0)
    
  //   }

    

  // },
  // 80)

  

  
  
    // randdom colrs till here 




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
      className="z-50 lg:w-full w-full h-16 lg:h-20  text-white sticky top-0 
    border-b border-gray-500 bg-black bg-opacity-40
    "
    >

      {/* for navbar Shadow  */}
      {/* <div style={{left:`${offsetX-40}px`,backgroundColor:`${colors_array[colorIndex!+1]}`,transitionDuration:`${offsetX == 0 ? "0s":"500ms"}`}}
       className='  z-30 w-10  h-[60px] lg:h-[76px] my-auto  absolute top-0  rounded-l duration-200 opacity-25 shadow-lg '  />
<div style={{left:`${offsetX}px`,backgroundColor:`${colors_array[colorIndex]}`,transitionDuration:`${offsetX == 0 ? "0s":"500ms"}`}}
       className='  z-30 w-10  h-[60px] lg:h-[76px] my-auto  absolute top-0   duration-200 opacity-25 shadow-lg'  />
<div style={{left:`${offsetX+40}px`,backgroundColor:`${colors_array[colorIndex!-1]}`,transitionDuration:`${offsetX == 0 ? "0s":"500ms"}`,}}
       className='  z-30 w-10  h-[60px] lg:h-[76px] my-auto  absolute top-0  rounded-r duration-200 opacity-25 shadow-lg'  /> */}


      <div className="z-40 relative hidden lg:flex items-center justify-between h-20 px-10">
        <div className="flex items-center justify-normal gap-x-6 ">
          <span>LOGO</span>
          <h1 className="text-4xl font-rem font-bold">Botenics</h1>
        </div>
        <nav>
          <ul className="flex items-center justify-normal gap-x-5">
            {navApi.map((item, i) => {
              return (
                <li
                  className="group 
                           text-xl font-mono font-bold capitalize"
                  key={item.id}
                >
                  <Link href={item.link}>{item.title}</Link>

                  <div
                    className=" max-h-0  max-w-full group-hover:max-h-80 group-hover:pt-10
                    overflow-hidden    

                             absolute  top-20 left-0 right-0
                             bg-slate-200/95 duration-[250ms]
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
        <div className=" ">
          <h1 className="text-4xl font-rem font-bold">Botenics</h1>
        </div>

        {/* icons  */}
        <div onClick={() => setNav(!nav)} className="text-2xl">
          {nav ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </div>

        {/* nav side bar  */}
        <div
          className={`z-40 absolute top-16 left-0 
          ${
            nav ? 'max-w-full' : 'max-w-0'
          } w-[80%] md:w-[40%]  h-[80vh]   overflow-auto duration-300 bg-slate-200 
          rounded-br-lg `}
        >
          <div>
            <ul className="flex flex-col items-start justify-start mt-10 mx-2 gap-y-5 ">
              {navApi.map((item, index) => (
                <li key={item.id} className="">
                  <div
                    className={`${
                      subMenu == index ? ' bg-slate-400/50' : 'bg-slate-300'
                    }  py-1 px-3 rounded-r border-l-4 border-darkPrimary  `}
                  >
                    <Link href={item.link} className="">
                      <div
                        className="flex items-center justify-between w-60 
                       capitalize font-sans font-semibold tracking-wider
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
                  bg-slate-300 border-l-4 border-primaryColor `}
                  >
                    {item.dropDown?.map((subItem, index) => {
                      return (
                        <li
                          className={` ${index == 0 ? 'pt-5' : 'pt-0'}
                      ${item.dropDown?.length - 1 == index ? 'pb-5' : 'pb-0'}
                       capitalize  pl-4 text-lg font-semibold text-gray-600   `}
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
