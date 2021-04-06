import React from 'react';
import './navbar.css';
import { Link } from "react-scroll";
import "bootstrap/js/src/collapse.js";
import logo from '../../assets/logo.png';

function Nav () {

  return (
  
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="navbar-brand">
          
          <Link smooth={true} to="home">
            <img src={logo} alt='Annie Kwan Initial' className='logo'/>
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link smooth={true} activeClass="active" spy={true} to="home" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link smooth={true}  activeClass="active" spy={true} to="about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link smooth={true}  activeClass="active" spy={true} to="skills" className="nav-link">
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} activeClass="active" spy={true} to="projects" className="nav-link">
              Portfolio
              </Link>
            </li>
            
            <li className="nav-item">
              <Link smooth={true}  activeClass="active" spy={true} to="contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav;