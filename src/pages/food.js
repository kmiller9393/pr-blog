import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';
import { goToTop } from 'react-scrollable-anchor';
import reversePosts from '../frontend/utils/reversePosts';

export default withRouteData(({ posts }) => (
  <div>
    <h1 className="post-header">Food</h1>
    <div className="blog-container">
      {reversePosts(posts).map(post => (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
          className="card"
          onClick={goToTop}
          style={{
            backgroundImage: `url("https://media.graphcms.com/${
              post.image[0].handle
            }")`
          }}
        >
          <div className="overlay" />
          <h1 className="post-title">{post.title}</h1>
          <h2 className="sub-header">View Post</h2>
        </Link>
      ))}
    </div>
  </div>
));
