import React from 'react';
import { withRouteData } from 'react-static';

export default withRouteData(({ homes }) => (
  <div className="container">
    {homes.map(home => (
      <div className="image-container">
        <img
          className="home-image"
          src={`https://media.graphcms.com/${home.image.handle}`}
          alt="kimaleen tran"
        />
        <h2>{home.opening}</h2>
      </div>
    ))}
  </div>
));
