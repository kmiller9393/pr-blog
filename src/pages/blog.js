import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';
import { goToTop } from 'react-scrollable-anchor';
import reversePosts from '../frontend/utils/reversePosts';

export default withRouteData(({ posts }) => (
  <div className="blog-container">
    {reversePosts(posts).map(post => (
      <Link
        key={post.id}
        to={`/post/${post.id}`}
        className="card"
        onClick={goToTop}
      >
        <div style={{ paddingRight: '1rem' }}>
          <img
            alt={post.title}
            className="card-img"
            src={`https://media.graphcms.com/resize=w:170,h:150,fit:crop/${
              post.image[0].handle
            }`}
          />
        </div>
        <div>
          <h3
            className="post-title"
            style={{ color: '#2b2b2b', margin: 0, textAlign: 'center' }}
          >
            {post.title}
          </h3>
        </div>
      </Link>
    ))}
  </div>
));
