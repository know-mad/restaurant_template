import React from 'react'
import './Testimonials.css'

import image3 from '../images/image3.jpg'

const Testimonials = () => {
    return (
        <div className='testimonials-container'>
            <div className='testimonials-left'>
                <div className='testimonial-photo'>
                    <img src={image3} alt='photo-3' />
                </div>
                <div className='pagination-dots'>
                    <div style={{backgroundColor: `#000`}} className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </div>
            <div className='testimonials-right'>
                <p>
                    <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.</em>
                    <br/>
                    <br/>
                    -Customer
                </p>
                <div className='testimonial-cta-buttons-container'>
                    <a href='http://davidvelez.io' className='yelp-review__button'>review us on yelp</a>
                    <a href='http://davidvelez.io' className='google-review__button'>review us on google</a>
                </div>
            </div>
        </div>
    )
}

export default Testimonials