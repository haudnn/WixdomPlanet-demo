import React from 'react'
import Event from './Event/page/Event'

const Home = () => {
  return (
    <section className='home py-10 max-w-[1140px] my-0 mx-auto'>
        <div className='text-center'>
            <span className="text-white font-bold text-5xl ">Events</span>
        </div>
        <div className='mt-10 flex items-center justify-between'>
            <ul className='flex items-center gap-x-10'>
                <li>
                    <span className='text-sm text-[#949499] cursor-pointer'>All</span>
                </li>
                <li>
                    <span className='text-sm text-[#949499] cursor-pointer'>Active</span>
                </li>
                <li>
                    <span className='text-sm text-[#949499] cursor-pointer'>Not Started</span>
                </li>
                <li>
                    <span className='text-sm text-[#949499] cursor-pointer'>Expired</span>
                </li>
            </ul>
            <div className='w-[280px]'>
                <input type="text" placeholder='Enter name event' className='text-sm pl-[30px] pr-[15px] h-10 leading-10 border border-solid border-[#636366] inline-block w-full bg-[#3a3a3c] rounded-lg text-white'/>
            </div>
        </div>
        <div className='mt-5'>
            <Event/>
        </div>
    </section>
  )
}

export default Home