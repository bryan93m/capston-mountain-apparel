import {Parallax} from 'react-parallax';
import NavBar from './NavBar';
import Gym from '../img/Gym.jpg';

function TextBox() {
  return (
    <Parallax strength={800} bgImage={Gym} className="absolute h-screen">
        <NavBar/>
        <div className='flex items-center justify-center absolute h-screen w-screen'>
            <h1 className='block text-4xl font-mono text-blue-500 bg-slate-800 opacity-70 px-2 py-2 rounded-md'>
                Welcome to Mountain Fitness Apparel
            </h1>
        </div>
    </Parallax>
  )
}

export default TextBox