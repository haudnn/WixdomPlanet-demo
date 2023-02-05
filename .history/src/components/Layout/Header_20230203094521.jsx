import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/imgs/logo.png"
const Header = () => {
  return (
    <header className='h-[80px]'>
        <div className='max-w-[1140px] my-0 mx-auto h-full px-5'>
            <div className='flex items-center justify-between h-full'>
                <div className='flex items-center gap-x-10'>
                    <div className='h-[80px]'>
                        <Link to="/">
                            <img src={logo} alt="Logo" className='w-full h-full object-cover' />
                        </Link>
                    </div>
                    <ul className='flex items-center gap-x-10'>
                        <li>
                            <Link className='text-sm text-white' to="/communities">Communities</Link>
                        </li>
                        <li>
                            <Link className='text-sm text-white' to="/events">Events</Link>
                        </li>
                        <li>
                            <Link className='text-sm text-white' to="/follow">Follow Us</Link>
                        </li>
                    </ul>
                </div>
                <button style={{background: "linear-gradient(239deg,#3262dd,#7af4ae 98.78%)"}} className='text-sm text-white rounded-[20px] py-3 px-[43px]'>
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header