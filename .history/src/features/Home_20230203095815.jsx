import React from 'react'

const Home = () => {
  return (
    <section className='home py-10 max-w-[1140px] my-0 mx-auto'>
        <div className='text-center'>
            <span className="text-white font-bold text-5xl ">Events</span>
        </div>
        <div className='mt-10 flex items-center justify-between'>
            <ul className='flex items-center gap-x-10'>
                <li>
                    <span>All</span>
                </li>
                <li>
                    <span>Active</span>
                </li>
                <li>
                    <span>Not Started</span>
                </li>
                <li>
                    <span>Expired</span>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Home