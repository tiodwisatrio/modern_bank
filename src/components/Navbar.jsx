import React, {useState} from 'react';
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
   <nav className='w-full flex py-6 justify-between items-center navbar'>
        {/* logo */}
        <img src={logo} alt="HooBank" className='w-[124px] h-[32px]' />

        {/* navlist */}
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => {
                return (
                    <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary`}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                )
            })}
        </ul>

        {/* menu mobile */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-500' onClick={() => setToggle((prev => !prev))} />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => {
                    return (
                        <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white hover:text-secondary`}>
                            <a href={`#${nav.id}`} onClick={() => setToggle(!toggle)}>{nav.title}</a>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>

   </nav>
  )
}

export default Navbar