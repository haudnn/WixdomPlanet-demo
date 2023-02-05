import React from 'react'

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
                            <Link to="/communities">Events</Link>
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