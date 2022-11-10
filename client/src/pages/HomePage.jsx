// import {Parallax} from 'react-parallax';
import ImageOne from '../components/ImageOne';
import ImageTwo from '../components/ImageTwo';
import ParaNav from '../components/ParaNav';
import TextBox from '../components/TextBox';

function HomePage() {
  return (
    <>
    
    <div>
      <ParaNav />
      <TextBox/>
      <ImageOne />
      <ImageTwo />
    </div>
    </>
  )
}

export default HomePage