import React, { Component } from 'react';
import './App.css';
import Home from './home.js'
import Gang from './gang.js'
import Hitemup from './Hitemup.js'
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav>
          <Link to="/">Home Page</Link>{"    "}
          <Link to="/Gang">Gang Page</Link>{"     "}
          <Link to="/Hitemup">Contact Page</Link>{"    "}
        </nav>
          <Route exact path="/" component={Home} />
          <Route path="/Gang" component={Gang} />
          <Route path="/Hitemup" component={Hitemup}/>
        </div>
      </Router>
    );
  }
}

export default App;
