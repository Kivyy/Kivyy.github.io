import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-div">
        <div className="container about-inner-div">
        <div className="row">
        <div>
            <div>
                <img className="pull-left" src="https://image.ibb.co/crL705/professional_headshot.jpg" />
            </div>
        </div>
          <div className="col-md-7 mb-r">
            <h1>Hey there, I am Kiv. A Full-Stack Web Developer</h1>
              <p>I have always considered myself a very artistic person but due to the constraints set by society, pursuing an art related degree was never an option for me and it remained a hobby. At the previous company I worked for, a software engineering colleague of mine introduced programming to me.He encouraged me to take several free online courses to start learning on my own. As I was learning to code during that time, I came to the realization that programming is a form of art and that I could use it to creatively build beautiful and meaningful things. So I took a leap of faith by quitting my office job and attended an intensive programming bootcamp to follow my passion.</p>
            </div>
        </div>
        </div>
      </div>
    );
  }
}


export default About;
