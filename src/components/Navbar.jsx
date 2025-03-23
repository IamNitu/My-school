import React from 'react'
import{NavLink} from 'react-router-dom';
import school from './school-logo.jpg';
function Navbar() {
  return (
    <>
       <div className='navbar'>
      <nav className='container'>
      <div className='myschool'>
    <div className='my-school'>
   <img src={school} className='school' alt=''></img>

   <div className='header'> MY SCHOOL <br/>
   <div className='nitu'>INTERNATIONAL</div>
   
   </div>
{/*     
    <div className='my-school1'>INTERNATIONAL</div> */}
    </div>
   
    
    
    </div>
        <div className='navlink'><NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/about">Gallery</NavLink>
        <NavLink to="/about">Contact Us</NavLink>
        <NavLink to="/course">Course</NavLink> 
        <NavLink to="/course">Certificates</NavLink> </div>
      </nav>
      </div> 

      
    </>
  )
}
export default Navbar;