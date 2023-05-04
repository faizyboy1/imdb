import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch'

function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <MenuItem title={'Home'} address={'/'} Icon={AiFillHome} />
            <MenuItem title={'About'} address={'/about'} Icon={BsFillInfoCircleFill} />
        </div>
        <div className='flex items-center space-x-5'>
          <DarkModeSwitch/>
            <h2>
                <span className='font-bold text-2xl bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </h2>
        </div>
    </div>
  )
}

export default Header