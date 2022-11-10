import React, {useState, useContext} from 'react'
import { MenuOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import UserContext from '../context/UserContext';

function NavBar() {
    const userContext = useContext(UserContext)
    const [active, setActive] = useState(false);
    const {logout} = userContext

    const showMenu = () => {
        setActive(!active);
    }
  return (
    <div className='fixed w-full text-blue-500 flex justify-between p-4 items-center z-50'>

        <div className='text-2xl font-bold text-center uppercase'>
            <h1>m <span className='block text-4xl'>fitness</span></h1>
        </div>

        
        <nav>
            
            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
            </div>

            <ul className='hidden md:flex gap-8 p-6 uppercase bg-slate-900/25'>
                <li className='hover:scale-105 duration-300'><Link to='/home'>Home</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/mens'>Mens</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/womens'>Womens</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/cart'>Cart</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/user'>Account</Link></li>
                <li className='hover:scale-105 duration-300'><Link to='/login' onClick={logout}>Logout</Link></li>
            </ul>
            
            <MenuItems showMenu={showMenu} active={active}/>
        </nav>

        





    </div>
  )
}

export default NavBar