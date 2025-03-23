import React from 'react'
import HomePage from './HomePage';
import Herosection from './Herosection';
import Quickquery from './Quickquery';
import Infoslider from './Infoslider';
import Acknowledge from './Acknowledge';
import TeamMembers from './TeamMembers';
import Review from './Review';
import Footer from './Footer';

 function Home() {
  return (<div>
    <HomePage/>
    <Herosection/>
    <Quickquery/>
    <Infoslider/>
    <Acknowledge/>
    <TeamMembers/>
    <Review/>
    <Footer/>
    </div>
  )
}

export default Home;