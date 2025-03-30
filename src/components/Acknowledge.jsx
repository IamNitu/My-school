import React from 'react'
// import image1 from '../assets/image1.jpg';
// import image1 from '../assets/image1.jpg';
// import image1 from '../assets/image1.jpg';
// import image1 from '../assets/image1.jpg';
function Acknowledge() {
    const cards = [
        {
            imgSrc: 'https://cis.ac.th/wp-content/uploads/2025/01/PD1A2241-scaled-1024x683.jpg',
            title: 'School Program',
            description: 'Every year, my school holds an annual cultural festival that spans two days.',
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYGTiSkZgZXHNJ0ARIQm5DD5hUGlqiJTIpQ&s',
            title: 'Annual Sports',
            description: 'Sports day is a very exciting and happy day that every student looks forward to. Every student can participate in different types of sporting events.',
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHaxFYsHm-bUDNS5FyUo3U97BZYRRU1ZsEg&s',
            title: 'Field Visit',
            description: ' Field visit offers an engaging opportunity to learn and explore outside the classroom, fostering a deeper understanding of subjects and broadening their horizons',
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_bzmPJgqKEjcUXYd11g7dfAbt5TVPlnkFg&s',
            title: 'Festival Celebration',
            description: 'Festivals provide us with the break and add color, joy, and brightness to our lives. The celebration brings students closer to traditional and cultural belief.'
,
        },

    ];
  return (
      <>
<div className="ack-container ">
<div className='ack-info'>
<h1>Functions and Events</h1><br/>
<p style={{paddingBottom:'10px'}}>" All programmes and activities of the school during the off-learning sessions. "</p>
</div>
           <div className="row">
          
            {cards.map((card, index) => (
                <div key={index} className="ack-card">
                    <span className="icon">{card.icon}</span>
                    <img className="card-image" src={card.imgSrc} alt={card.alt} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
           </div>
        </div>
      </> 
  )
}

export default Acknowledge;