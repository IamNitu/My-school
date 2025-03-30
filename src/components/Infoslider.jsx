import React from 'react';
// import image3 from '../assets/image3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap ,faUserGroup ,faTrophy, faBook} from '@fortawesome/free-solid-svg-icons'
function Infoslider() {
  return (
    <><div  className='info-slider'>
        <div className='infoslider'>
       
             {/* <div  className='info-slider'>
            <img src={image3} alt=''></img> 
            </div>  */}
            <div className='background-container' >
            <div className='icons'>
            <div className='icon-para' >
            <FontAwesomeIcon className='font-icons' icon={faGraduationCap}  />
           <h3 >1500+</h3>
           <p>Students</p>
            </div>

            <div className='icon-para'>
            <FontAwesomeIcon className='font-icons' icon={faUserGroup} />
            <h3>400+</h3>
            <p>Teachers</p>
            </div>

            <div className='icon-para'>
            <FontAwesomeIcon className='font-icons' icon={faTrophy} />
            <h3>100+</h3>
            <p>Award Winning</p>
            </div>

            <div className='icon-para'>
            <FontAwesomeIcon className='font-icons' icon={faBook} />
            <h3>100+</h3>
            <p>Fire Safty</p>
            </div>
          
        </div>
       </div>
        </div> 
        </div>
    </>
  )
}

export default Infoslider;