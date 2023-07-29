'use client';

import styles from '@/app/Components/navbar.module.css'
import Featured from './Components/Featured';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import bgIMG from '../../public/img3.png';
import Image from 'next/image';
import WhyChooseUs from './Components/WhyChooseUs';
import ContactUs from './Components/ContactUs';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
export default function Home() {
  return (
    <main id=''>
      <div className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        <Hero />
        <Services />
      </div>

      <div
        className="   mx-auto mt-20 mb-20
         bg-cover   bg-center bg-no-repeat bg-[url(../../public/img3.png)] 
         backdrop-blur-3xl bg-opacity-80"
      >
        <Featured />
      </div>

      <div className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        <Blog />
      </div>

      <div
        className=" bg-neutral-900  mx-auto mt-20 mb-20
        "
      >
        <WhyChooseUs />
      </div>

      <div className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        <ContactUs />
      </div>
    </main>
  );
}
