import React from 'react'
import ServicesCards from './sub-components/ServicesCards'
import { servicesCard } from '../constantAPI/api'


const Services = () => {
  return (

    <div id='Services' 
     className='w-[90%] flex flex-col items-start overflow-x-hidden justify-start  md:gap-y-10 mx-auto
    text-normalText'>
{/* text  */}
        <div className='  text-center mx-auto
        text-headingText   text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider '>
Services
        </div>

        {/* cards */}
    <div 
    className='flex flex-wrap items-start justify-normal mx-auto gap-5'
    
    >
{
  servicesCard.map(({id,title,description,image,link})=>{
    return(
      <ServicesCards key={id} id={id} title={title} description={description} image={image} link={link}/>

    )
  }

  )
}
    
    </div>

    </div>
  )
}

export default Services