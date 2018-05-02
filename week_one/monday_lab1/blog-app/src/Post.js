import React, { Component } from 'react';
import logo from './logo.svg';
import './Post.css';
import Comment from './Comment.js'

class Post extends Component {
  render() {
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h4>By {this.props.author}</h4>
      <div>
      <p>{this.props.body}</p>
    </div>
    <h3>Comments:</h3>
    <Comment body={this.props.comments[2]} />
  </div>
    );
  }
}

export default Post;
