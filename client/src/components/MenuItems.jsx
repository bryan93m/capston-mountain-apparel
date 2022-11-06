import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '@material-ui/icons';

function MenuItems({showMenu, active}) {
  return (
            <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                <Close onClick={showMenu} className='cursor-pointer hover:scale-105 duration-300'/>
                <li className='hover:scale-105 duration-300'><Link to='/home'>Home</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/mens'>Mens</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/womens'>Womens</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/cart'>Cart</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/logout'>Logout</Link></li>
            </ul>

  )
}

export default MenuItems