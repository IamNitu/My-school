import React from 'react'
import image2 from '../assets/image3.jpg';

function About() {
  return (<div className='section'>
    <div className='herosection'>
    <img src={image2} alt=''></img>
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
  )
}

export default About;