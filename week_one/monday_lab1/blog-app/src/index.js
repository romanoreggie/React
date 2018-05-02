import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Post title={"Soul Searcher"} author={"Reggie Romano"} body={"This is the tale of someone you may know or relate to. So it seems, for now at least. Lend me your most intimate possession for just a short while, your attention is all I seek. Hopefully this story can find home for someone who feels alone left out to roam. I will give you light for even the darkest of nights. They say fall down seven times stand up eight, unfortunately in life you will fall far more than seven times, truthfully falling only seven times would be a good day. Luckily the dream of flying outweighs the incredible fear or falling or even failing rather. In this insight of me you will find plenty of both, even question why I continue on, hold on though you will understand before to long."}
    comments={[
      "Solid post",
      "Very impressive",
      "Intriguing, need to read more",
    ]} />,
  document.getElementById('root')
)
