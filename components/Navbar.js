"use client"
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="fixed text-sm gap-4 top-0 left-0  w-screen md:w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo or Weather Icon */}
          <div className="md:flex md:flex-row flex-col relative right-4 justify-center  items-center">
            <Image
              src="/weathericon.png" // your weather icon
              alt="WeatherHub Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-3 font-semibold text-sm  md:text-lg">WeatherHub</span>
          </div>

          {/* Links */}
          <div className="flex gap-2 space-x-6">
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            
            <Link href="/forecast" className="hover:text-gray-300 transition">Forecast</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
