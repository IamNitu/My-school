import React from 'react'
import aboutimgcover from '../assets/aboutimgcover.jpg'
import aboutimg from '../assets/aboutimg.jpg'
import Footer from './Footer';
import Infoslider from './Infoslider';
import Review from './Review';
import TeamMembers from './TeamMembers';


function AboutUs() {
  return (
    
    <>
        <div className='aboutus'>
        <div className='about-us'>
<img src={aboutimgcover} alt='' className='aboutkoimg' style={{height:'450px',width:"100%"}}></img>
<div className='contact-about' style={{top:'50%',right:'-10%'}}>
<h1 style={{background:'none',paddingBottom:'10px'}}>ABOUT US</h1>
    <p style={{background:'none',cursor: 'pointer'}}>Home{' > '}About</p>
</div>
        </div>
        <div className='about-container'>
       <div className='section'>
           <div className='herosection'>
           <img src={aboutimg} alt='' id='please'></img>
           <div className='hero-section'>
           <h2> About Our School</h2>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Voluptate dicta quia commodi sunt quaerat laboriosam perferendis 
       tempore, maiores earum quis eligendi, cumque voluptates tempora qui sapiente dignissimos nemo porro id.<br/><br/>
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium eaque nihil quas aliquam quam numquam. </p>
       
       <div className='section-btn'>
  <button> Learn More </button>
</div>
       </div>
       
        </div>
    
        </div>
        <Infoslider/>
      <TeamMembers/>
        <Review/>
        <Footer/>
        </div>
        </div>
    </>
  )
}

export default AboutUs;