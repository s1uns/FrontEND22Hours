import { Parallax } from 'react-parallax';
import ImgTwo from '../img/2.jpg'

const ParallaxTwo = () => (
    <Parallax className='parallax-container' bgImage={ImgTwo} strength={200}>
        <div className='container-content'>
            <span className='img-text'>
                Take a trip to space!
            </span>
        </div>
    </Parallax>
);

export default ParallaxTwo;