import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.css';
import Header from '../../components/Header';
import { Element } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import Resume from '../../assets/Annie_Kwan_Resume.pdf';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


function About () {

  return(
    <Element id="about" > 
    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
      <div className="container  mt-5">
        <Header title="About Me" type="secondary"/>
        <div className="pt-4">
          <div className='profile-bio'>
          I'm a full stack web developer with a vast experience in customer support and troubleshooting. Originally from Montréal, I'm presently based in Toronto. Recently graduated from Coding Bootcamp at University of Toronto, I have gained skills in full stack development and highly proficient in ReactJS, Express, NodeJS, Express, JavaScript, MongoDB, MySQL, and much more.
          </div>
          <div className='profile-bio'>
          I have always had an interest in developing applications that simplify tasks. Prior to the Bootcamp, I have built a website with a goal to make language-exchange more interactive and a Matlab-based GUI to visualize and analyze data. Now, I have gained more knowledge and skills and have built applications geared towards aspiring cooks, book lovers and developers to further expand their interests. 
          </div>
          <div className='profile-bio'>
          When you don't find me working, you can find me in the kitchen baking sweet treats or outside enjoying a nice long walk. I also enjoy playing video games, in particular, Smash Bros and I'm always looking for a friendly competition.
          </div>      
          </div>

          <div className="row about-row">
            
          <div className="col-md-4 mt-2"> 
              <a className="btn btn-primary about-btn" href="https://www.github.com/akwanmtl" target="_blank"  rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}/> Github
              </a>
            </div>
            <div className="col-md-4 mt-2"> 
              <a className="btn btn-primary about-btn" href="https://www.linkedin.com/in/annie--kwan/" target="_blank"  rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn}/> Linkedin
              </a>
            </div>
            <div className="col-md-4 mt-2" > 
              <a className="btn btn-primary about-btn" href={Resume} target="_blank"  rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFilePdf}/> Resume
              </a>
            </div>
          </div>
      </div>
      
      </ScrollAnimation>
    </Element>
  )
}

export default About;