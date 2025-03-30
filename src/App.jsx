import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './Style.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Course from './components/Course';
import Certificate from './components/Certificate';
import './Navbar.css';
import './Herosection.css';
import './HomePage.css';
import './Quickquery.css';
import './Infoslider.css';
import './Acknowledge.css';
import './Review.css';
import './Footer.css';
import './AboutUs.css';
import './Contact.css';
import './Course.css';
import './Gallery.css';
import './Certificate.css';

const App=()=>{
  return (
  <div>
<Navbar/>
   <Routes>
     <Route path='/' element={<Home/>} /> 
     <Route path='/about' element={<AboutUs/>} /> 
     <Route path='/contact' element={<Contact/>} /> 
     <Route path='/gallery' element={<Gallery/>} /> 
     <Route path='/course' element={<Course/>} /> 
     <Route path='/certificate' element={<Certificate/>} /> 
   </Routes>
  </div>
  );
};

export default App;