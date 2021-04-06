import React from 'react';
import './contactform.css';

function ContactForm (props) {
  
  return (
    <div>
      <div className="row pt-4 center-item">
        <div className="contact-text col-xs-12 col-sm-9 col-md-8 col-lg-6 col-xl-6">
        If you have a question or would like to connect,fill the form below.
        You can also message me at <span>akwan.mtl@gmail.com</span> or at <span>514-961-3104</span>.
        </div>
      </div>
      
      <div className="row pt-4 center-item">
        <form className="col-xs-12 col-sm-9 col-md-8 col-lg-6 col-xl-5" onSubmit={props.submitForm}
        action="https://formspree.io/f/xknplpze"
        method="POST"
        >

            <div className="form-group">
                <input type="name" className="form-control" name="name" aria-describedby="contactname" placeholder="Name" onChange={props.handleInputChange} required/>
            </div>

            <div className="form-group">
                <input type="email" className="form-control" name="email" placeholder="Email" onChange={props.handleInputChange} required/>
            </div>

            <div className="form-group">
                <textarea className="form-control" name="message" rows="3" placeholder="Message" onChange={props.handleInputChange} required></textarea>
            </div>
            <div className="div-button">

              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm;