import React, {useState} from 'react'
import { MenuOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

function NavBar() {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }
  return (
    <div className='fixed w-full text-blue-500 flex justify-between p-4 items-center'>

        <div className='text-2xl font-bold text-center uppercase'>
            <h1>m <span className='block text-4xl'>fitness</span></h1>
        </div>

        
        <nav>
            
            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
            </div>

            <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>
                <li className='hover:scale-105 duration-300'><Link to='/home'>Home</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/mens'>Mens</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/womens'>Womens</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/cart'>Cart</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/logout'>Logout</Link></li>
            </ul>
            
            <MenuItems showMenu={showMenu} active={active}/>
        </nav>

        





    </div>
  )
}

export default NavBar