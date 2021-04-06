import React  from 'react';
import './skills.css';
import Header from '../../components/Header';
import { Element } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import Typed from 'react-typed';
import LogoList from '../../assets/logo.json';


function Skills () {

  return(
    <Element id="skills" > 
      <div className="container  mt-5">
        
    <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
        <Header title="Skills" type="primary"/>
        </ScrollAnimation>
        <div className="container skill-container">
        <div className="row skill-box">
          {LogoList.map((logo,index) => (
            <div className="skill-icon" key={`logo-${index}`}>
              
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
              <img src={`${process.env.PUBLIC_URL}/logo/${logo}`} alt={logo}/>
              </ScrollAnimation>
            </div>
          ))}
          
        </div>
        
        </div>
        
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
        <div className='skill-text text-center'>
          I have expertise in&nbsp;
        <span>
        <Typed
            strings={["HTML." ,"CSS.", "JavaScript.", "JQuery." , "Bootstrap." ,"Node.", "Express.", "React.", "MySQL.", "MongoDB."]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          </span>
        </div>  
      </ScrollAnimation>
      </div>
    </Element>
  )
}

export default Skills;