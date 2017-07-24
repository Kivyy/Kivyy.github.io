import React, { Component } from 'react';
import FlipCard from 'react-flipcard';


class Project extends Component {
  render() {
    return (
        <div className="row project-div">
        <div className="jumbotron jumbotron-fluid project-title">
        <div className="container">
          <h1 className="display-1">Projects: </h1>
        </div>
        </div>
        <div className="cardie-one">
          <FlipCard>
          <div className="card card-one">
            <img className="card-img-top" src="https://preview.ibb.co/dLL0Nk/skill_up_icon.png"/>
            <div className="card-block">
              <h4 className="card-title"><strong>Skill-UP</strong></h4>
              <p className="card-text">A web application where users are able to network and exchange professional skills with other users by using the integrated apprenticeship system.</p>
            </div>
          </div>
          <div className="card-back">
              <h4 className="card-title"><strong>Technologies used:</strong></h4>
              <ul className="list-group">
                <li className="list-group-item glyphicon glyphicon-expand">Ruby </li>
                <li className="list-group-item glyphicon glyphicon-expand">Ruby on Rails</li>
                <li className="list-group-item glyphicon glyphicon-expand">Javascript</li>
                <li className="list-group-item glyphicon glyphicon-expand">JQuery/Ajax</li>
                <li className="list-group-item glyphicon glyphicon-expand">Bootstrap</li>
              </ul>
              <a href="http://tutor-skill.herokuapp.com/" className="btn btn-success">Website</a>
              <a href="https://github.com/Kivyy/skill-up" className="btn btn-success">Github</a>
          </div>
          </FlipCard>
          </div>
          <div className="cardie">
            <FlipCard>
            <div className="card card-one">
              <img className="card-img-top" src="https://image.ibb.co/hJVLoQ/fooji_icon.png"/>
              <div className="card-block">
                <h4 className="card-title"><strong>Fooji</strong></h4>
                <p className="card-text">A Facebook messengers chatbot that allows users to use emojis to search and order food from local restaurants.</p>
              </div>
            </div>
            <div className="card-back">
                <h4 className="card-title"><strong>Technologies used:</strong></h4>
                <ul className="list-group">
                  <li className="list-group-item glyphicon glyphicon-expand">Javascript</li>
                  <li className="list-group-item glyphicon glyphicon-expand">Facebook Messenger SDK</li>
                  <li className="list-group-item glyphicon glyphicon-expand">PubNub block SDK</li>
                  <li className="list-group-item glyphicon glyphicon-expand">Yelp API</li>
                </ul>
                <a href="https://github.com/Kivyy/Fooji" className="btn btn-success">Github</a>
            </div>
            </FlipCard>
            </div>

            <div className="cardie">
              <FlipCard>
              <div className="card card-one">
                <img className="card-img-top" src="https://image.ibb.co/eKBeF5/closeuphp_icron.png"/>
                <div className="card-block">
                  <h4 className="card-title"><strong>CloseupHP</strong></h4>
                  <p className="card-text">This project utilizes  the Weather channel's API, Spotify's API and iQuotes  API  and congregates the information to customize a homepage for users.</p>
                </div>
              </div>
              <div className="card-back">
                  <h4 className="card-title"><strong>Technologies used:</strong></h4>
                  <ul className="list-group">
                    <li className="list-group-item glyphicon glyphicon-expand">Ruby</li>
                    <li className="list-group-item glyphicon glyphicon-expand">Ruby Sinatra</li>
                    <li className="list-group-item glyphicon glyphicon-expand">Javascript</li>
                    <li className="list-group-item glyphicon glyphicon-expand">JQuery/Ajax</li>
                    <li className="list-group-item glyphicon glyphicon-expand">Spotify API</li>
                    <li className="list-group-item glyphicon glyphicon-expand">Iquote API</li>
                    <li className="list-group-item glyphicon glyphicon-expand">WeatherChannel API</li>
                  </ul>
                  <a href="http://closeuphp.herokuapp.com/" className="btn btn-success">Website</a>
                  <a href="https://github.com/Kivyy/upclosehp" className="btn btn-success">Github</a>
              </div>
              </FlipCard>
              </div>

              <div className="cardie">
                <FlipCard>
                <div className="card card-one">
                  <img className="card-img-top" src="https://image.ibb.co/b6H3a5/breaking_lab.png"/>
                  <div className="card-block">
                    <h4 className="card-title"><strong>BreakingLab</strong></h4>
                    <p className="card-text">BreakingLab is a site that allows scientists to run tests and create hypotheses based on proposals posed by lab staff.</p>
                  </div>
                </div>
                <div className="card-back">
                    <h4 className="card-title"><strong>Technologies used:</strong></h4>
                    <ul className="list-group">
                      <li className="list-group-item glyphicon glyphicon-expand">Ruby </li>
                      <li className="list-group-item glyphicon glyphicon-expand">Ruby on Rails</li>
                      <li className="list-group-item glyphicon glyphicon-expand">Javascript</li>
                      <li className="list-group-item glyphicon glyphicon-expand">JQuery/Ajax</li>
                      <li className="list-group-item glyphicon glyphicon-expand">Bootstrap</li>
                    </ul>
                    <a href="http://breakinglabs.herokuapp.com/" className="btn btn-success">Website</a>
                    <a href="https://github.com/Kivyy/breakinglab" className="btn btn-success">Github</a>
                </div>
                </FlipCard>
                </div>
        </div>
    );
  }
}

export default Project;
