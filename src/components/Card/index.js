import React from 'react';
import './card.css';
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/modal.js";

function Card (props) {
  return(
    
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} className="card-img-top" alt={props.name+" Screenshot"}/>
      <div className="card-img-overlay">
        <h3>{props.title}</h3>
        <p>
            {props.tech}
        </p>
        <button type="button" className="btn btn-primary btn-project" data-toggle="modal" data-target={"#"+props.id}>
            Learn more
        </button>
      </div>
      
    </div>

  )
}

export default Card;