import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

const [nav,setNav]=useState(false)
const handleNav =()=>{
    setNav(!nav)
}
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Data.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer hover:text-[#00df9a] duration-300'><a href="/">Home</a></li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a] duration-300'><a href="#Hero">Company</a></li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a] duration-300'><a href="#Analyitics">Resources</a></li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a] duration-300'><a href="#NewsLetter">Abouts</a></li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a] duration-300'><a href="#Cards">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/>: <AiOutlineClose size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-5 pt-2'>Data.</h1>
            <ul onClick={()=> setNav(!nav)} className='uppercase p-4'>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#00df9a] text-white duration-300'><a href="/">Home</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#00df9a] text-white duration-300'><a href="#Hero">Company</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#00df9a] text-white duration-300'><a href="#Analyitics">Resources</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#00df9a] text-white duration-300'><a href="#NewsLetter">Abouts</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#00df9a] text-white duration-300'><a href="#Cards">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
