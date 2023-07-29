'use client'
import Featured from './Components/Featured';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import bgIMG from '../../public/img3.png'
import Image from 'next/image';
import WhyChooseUs from './Components/WhyChooseUs';
import ContactUs from './Components/ContactUs';
import Blog from './Components/Blog';
export default function Home() {
  return (
    <main >
      <div
    className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto"
      >
        
      <Navbar />
      <Hero />
      <Services/>
      </div>

       {/* <div className='w-[calc(100vw-20px)] h-[calc(100vh-100px)] mx-auto mt-20 mb-20
         bg-cover   bg-center bg-no-repeat bg-[url(../../public/img3.png)] border
         backdrop-blur-3xl bg-opacity-80'> */}
         <div className='   mx-auto mt-20 mb-20
         bg-cover   bg-center bg-no-repeat bg-[url(../../public/img3.png)] 
         backdrop-blur-3xl bg-opacity-80'>
       <Featured/> 

      </div> 

      <div 
          className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto"
          >
                <Blog/>

      </div>

      <div className=' bg-neutral-900  mx-auto mt-20 mb-20
        '>
                  <WhyChooseUs/>

          </div>

      <div
    className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto"
      >

        <ContactUs/>
         </div>

    </main>
  );
}
