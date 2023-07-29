'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../public/temp.svg'
import { shapes } from '../constantAPI/shadowCirlce';
// import { colorPalleteWise as colors_array,  } from '../constantAPI/colors';
// import { randowColors as colors_array,  } from '../constantAPI/colors';
import { colors_array,  } from '../constantAPI/colors';


const Hero = () => {


  let min =-50
  let max = 50
  
  const [offsetX,setOffsetX] =useState<number>(shapes.square.x)
  const [offsetY,setOffsetY] =useState<number>(shapes.square.y)
  const [color,setColor] =useState(colors_array[0])
  const [colorIndex,setColorIndex] =useState(0)
  const [incX,setIncX] =useState(false)
  const [incY,setIncY] =useState(false)



  // for x and y direction indicators 
  

    
  setTimeout(()=>{
  
    if(colorIndex < colors_array.length ){
      setColor(colors_array[colorIndex])

      setColorIndex(colorIndex+1)
    }else{
      setColorIndex(0)
      setColor(colors_array[colorIndex])
      
    }
    // console.log(color);

    
  },250)

    setTimeout(()=>{
     

       if(incX){
        if(offsetX < max ){
          setOffsetX(offsetX +1)
         }else{
          setOffsetX(offsetX - 1)
          setIncX(!incX)
         }
        }else if(offsetX > min){
          setOffsetX(offsetX - 1)
        }else{
          setOffsetX(offsetX + 1)
          setIncX(!incX)
        }
        if(incY){
          if(offsetY < max ){
            setOffsetY(offsetY +1)
           }else{
            setOffsetY(offsetY - 1)
            setIncY(!incY)
           }
          }else if(offsetY > min){
            setOffsetY(offsetY - 1)
          }else{
            setOffsetY(offsetY + 1)
            setIncY(!incY)
          }
    },100)
    // console.log( "X:",offsetX);
    // console.log( "Y:",offsetY);
    




  return (
    <div


      className="w-[90%]  text-normalText h-screen -mt-10
    flex items-center justify-center mx-auto "
    >
        {/* square  */}
      {/* <div style={{
          boxShadow:`${offsetX}px ${offsetY}px 50px -30px ${color}`
       }}
       className={`duration-[250ms] w-[400px] h-[400px]  rounded-xl`}>

       </div> */}

       {/* <div className='w-'/> */}
      <div
      style={{
        boxShadow:`${offsetX}px ${offsetY}px 50px -30px ${color}`
     }}
      
      className="w-full h-[500px] rounded-[50px] border-8 border-neutral-950
       flex flex-col lg:flex-row items-start lg:items-center justify-evenly px-2 lg:px-20">
       
       
        {/* text content  */}
        <div className=" w-full md:w-[80%] lg:w-[60%]
        flex flex-col items-start  gap-y-5  mx-auto">
          {/* baar  */}
          <div className="w-20 h-1 bg-secondaryColor " />

          <div className="pt-10 max-w-[350px] md:max-w-[500px] lg:max-w-[750px] ">
            <h1 className="flex items-center text-3xl  lg:text-5xl  text-headingText font-semibold lg:tracking-wider">
              Botonetics
            <span className="text-3xl lg:text-5xl text-white font-bold px-4">-</span>
            <h3 className='text-lg text-normalText font-semibold pt-1.5 flex-shrink-0'>   Building Better</h3>
            </h1>

            <h3 className="pt-5 text-lg text-normalText font-semibold">
           
            Business Byte by Byte.
            </h3>
          </div>
        </div>

        {/* logo  or image*/}
        <div className='mx-auto w-[200px] md:w-[300px] lg:w-[500px] '>
          <Image className=' w-full object-cover object-center' src={logo} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
