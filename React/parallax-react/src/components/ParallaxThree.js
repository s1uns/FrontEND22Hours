import { Parallax } from 'react-parallax';
import ImgThree from '../img/3.jpg'

const ParallaxThree = () => (
    <Parallax className='parallax-container' bgImage={ImgThree} strength={200}>
        <div className='container-content'>
            <span className='img-text'>
                Take a trip to space!
            </span>
        </div>
    </Parallax>
);

export default ParallaxThree;