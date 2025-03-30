import React from 'react'

function TeamMembers() {
    const cards = [
        {
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTR9sBcPbO0OytGhPtYXxOhq1NW3FDjzpHA&s' ,
            title: 'Nikkhil Kc',
            description: 'Head'
,
        },
        {
            imgSrc:'https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696414.jpg?semt=ais_hybrid',
            title: 'Tara Bhandari',
            description: 'Founder',
        },
        {
            imgSrc: 'https://media.graphassets.com/resize=fit:crop,width:1200,height:630/tdZClzRhR02e2KDxcThw',
            title: 'Seema Poudel',
            description: 'Founder',
        },
        {
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2AiUQx4GJropbNQbYfc1H92ocKQM2XaQlkCrCIgAno9MfEWb38xpPTBM7FsYsU3mH78&usqp=CAU' ,
            title: 'Rishav Sharma',
            description: 'Principle',
        },
      

    ];
  return (
      <>
<div className="ack-container ">
<div className='ack-info'>
<h1>Team Members</h1><br/>
<p style={{paddingBottom:'10px'}}>" Meet Our Team Members "</p>

</div>
           <div className="row">
          
            {cards.map((card, index) => (
                <div key={index} className=" ack-card">
                    <span className="icon">{card.icon}</span>
                    <img className="team-image" src={card.imgSrc} alt={card.alt} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
           </div>
        </div>
      </> 
      )
}

export default TeamMembers