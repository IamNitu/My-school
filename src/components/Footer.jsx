import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import school from './school-logo.jpg';
function Footer() {
  return (
    <><div className='done'>
        <div className='footer'> 
        <div className='footerimg'>
        <img src={school} alt=''/>
         </div>

        <div className='footerabout'>
        <div className='footer-about'>
        <h2>My School</h2>
<p>My School is a Complete School Website Solution with Online Admission and Online Fee Payment Accept. 
This is Best School Website Solution for Your School.</p></div>

        </div>
        <div className='footerlinks'>
        <div className='footer-links'>
        <h2 className='quicklink'>
                        Quick Links
                    </h2>
                    <ul >
                        <li className='quick-link'><NavLink to='/' >Home</NavLink></li>
                        <li className='quick-link'><NavLink to='/about' >About</NavLink></li>
                        <li className='quick-link'><NavLink to='/course' >Course</NavLink></li>
                        <li className='quick-link'><NavLink to='/Gallery' >Gallery</NavLink></li>
                        <li className='quick-link'><NavLink to='/Certificates' >Certificates</NavLink></li>
                    </ul>
                </div>
                </div>
        <div className='footercontact'>
          <div className='footer-contact'>
          <div className='footer-contact-container'>
          <h2>Contact Info</h2>
          </div>
          <ul >
                        <li className='fontcontact'><FontAwesomeIcon className='iconcontact' icon={faLocationDot} /> Damak-06,Bhrikuti Chowk,Jhapa,Nepal</li>
                        <li className='fontcontact'><FontAwesomeIcon className='iconcontact' icon={faEnvelope} /> noemail@gmail.com</li>
                        <li className='fontcontact'><FontAwesomeIcon className='iconcontact' icon={faPhone} /> +977 9800000444</li>
                    </ul>
          </div>
        </div>
        
        </div>
        <div className='copyright'>
          <p>Copyright @ 2025 All rights are reserved.</p>
        </div>
        </div>
    </>
  )
}

export default Footer