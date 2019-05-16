import React from 'react';
import { withRouteData } from 'react-static';

export default withRouteData(({ authors }) => (
  <div>
    {authors.map(author => (
      <div className="about-author" key={author.id}>
        <img
          className="about-avatar"
          alt={author.name}
          src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${
            author.avatar.handle
          }`}
        />
        <h2>Hello my name is {author.name}</h2>
        <p style={{ textAlign: 'center' }}>{author.bibliography}</p>
      </div>
    ))}
  </div>
));
