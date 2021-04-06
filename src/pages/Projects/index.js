import React from 'react';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import './projects.css'
import ProjectList from '../../assets/projects.json';
import { Element } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

function Projects () {
  
  return(
    <Element id="projects">
     <div className="container-fluid mt-5">
       
     <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
       <Header title="Projects" type="secondary"/>
      </ScrollAnimation>
      <div className="container">
       <div className="row justify-content-center pt-4"> 
       {ProjectList.map((project,index) => (
       <div className="col-xs-12 col-md-6 col-lg-4 projectbox" key={project.image.split(".")[0]}>
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={Math.floor(Math.random()*300)} >
          <Card id={project.image.split(".")[0]} img={project.image} title={project.name} tech={project.tech}/>
          </ScrollAnimation>
         <Modal id={project.image.split(".")[0]} img={project.image} title={project.name} github={project.github} website={project.website} description={project.description} />
         </div>
      ))}
       </div>
       </div>
    </div>
    
    </Element>
  )
}

export default Projects;