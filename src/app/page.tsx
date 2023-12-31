'use client';

import Hero from './Components/Hero';
import WhyChooseUs from './Components/WhyChooseUs';
import ContactUs from './Components/ContactUs';
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

    <div className='-z-50 w-screen h-screen sticky top-0 bottom-0 right-0 left-0'>
        <Hero /> 

    </div>
    <div
        className=" bg-neutral-900  mx-auto mt-20 mb-20
        "
      >
        <WhyChooseUs />

      </div>
      {/* <div className=" max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
    
        <Services /> 
      
      </div> */}

      {/* <div
        className="   mx-auto mt-20 mb-20
         bg-cover   bg-center bg-no-repeat bg-[url(../../public/img3.png)] 
         backdrop-blur-3xl bg-opacity-80"
      >
        <Featured /> */}
        {/* id='Featured' */}
      {/* </div> */}

      {/* <div className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        <Blog /> */}
        {/* id='Blog' */}
      {/* </div> */}

     

      <div className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        <ContactUs />
       
       </div>
    <SocialLinks/>
    <div
       className="-z-10 relative h-[600px] md:h-[550px] lg:h-[450px] mx-auto mt-20 
       bg-cover   bg-center bg-no-repeat bg-[url(../../public/footer.jpg)] 
       backdrop-blur-3xl bg-opacity-80 
       "
      >
        <Footer/>
      </div>
    </main>
    
    </>

  );
}
