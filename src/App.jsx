import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

// import About from './components/Herosection';
import './Style.css';

const App=()=>{
  return (
  <div>
<Navbar/>
   <Routes>
     <Route path='/' element={<Home/>} /> 
     {/* <Route path='/about' element={<About/>} />  */}
   </Routes>
  </div>
  );
};

export default App;