import {Parallax} from 'react-parallax';
import {Link} from 'react-router-dom';
import Female from '../img/Female.jpg'

function ImageTwo() {
  return (
    <Parallax bgImage={Female} strength={800} className="absolute h-screen  ">
    <div className='flex items-center justify-center absolute h-screen w-screen'>
        <Link to="/womens" className='bg-slate-900 opacity-80 rounded-sm border border-blue-500 px-5 py-5 hover:scale-105 duration-300'>
            <button className='text-blue-600 font-semibold'>Womens Products</button>
        </Link>
    </div>
</Parallax>
  )
}

export default ImageTwo