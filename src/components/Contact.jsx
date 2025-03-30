import React, { useState } from 'react';
import Homepage from './HomePage';
import contactimg from '../assets/contactimg.avif';
import image4 from '../assets/image4.webp';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot,  faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';


function Contact() 

{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');

    const handleFormSubmit =(e)=>{
        e.preventDefault();
        const searchData={
            name,
            email,
            phone,
            subject,
            message,
          };
          if(!name){
            alert('please write your name');
            return;
          }
    
          if(!email){
            alert("emali can't be empty.");
            return;
          }else if (!email.includes('@')) {
            alert("Please enter a valid email address.");
            return; 
          }
    
         
          if(!phone){
            alert("phone number is required");
            return;
          }else if(phone.length !==10){
            alert("phone number is incorrect");
            return;
           }else{
            
          }

          if(!subject ){
            alert("write the subject.");
            return;
          }

          if(!message){
            alert("message field cannot be empty.");
            return;
          }
          alert('Message Submitted Sucessfully..');
          console.log(searchData);
    };


    const cards=[
        { icon: faLocationDot,
            title:'Address',
         description:'Damak-06,Bhrikuti Chowk,Jhapa,Nepal',
     },
        {icon:faMobileScreenButton,
             title:'Phone',
         description:'+977 9800000444',
     },
        { icon:faEnvelope,
            title:'Email',
         description:'noemail@gmail.com',
     },
         
     ];



  return (

    <div className='contactus'>
        <div className='contact-container'>
            <div className='contact'> {/* <Homepage/> */}
<img src={contactimg} alt='' style={{ width:'100%', height:"400px",background:'cover',opacity:0.9}}></img>
<div className='contact-about'>
<h1 style={{background:'none',paddingBottom:'10px'}}>CONTACT</h1>
    <p style={{background:'none',cursor: 'pointer'}}>Home{' > '}Contact</p>
</div>
            </div>
</div>

<div className='contactquery1'>

    <div className='form1'>
    <div className='image-container'>
<img src={image4} alt='' style={{background:'cover'}}></img>
</div>
    <form className='fillform1' onSubmit={handleFormSubmit}>

    <h2 className="signup"> Contact Now</h2>
    
                <div className='fill-form-container'>
                <label>Name: </label>
                <input type="text" name="name" placeholder="Enter Name " value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                
                <div className='fill-form-container'>
                <label>Email: </label>
                    <input type="email" name="email" placeholder=" Enter Email " value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                
                <div className='fill-form-container'>
                <label>Phone:</label>
                    <input type="text" name="phone" placeholder=" Enter Phone number " value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>

                <div className='fill-form-container'>
                <label>Subject:</label>
                    <input type="text" name="Subject" placeholder=" Enter Subject " value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                </div>

                <div className='fill-form-container'>
                <label>Message:</label>
                    <input type="text" name="Message" placeholder=" Message " value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </div>

                <div className='fill-form-container'>
                    {/* <input className="submitted1" type="submit" value="Sign-Up" /> */}
                    <button className="submitted">Submit</button>
                </div>
                
    </form>
   
    </div>
    </div>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114091.67939564973!2d87.59437581532463!3d26.66880719170973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58e14d281c547%3A0xb0d3c98577060f3d!2sDamak!5e0!3m2!1sen!2snp!4v1742827119874!5m2!1sen!2snp"style={{ width:"100%" ,height:"450px"}}></iframe>
    </div>
<div className='mapcomponent'>
<div className='mapping'>
    {cards.map((card,index)=>(
        <div className='mapcontent' key={index}>
        <span style={{background:'none'}}>
        <FontAwesomeIcon icon={card.icon} style={{background:'none',width:'30px',height:'50px',paddingTop:'10px'}} />
        </span>

        <div className='mappingcontent'> <h3 >{card.title}</h3></div>
        <p>{card.description}</p>
        </div>
    ))}
</div>
</div>

    <div className='contact-footer'>
    <div className='contact-footer-content' >
        <Footer />
    </div>
</div>
    </div>
       
  )
}

export default Contact;