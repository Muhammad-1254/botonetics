'use client';

import React, { useState } from 'react';

import img1 from '../../../public/img1.jpg';
import img2 from '../../../public/img2.png';
import img3 from '../../../public//img3.png';
import img4 from '../../../public/img4.jpg';

import Image from 'next/image';

const Hero = () => {
  const [zoom, setZoom] = useState(160);
  const [increment,setIncrement] = useState(true)
  const min = 150
  const max = 400
  const speed = 5
  const time= 100

  setTimeout(() => {

    if(increment){
      if(zoom <= max){
        setZoom(zoom +speed)
      }else {
        setIncrement(!increment)

      }

    }else{
      if(zoom >= min){
        setZoom(zoom -speed)
      }else{

        setIncrement(true)
      }
    }
  }, time);

  return (
    <div className='flex items-start w-full h-[70vh]'>
      <div style={{width:`${zoom}px`,height:`${zoom}px`}} className='
      duration-200  bg-red-500'>

      </div>

    </div>
  )
};

export default Hero;
