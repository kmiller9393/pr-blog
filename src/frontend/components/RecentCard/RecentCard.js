import React from 'react';
import './RecentCard.css';

export default props => (
  <div
    className="post-card"
    style={{
      backgroundImage: `url("https://media.graphcms.com/${
        props.image[0].handle
      }")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%'
    }}
  >
    <h5 className="recent-text">{props.title}</h5>
  </div>
);
