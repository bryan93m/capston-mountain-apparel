import {Parallax} from 'react-parallax';
import {Link} from 'react-router-dom';
import Mens from '../img/Mens.jpg';
import NavBar from './NavBar';

function ImageOne() {
  return (
    <Parallax bgImage={Mens} strength={800} className="absolute h-screen">
        <NavBar/>
        <div className='flex items-center justify-center absolute h-screen w-screen'>
            <Link to="/mens" className='bg-slate-900 opacity-80 rounded-sm border border-blue-500 px-5 py-5 hover:scale-105 duration-300'>
                <button className='text-blue-600 font-semibold'>Mens Products</button>
            </Link>
        </div>
    </Parallax>
  )
}

export default ImageOne