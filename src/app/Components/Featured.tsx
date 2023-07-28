import Image from 'next/image'
import React from 'react'
import featuredSVG from '../../../public/featuredSVG.svg'
const Featured = () => {
  return (
    <div className='w-'>
        <Image src={featuredSVG} alt='svg' />
       
    </div>
  )
}

export default Featured