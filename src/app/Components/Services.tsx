import React from 'react'
import ServicesCards from './sub-components/ServicesCards'
import { servicesCard } from '../constantAPI/api'


const Services = () => {
  return (

    <div>
{/* text  */}
        <div>

        </div>

        {/* cards */}
    <div 
    className='flex flex-wrap items-start justify-normal mx-auto gap-10'
    
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