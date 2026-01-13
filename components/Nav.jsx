import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full bg-glass-white backdrop-blur-md border-b border-glass-border px-6 py-5 shadow-glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <div className="bg-gradient-primary p-2 rounded-lg shadow-lg">
            <Image 
              src="/icons/cloud.svg" 
              alt="WeatherApp Logo"
              width={28}
              height={28} 
            />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WeatherApp
          </h1>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link 
            href="/fav" 
            className="p-3 rounded-lg bg-glass-white hover:bg-glass-hover border border-glass-border transition-all hover:shadow-glass-hover hover:-translate-y-0.5"
            title="Favorites"
          >
            <Image 
              src="/icons/star.svg" 
              alt="Favorites"
              width={24}
              height={24} 
            />
          </Link>

          <Link 
            href="/search" 
            className="p-3 rounded-lg bg-glass-white hover:bg-glass-hover border border-glass-border transition-all hover:shadow-glass-hover hover:-translate-y-0.5"
            title="Search"
          >
            <Image 
              src="/icons/search.svg" 
              alt="Search"
              width={24}
              height={24} 
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;