import React from 'react';
import './Panel.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Panel = () => (
  <div className="panel-image">
    <img className="responsive-img" src="/img/news.jpg" alt="Multiple sources of news on a smartphone, tablet, and print."/>
  </div>
);

export default Panel;
