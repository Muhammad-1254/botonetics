"use client"
import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';
import servicesImg from '../../../../public/img1.jpg';
import { colors_array } from '@/app/constantAPI/colors';
import { shapes } from '@/app/constantAPI/shadowCirlce';


interface apiI{
  id:number,
  title:string,
  description:string,
  link:string,
  image:StaticImageData
}



const ServicesCards:FC<apiI> = ({id,title,description,image,link}) => {

  
  let min =-50
  let max = 50
  
  // giving slope45, slope135 on even and odd respectively 
  let x =0
  let y =0
  if(id%2 == 0){
     x = shapes.diagonalSlope45.x
     y = shapes.diagonalSlope45.y

  }else{
     x = shapes.diagonalSlope135.x
     y = shapes.diagonalSlope135.y

  }

  // giving random colors 
  const randInt = Math.floor(Math.random()*100)
// console.log("randInt:",randInt);


  const [offsetX,setOffsetX] =useState<number>(x)
  const [offsetY,setOffsetY] =useState<number>(y)
  const [colorIndex,setColorIndex] =useState(randInt)
  const [color,setColor] =useState(colors_array[colorIndex] )
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



  return (
    <>
    <div 
    style={{
      boxShadow:`${offsetX}px ${offsetY}px 50px -30px ${color}`
   }}
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

      <div className='flex flex-col items-center justify-start gap-y-3 w-full h-[45%] 
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