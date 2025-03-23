import React from 'react';
// import home from './image1.jpg';
import Marquee from 'react-fast-marquee';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
 function HomePage() {

    const data=[image1,image2,image3]
  return (
    <>
        <div className='slider'>
        <div className='sliderimage'>
       
{/* <img src={data[0]} alt='' style={{width:'100%', height:'85vh'}}></img>

<div className='btn'>
   <div className='left-btn'>
   <button> {'<'} </button>
   </div>
    <div className='right-btn'>
    <button> {'>'} </button>
    </div>
</div> */}
<div className='homepage-about'>
  <h1>" My school, my pride, a place where dreams take flight! "</h1>
</div>
      </div>


      <Marquee className='marquee-container'>
        <div className='marquee-content'>
         <p >Welcome to My School. “Your Journey to Excellence Starts Here”</p>
        </div>
      </Marquee>
      
</div>

    </>
  )
}
export default HomePage;