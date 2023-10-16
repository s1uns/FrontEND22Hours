import { Parallax } from 'react-parallax';
import ImgOne from '../img/1.jpg'

const ParallaxOne = () => (
    <Parallax className='parallax-container' bgImage={ImgOne} strength={200}>
        <div className='container-content'>
            <span className='img-text'>
                Take a trip to space!
            </span>
        </div>
    </Parallax>
);

export default ParallaxOne;