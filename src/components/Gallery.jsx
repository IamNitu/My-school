import React,{useState} from 'react'
import Footer from './Footer';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import LightGallery from 'lightgallery/react';


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


function Gallery() {

  const [activeCategory, setActiveCategory] = useState('All');

  const onInit = () => {
    console.log('lightGallery has been initialized');
};

const handleCategoryClick = (category) => {
  setActiveCategory(category);
};


const images=[
  
  {
    category:'Events',
    imgsrc:'https://i.pinimg.com/474x/a1/32/d7/a132d7289a6fc03fa9634a7535fdef49.jpg',
  },
  {
    category:'Posters',
    imgsrc:'https://i.pinimg.com/474x/78/97/a0/7897a0f33bf3ee16c6cd18102f86c95f.jpg',
  },
  {
    category:'Field Visit',
    imgsrc:'https://i.pinimg.com/474x/96/32/25/963225fb3ec4ccf54648edd453076db4.jpg',
  },
  {
    category:'Field Visit',
    imgsrc:'https://i.pinimg.com/474x/77/4d/96/774d96f5aa3ed601ccc7cd86d9877dc4.jpg',
  },
  {
    category:'Posters',
    imgsrc:'https://i.pinimg.com/474x/a6/3a/19/a63a19d854eda40041c3d475664720b5.jpg',
  },
  {
    category:'Posters',
    imgsrc:'https://i.pinimg.com/474x/be/2d/0c/be2d0cc5620743c79014df47a1863145.jpg',
  },
  {
    category:'Field Visit',
    imgsrc:'https://i.pinimg.com/474x/05/01/7d/05017dbfe3f455dabb81afc1ccb39b53.jpg',
  },
  {
    category:'Posters',
    imgsrc:'https://i.pinimg.com/474x/a6/17/45/a6174540eb90fc05fe272cbce9a6ea47.jpg',
  },
  {
    category:'Events',
    imgsrc:'https://i.pinimg.com/474x/5c/c1/3e/5cc13e841882bc41702b35098d1d14df.jpg',
  },
  {
    category:'Field Visit',
    imgsrc:'https://i.pinimg.com/474x/91/7c/81/917c816fefb676aa3613a50c7a4986a8.jpg',
  },
  {
    category:'Posters',
    imgsrc:'https://i.pinimg.com/474x/a1/d8/42/a1d8423e7a8501f5ff1c286c63dd44e3.jpg',
  },
  {
    category:'Posters',
    imgsrc:'https://i.pinimg.com/474x/4f/22/2e/4f222ec9504f9dbc0ee8df98cbd0c1a9.jpg',
  },
  {
    category:'Posters',
    imgsrc:'https://i.pinimg.com/474x/06/6b/a5/066ba50bed75c878e0f07083cfe9271b.jpg',
  },
{
  category:'Events',
  imgsrc:'https://i.pinimg.com/474x/38/4b/8c/384b8c09ff2c6749a4475c2955ee9053.jpg',
},
{
  category:'Events',
  imgsrc:'https://i.pinimg.com/474x/3a/d0/cd/3ad0cdeb18191767b9d00ca228a707d7.jpg',
},
{
  category:'Posters',
  imgsrc:'https://i.pinimg.com/736x/e8/8e/7f/e88e7f5988d612a6f66bcde9b00b4d7b.jpg',
},
{
  category:'Events',
  imgsrc:'https://i.pinimg.com/474x/6f/49/a1/6f49a10811ea7529eec4293e7d6af0ec.jpg',
},
{
  category:'Events',
  imgsrc:'https://i.pinimg.com/474x/07/59/8a/07598ad231e17bd3e4128dc1c6692364.jpg',
},
{
  category:'Events',
  imgsrc:'https://i.pinimg.com/474x/58/5c/e5/585ce5b32ed24dd07f8ae6c2b900aefa.jpg',
},
{
  category:'Events',
  imgsrc:'https://i.pinimg.com/474x/ce/df/37/cedf37336a3ac1bbc7c6d0df11592978.jpg',
},


];



// Filter images based on selected category
const filteredImages = images.filter(image => 
  activeCategory === 'All' || image.category === activeCategory
);




  return (
    <>
<div className='maingallery'>
  <div className='gallaryimg' >
<img src={image2} alt='' style={{ width:'100%', height:"450px",background:'cover',opacity:0.9}}  />
<div className='gallery-about'>
<h1 style={{background:'none',paddingBottom:'10px',fontSize:'30px'}}>School Gallery</h1>
    <p style={{background:'none',cursor: 'pointer',fontSize:'20px'}}>Home{' > '}Gallery</p>
</div>
  </div>

  <div className='gallarycomponent'>
  <h1 style={{textAlign:'center',padding:'20px',background:'cadetblue',width:'100%'}}>" SCHOOL GALLERY "</h1>
  <div className='view-all-images'>
<button className='btn-warning'  onClick={() => handleCategoryClick('All')} >All</button>
<button className='btn-warning'  onClick={() => handleCategoryClick('Events')}  >Events</button>
<button className='btn-warning'  onClick={() => handleCategoryClick('Field Visit')}  >Field Visit</button>
<button className='btn-warning'  onClick={() => handleCategoryClick('Posters')}  >Posters</button>
  </div>
  <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
{filteredImages.map((image, index) => (
  <a href={image.imgsrc} key={index} style={{background:'none'}}>
    <img src={image.imgsrc} alt="Gallery Image"  className='imggal' style={{ width: "220px", margin: "10px",borderRadius:'10px'}} />
  </a>
))}
            </LightGallery>
        </div>
  </div>

  <div className='gallaryfooter'>
<Footer/>
  </div>
</div>
    </>
  )
}

export default Gallery;




