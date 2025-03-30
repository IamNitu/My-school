

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'; // Import icons
import school from './school-logo.jpg';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <nav className="container">
          <div className="myschool">
            <div className="my-school">
              <img src={school} className="school" alt="School Logo" style={{height:'100px',width:'120px',paddingLeft:'10px'}}/>
              <div className="header">
                MY SCHOOL<br />
                <div className="nitu">INTERNATIONAL</div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ?             <FontAwesomeIcon icon={faTimes} /> :  <FontAwesomeIcon icon={faBars} />}
          </div>

          {/* Navigation Links */}
          <div className={`navlinks ${isOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
            <NavLink to="/course" onClick={() => setIsOpen(false)}>Course</NavLink>
            <NavLink to="/certificate" onClick={() => setIsOpen(false)}>Certificates</NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
