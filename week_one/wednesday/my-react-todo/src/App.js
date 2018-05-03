import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import TodosContainer from './containers/TodosContainer';
import Header from './components/Header'
import MyRoutes from './config/routes.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          { MyRoutes }
      </div>
    );
  }
}

export default App;
