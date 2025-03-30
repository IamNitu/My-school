import React, { useState } from 'react'
import quickimg1 from '../assets/quickimg1.jpeg';
function Quickquery() {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [message,setMessage]=useState('');

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const searchData={
        name,
        email,
        phone,
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
      if(!message){
        alert("message field cannot be empty.");
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
      console.log(searchData);
      alert('Submitted Successfully..');
  };
  

  return (
    <>
   
    <div className='quickquery'>
    <div className='quick'>
     <img src={quickimg1} alt='' className='quick-img' ></img> 
<div className='query-about'>
  <h1 style={{background: 'none'}}>Qick Queries</h1><br/>

  <p style={{background: 'none'}}>We Are Ready for Help You. Our School Have Best Teachers. if You Need Any Type Help So Just Fill this Quick Query form and We Can Solve Your Queries regarding Our School.</p>
</div>
    </div>

    <div className='query'>
    <div className='form' style={{backgroundColor:'cadetblue'}} >
    <form className='fillform' style={{backgroundColor:'cadetblue'}} onSubmit={handleFormSubmit}>
    
    <h2 className="login" style={{background:'none',paddingBottom:'12px',textAlign:'center'}}> Contact Now</h2>
    
                <div className='fillform-container'>
                <input type="text" name="name" placeholder="Enter Name " value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                
                <div className='fillform-container'>
                    {/* <label>Email</label> */}
                    <input type="email" name="email" placeholder=" Enter Email " value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                
                <div className='fillform-container'>
                    <input type="text" name="phone" placeholder=" Enter Phone number " value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </div>

                <div className='fillform-container'>
                    <input type="text" className="querymsg" name="Message" placeholder=" Message " value={message} onChange={(e)=>setMessage(e.target.value)} />
                </div>

                <div className='fillform-container'>
                    {/* <input className="submitted1" type="submit" value="Sign-Up" /> */}
                    <button className="submitted1">Submit</button>
                </div>
                
    </form>
    </div>
    </div>
  </div>
  
  </>
  )
}

export default Quickquery