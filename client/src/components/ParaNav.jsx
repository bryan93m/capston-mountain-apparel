import {Parallax} from 'react-parallax';
import NavBar from './NavBar';

function ParaNav() {
  return (
    <Parallax>
    <div className='z-5'>
        <NavBar />
    </div>
    </Parallax>
  )
}

export default ParaNav