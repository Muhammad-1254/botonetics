'use client';

import React, { useState } from 'react';

import img1 from '../../../public/img1.jpg';
import img2 from '../../../public/img2.png';
import img3 from '../../../public//img3.png';
import img4 from '../../../public/img4.jpg';
import Image from 'next/image';

import {colors_array} from '@/app/constantAPI/colors' 
const Hero = () => {
  // const colors_array = ["red","green","blue"]

  const [offsetX,setOffsetX] =useState<number>(-10)
  const [offsetY,setOffsetY] =useState<number>(50)
  const [color,setColor] =useState(colors_array[0])
  const [colorIndex,setColorIndex] =useState(0)
  const [incX,setIncX] =useState(false)
  const [incY,setIncY] =useState(false)



  // for x and y direction indicators 
  let min =-50
  let max = 50


    
  setTimeout(()=>{
  
    if(colorIndex < colors_array.length ){
      setColor(colors_array[colorIndex])

      setColorIndex(colorIndex+1)
    }else{
      setColorIndex(0)
      setColor(colors_array[colorIndex])
      
    }
    // console.log(color);

    
  },500)

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
    <div className='flex items-center justify-center w-full h-[75vh] mx-auto '>
      <div style={{
         boxShadow:`${offsetX}px ${offsetY}px 40px -20px ${color}`
      }}
      className={`duration-200 w-[400px] h-[400px]  rounded-xl`}>

      </div>
    </div>
  )
  }
export default Hero;
