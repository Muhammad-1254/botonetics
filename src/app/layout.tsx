import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
        <Navbar/>
        {children}
        
        <div
       className=" relative h-[600px] md:h-[550px] lg:h-[450px] mx-auto mt-20 
       bg-cover   bg-center bg-no-repeat bg-[url(../../public/blog.jpg)] 
       backdrop-blur-3xl bg-opacity-80 
       "
      >
        <Footer/>
      </div>

        </body>
    </html>
  )
}
