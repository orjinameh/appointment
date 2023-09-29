import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../assets/photos/accessories1.webp'
import img2 from '../assets/photos/accessories2.webp'

const spanStyle = {
    width: '100vw',
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '40px',
    width: '100vw'
}
const slideImages = [
    {
        url: img1,
        caption: 'Slide 1'
    },
    {
        url: img2,
        caption: 'Slide 2'
    },
    {
        url: '',
        caption: 'Slide 3'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle}>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow