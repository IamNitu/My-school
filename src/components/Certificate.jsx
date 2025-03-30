import React, { use, useState } from 'react';
import Footer from './Footer';
import certificate from '../assets/certificate.jpg';


function Certificate() {

  const [text,setText]=useState("");
 
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const searchData={
      text
    };
    alert('student not found');
    console.log(searchData);
  };


  return (
    <>
        <div className='certificate'>
          <div className='ceritificate-component'>
<img src={certificate} alt='' style={{background:'cover',width:'100%',height:'500px'}}/>
<div className='certificate-form'>
<form className='formstyle' onSubmit={handleFormSubmit}>
  <h2 >Search Student</h2>

  <div className='certificate-fillform'>
                <input type="text" name="name" placeholder=" Type Here " value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <p >Search by Student Name, Enrollment Number</p>
                <div className='certificate-fillform'>
                    <button className="submit">Find Student</button>
                </div>
</form>

</div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
    </>
  )
}

export default Certificate