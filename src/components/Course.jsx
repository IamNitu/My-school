import React from 'react';
import Footer from './Footer';
function Course() {

const cards=[
        {
          imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZfOPpD8TES9LYS2S_KF057K5ptvLP479cQ&s',
            title:'Web Technology',
         description:'Learn programming language to create, maintain & interact with websites/web applications including project design, layout, coding and functionality.',
     },
        {imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtT3kWoq7kDESnM9RcOaVJ4Dv0gEn9aZk9Q&s',
             title:'Network Security',
         description:'Learn security controls, policies, processes and practices adopted to prevent, detect and monitor unauthorized access.',
     },
        {imgsrc:'https://res.cloudinary.com/talend/image/upload/w_1376/q_auto/qlik/glossary/data-warehouse/seo-hero-data-warehouse_ozwwh3.png',
            title:'Data Warehousing',
         description:'Learn how data are stored in an electronic system in a manner that is secure, reliable, easy to retrieve, and easy to manage.',
     },
         
     ];
const data=[
        {
          imgsrc:'https://www.ncetm.org.uk/media/hcpd520p/teacher-in-classroom-with-primary-aged-children.jpg',
            title:'Primary Level',
         description: [
            " English",
            " Science",
            " Mathematics",
            " Arts & Craft",
        ]
     },
        {imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFJsWbVZRn5eltlqUWjllYPzPFNdl9l5XMQ&s',
             title:'Lower Secondary Level',
         description:[ 
            " Mathematics",
            " Social Studies",
            " Computing",
            " Environment,Population & Health"
           
         ],
     },
        {imgsrc:'https://i.pinimg.com/474x/ce/3d/b7/ce3db757a05edff87008f532e9231015.jpg',
            title:'Secondary level',
         description:[
            " science",
            " Optional Maths",
            " Accounting ",
            " Economics"
         ]
     },
         
     ];

 return (
    <>
        <div className='course-container'>
        <div className='course'>

<h1 >Our Courses</h1>
<p style={{fontSize:'17px'}}>Start Your Journey with Our Selected Courses for You.</p>

        </div>
        <div className='course.component'>
        <div className='mapping-course'>
            {data.map((card,index)=>(
                <div className='coursecontent' key={index}>
                <span style={{background:'none'}}>
                    <img className="courseimage" src={card.imgsrc} alt={card.alt} /></span>
                <div className='mappingcontent'> <h3 >{card.title}</h3></div>

    {/* <ul className='description-list'>{card.description.map((subject,idx)=>(
        <li key={idx}>{subject}</li>
    ))}</ul> */}

    <ul className='description-list'>
                {Array.isArray(card.description)
                    ? card.description.map((subject, idx) => <li key={idx}>{subject}</li>)
                    : <li>{card.description}</li>}
            </ul>

                </div>
            ))}
        </div>

<div className='vayo'>

        <h3 style={{textAlign:'center',fontSize:'25px',paddingTop:'14px'}}>Our Popular Courses</h3>
        <p style={{textAlign:'center',fontSize:'17px',paddingTop:'14px'}}>"Check out the additional courses offered to enhance student learning"</p></div>
        <div className='mapping-course'>
            {cards.map((card,index)=>(
                <div className='coursecontent' key={index}>
                <span style={{background:'none'}}>
                    <img className="courseimage" src={card.imgsrc} alt={card.alt} /></span>
                <div className='mappingcontent'> <h3 >{card.title}</h3></div>
                <p style={{background:'none'}}>{card.description}</p>
                <button className="learn-more-btn" >Learn More</button>
                </div>
            ))}
        </div>
        
        </div>

        <Footer/>
        </div>
    </>
  )
}

export default Course;