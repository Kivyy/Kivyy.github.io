import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container contact-div">
        <div className="social">
          <h1> Contact:</h1>
          <p> Feel free to reach out to me if you have any questions regarding my works.</p>
          <ul>
              <li><a href="mailto:kivlokw@gmail.com"><i className="fa fa-lg fa-google-plus"></i></a></li>
              <li><a href="https://github.com/Kivyy"><i className="fa fa-lg fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/kivlo/"><i className="fa fa-lg fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Contact;
