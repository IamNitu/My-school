import React from 'react'
import quickimg1 from '../assets/quickimg1.jpeg';
function Quickquery() {
  return (
    <div className='quickquery'>
    <div className='quick'>
     <img src={quickimg1} alt='' style={{height:'100%',width:'100%', opacity:0.7}}></img> 
<div className='query-about'>
  <h1>Qick Queries</h1><br/>

  <p>We Are Ready for Help You. Our School Have Best Teachers. if You Need Any Type Help So Just Fill this Quick Query form and We Can Solve Your Queries regarding Our School.</p>
</div>
    </div>

    <div className='query'>
    <div className='form'>
    <form className='fillform'>
    
    <h2 className="login"> Contact Now</h2>
    
                <div className='fillform-container'>
                <input type="text" name="name" placeholder="Enter Name "/>
                </div>
                
                <div className='fillform-container'>
                    {/* <label>Email</label> */}
                    <input type="email" name="email" placeholder=" Enter Email "  />
                </div>
                
                <div className='fillform-container'>
                    <input type="text" name="phone" placeholder=" Enter Phone number " />
                </div>

                <div className='fillform-container'>
                    <input type="text" className="querymsg" name="Message" placeholder=" Message " />
                </div>

                <div className='fillform-container'>
                    {/* <input className="submitted1" type="submit" value="Sign-Up" /> */}
                    <button className="submitted1">Submit</button>
                </div>
                
    </form>
    </div>
    </div>
  </div>

  )
}

export default Quickquery