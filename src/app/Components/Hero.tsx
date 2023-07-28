'use client';

import React, { useState } from 'react';

import img1 from '../../../public/img1.jpg';
import img2 from '../../../public/img2.png';
import img3 from '../../../public//img3.png';
import img4 from '../../../public/img4.jpg';
import Image from 'next/image';

import {colors_array} from '@/app/constantAPI/colors' 
import { shapes } from '../constantAPI/shadowCirlce';
const Hero = () => {
  // const colors_array = ["red","green","blue"]
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
    console.log( "X:",offsetX);
    console.log( "Y:",offsetY);
    


  return(
    <div className='flex flex-wrap items-center justify-between w-[80vw]  gap-48 mx-auto '>
      {/* square  */}
      <div style={{
         boxShadow:`${offsetX}px ${offsetY}px 50px -30px ${color}`
      }}
      className={`duration-[250ms] w-[400px] h-[400px]  rounded-xl`}>

      </div>

        {/* circle  */}
      <div style={{
         boxShadow:`${offsetX}px ${offsetY}px 100px -50px ${color}`
      }}
      className={`duration-[250ms] w-[400px] h-[400px]  rounded-full`}>

      </div>
      {/* rectangle */}
      <div style={{
         boxShadow:`${offsetX}px ${offsetY}px 35px -25px ${color}`
      }}
      className={`duration-[250ms] w-[400px] h-[250px] border  rounded-2xl`}>

      </div>

      <div style={{
         boxShadow:`${offsetX}px ${offsetY}px 50px -30px ${color}`
      }}
      className={`duration-[250ms] w-[400px] h-[400px]  rounded-xl`}>

      </div>
      <div style={{
         boxShadow:`${offsetX}px ${offsetY}px 50px -30px ${color}`
      }}
      className={`duration-[250ms] w-[400px] h-[400px]  rounded-xl`}>

      </div>
    </div>
  )
  }
export default Hero;
