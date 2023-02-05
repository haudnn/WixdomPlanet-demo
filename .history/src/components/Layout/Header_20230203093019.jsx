import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-[80px]'>
        <div className='max-w-[1140px] my-0 mx-auto'>
            <div className='flex items-center justify-between'>
                <div>
                    <div>

                    </div>
                    <ul>
                        <li>
                            <Link to="/communities">Communities</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/follow">Follow Us</Link>
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