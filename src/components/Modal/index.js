import React from 'react';
import "bootstrap/js/src/modal.js";
import './modal.css'

function Modal (props) {
  return (
    <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby={props.id} aria-hidden="true">
    <div className="modal-dialog" role="document" >
      
    <div className="modal-content">

            <div className="modal-body">
            
        <img src={`${process.env.PUBLIC_URL}/images/${props.img}`}  alt={props.title+" Screenshot"} className="img-fluid col-12 imageModal"/>
        
          <div className="modalText">
            
                
                <h4>{props.title}</h4>
                <p>
                  {props.description}
                </p>
                <div className="modalLink">
                <a href={props.github} className="btn btn-primary" target="_blank"  rel="noopener noreferrer"  role="button">Github</a>
                <a href={props.website} className="btn btn-primary" target="_blank"  rel="noopener noreferrer" role="button">Website</a>
                
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
                </div>
            </div>
            </div>
          </div>
      </div>         
  )
}

export default Modal;