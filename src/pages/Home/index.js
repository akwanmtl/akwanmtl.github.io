import React  from 'react';
import profilepic from "../../assets/profilepic.png";
import './home.css';
import { Element } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

function Home () {

  return(
    <Element id="home" className="container">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className='text-center mt-5'>
        <h1 className="intro">Hi, I'm Annie Kwan.</h1>

        <img src={profilepic} alt="Annie Kwan" className="profile-pic img-fluid"></img>
        </div>
        <div className='home-bio'>
        Full stack web developer. 
        </div>
        <div className='home-bio pb-5'>
        </div>
      </ScrollAnimation>
    </Element>
  )
}

export default Home;