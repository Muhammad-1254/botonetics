import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <main className="max-w-[400px] md:max-w-[800px] lg:max-w-[1600px] mx-auto">
        <Navbar/>
        <Hero/>
    </main>
  )
}
