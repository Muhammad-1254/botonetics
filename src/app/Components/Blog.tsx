'use client'

import React,{useState} from 'react'
import { blogAPi } from '../constantAPI/api'
import Link from 'next/link'
import BlogsCard from './sub-components/BlogsCard'



const Blog = () => {
  return (

    <div id='Blog'
     className='flex flex-col items-center justify-evenly gap-y-10
    w-full mx-auto text-normalText mt-20 mb-20'>
        {/* heading  */}
        <h1 className='text-headingText text-xl md:text-2xl lg:text-4xl font-semibold '>
            {blogAPi.heading}
        </h1>

        {/* blog card grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[85%] gap-5'>
            {
                blogAPi.blogdata.map(({id,title,description,blogType,blogLink,blogImageURL})=>(
                    <BlogsCard key={id} id={id} title={title} description={description} blogImageURL={blogImageURL} blogLink={blogLink} blogType={blogType}/>
                ))
            }
        </div>

            {/* blog website url */}
        <div className='flex items-center justify-center rounded-lg
        w-[75%] lg:w-[20%] 
        bg-neutral-800 md:hover:bg-black  md:hover:border-2 md:hover:border-normalText md:duration-200 md:ease-linear'>
            <Link className='p-2 text-headingText tracking-wider'
             href={blogAPi.blogWebsiteURL} about='_blank'>
                Brouse All Blogs
            </Link>
        </div>
    </div>
  )
}

export default Blog