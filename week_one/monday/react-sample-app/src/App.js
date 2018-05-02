import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render () {
    return (
      <div>
      <h1>Hello {this.props.name}</h1>
      <h3>You are {this.props.age}</h3>
    </div>
    )
  }
}

export default Hello;
