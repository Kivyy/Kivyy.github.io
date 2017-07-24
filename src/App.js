import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


// Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import Project from './components/pages/projects';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Project} />
            <Route exact path='/contact' component={Contact} />
      </div>
      </Router>
    );
  }
}

export default App;
