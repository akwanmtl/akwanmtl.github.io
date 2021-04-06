import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt, faMobileAlt, faSms, faFilePdf, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll"
import './footer.css'
import Resume from '../../assets/Annie_Kwan_Resume.pdf'

function Footer () {
  return (
    <div id="footer" className="container-fluid">    
      <hr/> 
      <div className="inline">
        <div className="icon">
          <a href="https://github.com/akwanmtl" target="_blank"  rel="noopener noreferrer"  title="Github">
          <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>
        
        <div className="icon">
          <a href="https://www.linkedin.com/in/annie--kwan/" target="_blank"  rel="noopener noreferrer"  title="Linkedin">
          <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
        </div>
        
        <div className="icon">
          <a href="mailto:akwan.mtl@gmail.com" target="_blank"  rel="noopener noreferrer" title="Email" >
          <FontAwesomeIcon icon={faAt}/>
          </a>
        </div>
        
        <div className="icon">
          <a href="tel:514-961-3104" target="_blank"  rel="noopener noreferrer" title="Phone">
          <FontAwesomeIcon icon={faMobileAlt}/>
          </a>
        </div>

        <div className="icon">
          <a href="sms:514-961-3104" target="_blank"  rel="noopener noreferrer" title="SMS">
          <FontAwesomeIcon icon={faSms}/>
          </a>
        </div>

        <div className="icon">
        <a href={Resume} target="_blank"  rel="noopener noreferrer" className="cv" title="Resume">
          <FontAwesomeIcon icon={faFilePdf}/>
          </a>
        </div>

      </div>

      <div className="copyright">
      <span>Annie Kwan </span>© 2021
      </div>
      
      <div className="scroll-top">
        <Link smooth={true} to="home">
          <span><FontAwesomeIcon icon={faAngleDoubleUp}/></span>
        </Link>
      </div> 
    </div>
      
  )
}

export default Footer;
