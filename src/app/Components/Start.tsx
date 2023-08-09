'use client'
import React,{useState} from 'react'
import LogoAnimation from './sub-components/LogoAnimation'
import { AiOutlineCloseCircle } from 'react-icons/ai'



const Start = () => {
  const [startOn, setStartOn] = useState(true)


  // sending data to constant for navbar handling 


  return (
    <div className={` z-[99999]  absolute  overflow-hidden bg-secondaryColor 
    ${startOn ? "max-w-[100vw] max-h-[100vh] w-screen h-screen  startOn"
     : "max-w-0 max-h-0 w-0 h-0 rounded-3xl startOff"}
       duration-[400ms] `}>
      <div className=' relative ' 
      >
        



<div className='absolute top-40 left-[20%] md:left-[30%]'>

      <LogoAnimation size={1000}/>
</div>


<div onClick={() => setStartOn(!startOn)}
 className='absolute top-10 left-[45%] md:left-[85%]
  text-white text-5xl md:text-7xl'>
  {
startOn &&
  <AiOutlineCloseCircle/>
  }
</div>
      </div>
      </div>
  )
}

export default Start