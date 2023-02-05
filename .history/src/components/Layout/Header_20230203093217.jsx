import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-[80px]'>
        <div className='max-w-[1140px] my-0 mx-auto'>
            <div className='flex items-center justify-between'>
                <div>
                    <div>
                        <span>WixdomPlanet</span>
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
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header