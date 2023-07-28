import Featured from './Components/Featured';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import bgIMG from '../../public/img4.jpg'
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

      <div className='w-[90vw] lg:h-[95vh] mx-auto 
      bg-[url(../../public/img4.jpg)] bg-no-repeat float-right object-cover  object-center
      '>

      <Featured/>
      </div>
    </main>
  );
}
