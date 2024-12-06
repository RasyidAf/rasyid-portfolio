import React from 'react'
import Navbar from './ui/Navbar'

const Header = () => {
  return (
    <header className='sticky top-0 w-full bg-brown z-[20] mx-auto items-center justify-between border-b border-gray-500 px-8 py-4 bg-zinc-900'> 
        <Navbar />
    </header>
  )
}

export default Header