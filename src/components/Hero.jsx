import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white" id='Hero'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
            <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYITICS</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with Data</h1>
            <div className='flex justify-center gap-4'>
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast,Flexible Finacing for</p>
               <ReactTyped strings={["BTR","STC","SASS"]} typespeed={120} backspeed={140} loop className="md:text-5xl sm:text-4xl text-xl font-bold"/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 py-4'>Monitor your data analyitics to increase for BTS,STC, $ SASS plotform</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
       </div>
    </div>
  )
}

export default Hero
