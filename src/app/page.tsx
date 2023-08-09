'use client';

import Featured from './Components/Featured';
import Hero from './Components/Hero';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';
import ContactUs from './Components/ContactUs';
import Blog from './Components/Blog';
import SocialLinks from './Components/SocialLinks';
import Footer from './Components/Footer';
import Start from './Components/Start';


export default function Home() {

  
  return (
    
    <>
   
    <main className=''>

    <div className={` `}>
        <Start/>
        </div>

    <div className='-z-50 sticky top-0 left-0'>
        <Hero /> 

    </div>
      <div className=" max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        {/* id='Home' */}
        <Services /> 
        {/* id='Services' */}
      </div>

      <div
        className="   mx-auto mt-20 mb-20
         bg-cover   bg-center bg-no-repeat bg-[url(../../public/img3.png)] 
         backdrop-blur-3xl bg-opacity-80"
      >
        <Featured />
        {/* id='Featured' */}
      </div>

      <div className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        <Blog />
        {/* id='Blog' */}
      </div>

      <div
        className=" bg-neutral-900  mx-auto mt-20 mb-20
        "
      >
        <WhyChooseUs />
        {/* id='WhyChooseUs' */}
      </div>

      <div className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        <ContactUs />
        {/* id='ContactUs' */}
      </div>
    <SocialLinks/>
    <div
       className="-z-10 relative h-[600px] md:h-[550px] lg:h-[450px] mx-auto mt-20 
       bg-cover   bg-center bg-no-repeat bg-[url(../../public/blog.jpg)] 
       backdrop-blur-3xl bg-opacity-80 
       "
      >
        <Footer/>
      </div>
    </main>
    
    </>

  );
}
