import React from 'react'
import {appleImg, bagImg, searchImg} from "../utils"
import {navLists} from "../constants"
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex jsutify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple" width={14} height={18} />
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {
                    navLists.map((navI)=>(
                        <div key={navI} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>{navI}</div>
                    ))
                }
            </div>
            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} width={18} height={18} alt="search" />
                <img src={bagImg} width={18} height={18} alt="Bag" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
