'use client'

import React, { useState } from 'react'
import Logo from '../../../../public/logo Symbol.svg'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { variants } from '@/app/Constant/logoAnimationValues'

const LogoAnimation = ({size}:{size:number}) => {


    const logoSize = Math.floor(size/4)

const [index, setIndex] = useState(0);
  setTimeout(() => {
    if(index === 0){
      setIndex(1)
    return
    }
    setIndex(0)
  
  }, 4000);
    
  
  var delay1 = index === 0 ? 1 : 2
  var delay2 = index === 0 ? 2 : 1
 

  
  




  return (

    <>
    {/* <div style={{width:`${size}px`,}}
     className=' '> */}
    <motion.div 
    initial='initial'
    animate='animate'
    transition={variants[index].first.transition} 
    variants={variants[index].first.variants}
      className=" 
  absolute "
    >
      <AnimateLogo size={logoSize}/>
  
      {/* 2nd */}
  
      <motion.div
  
        initial='initial'
        animate='animate'
        transition={variants[index].second.transition}
        variants={variants[index].second.variants}
        className="absolute "
      >
        <AnimateLogo  size={logoSize}/>
  
        {/* 3rd  */}
        <motion.div
          initial='initial'
          animate='animate'
          transition={variants[index].third.transition}
          variants={variants[index].third.variants}
          className="absolute "
        >
          <AnimateLogo size={logoSize}/>
        </motion.div>
      </motion.div>
  
      {/* 2nd and 3rd ends here  */}
  
      {/* 4th  */}
  
      <motion.div
        initial='initial'
        animate='animate'
        transition={variants[index].fourth.transition}
        variants={variants[index].fourth.variants}
        className="absolute  "
      >
        <AnimateLogo size={logoSize}/>
      </motion.div>
  
      {/* 4th ends here  */}
  
      {/* 1st ends here  */}
    </motion.div>
    {/* </div> */}
    </>
  )
}

export default LogoAnimation


const AnimateLogo = ({size}:{size :number})=>{


    return(
        <div style={{width:`${size}px`,height:`${size}px`}} 
        className=''>
        <Image 
        width={size * 3}
        height={size * 3}
        quality={100}
        src={Logo} alt={'logo'}
        className={`object-contain object-center w-full h-full`}
        />
      
        </div>
    )
}