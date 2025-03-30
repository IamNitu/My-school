import React from 'react';
// import home from './image1.jpg';
import Marquee from 'react-fast-marquee';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
 function HomePage() {

  return (
    <>
        <div className='slider'>
        <div className='sliderimage'>
        {/* <img src={image1} alt="School" className="slider-img" /> */}
       
<div className='homepage-about'>
  <h1 style={{background:'none',paddingLeft:'20px'}}>My school, my pride,<br/> a place where dreams take flight!</h1>
</div>
      </div>

      <div className='marquee-content' >
      <Marquee className='marquee-container' speed={60} style={{background:'none'}}>
       
         <p >Welcome to My School. “Your Journey to Excellence Starts Here”</p>
       
      </Marquee>
      </div>
      
</div>

    </>
  )
}
export default HomePage;