import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
    const cards = [
        {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/330px-Outdoors-man-portrait_%28cropped%29.jpg',
            title: 'Yash',
            name:'Parent',
            description: 'I am impressed with your curriculum and teaching methods. Well planned worksheets for practice makes my child think beyond prescribed Textbooks.',
        },
        {
            imgSrc: 'https://media.istockphoto.com/id/1826168994/photo/close-up-portrait-of-brunette-young-businesswoman-in-black-suit-spectacles-looks-away-with.jpg?s=612x612&w=0&k=20&c=8E9EQFM_GyphNxgs0_sldQcrGto52RTMmsOe4_wtxQ0=',
            title: 'karuna',
            name:'Parent',
            description: 'I am impressed with the Co-Curricular activities organised by the school. This has helped my child to develop confidence and overcome stage fear.',
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8TsQOzoT-xjj66WuGQX9jSkejWvgzCWvBg&s',
            title: 'Abhishek',
            name:'Student',
            description: 'I joined this school with a lot of excitement, and since then, my love for the school has grown stronger every day.'
,
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLTiEprsze-SK8Gr0etrA4FqJz-mJTPKnIg&s', 
            title: 'Aditya',
            name:'Parent',
            description: 'Very happy with the school the attitude of the teachers for making my child more confident to participate in theatrical activities.',
        },
        {
            imgSrc: 'https://media.istockphoto.com/id/157400344/photo/happy-forties.jpg?s=612x612&w=0&k=20&c=hVK0eBwnrzWFS2inwHJHHRLTDzaKpqOZqzSaQWf85lc=',
            title: 'Sikha',
            name:'Parent',
            description: 'The child is progressing well academically. His confidence has boosted up a lot as earlier he was very introvert.',
        },
       

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
         adaptiveHeight: false,
        slidesToScroll: 1
      };
  return (
      <>
<div className="review-container ">
<div className='ack-info'>
<h1>Reviews</h1>
<p> " Check Our School Reviews from Students and Parents "</p>
</div>
           <div className="review-row " >
           <Slider {...settings} >
            {cards.map((card, index) => (
                <div key={index} className=" review-card" style={{paddingTop:20,paddingBottom:20}}>
                    <span className="icon">{card.icon}</span>
                    <img className="review-image" src={card.imgSrc} alt={card.alt} />
                   <div className='name'> <h3>{card.title}</h3>
                    <p id='parent'>{card.name}</p></div>
                    <p>{card.description}</p>
                    {/* <button>Read More</button> */}
                </div>
            ))}
            </Slider>
           </div>
        </div>
      </> 
  )
}

export default Review