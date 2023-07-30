'use client'
import React from 'react';

import { socialLinks } from '../constantAPI/api';
import Link from 'next/link';

function SocialLinks() {
 
  return (
    <div className="hidden   md:flex  flex-col top-[35%] left-0 fixed ">
      <ul>
        {socialLinks?.map(({
            id,child,href,style,download
        })=>(
            <li key={id}
          // eslint-disable-next-line no-useless-concat
          className={`z-[100] flex justify-between items-center md:w-36 lg:w-40 md:h-10 lg:h-14 md:px-2 lg:px-4 md:opacity-20 md:hover:opacity-100 md:ml-[-100px] md:hover:ml-[-3px] lg:hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500` + ` ` + style}
        >
          <Link
            className="flex justify-between items-center w-full text-white"
            href={href}
            download={download} target='_blank' rel='noreferrer'
          >
            {child}
          </Link>
        </li>
        ))}
        
      </ul>
    </div>
  );
}

export default SocialLinks;