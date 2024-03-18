import React from 'react'
import lap from '../assets/laptop.jpg'

const Analyitics = () => {
    return (
        <div className='w-full bg-white py-16 px-4' id='Analyitics'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={lap} alt="/" className='w-[500px] mx-auto py-6'/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYITICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analyitics
