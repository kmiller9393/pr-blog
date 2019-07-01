import React from 'react';
import { withRouteData } from 'react-static';
import { Link } from '@reach/router';
import loadPagePosts from '../utils/loadPagePosts';
import scrollToTop from '../utils/scrollToTop';

export default withRouteData(({ posts }) => (
  <div className="blog-container">
    {loadPagePosts(posts).map(post => (
      <Link
        key={post.id}
        to={`/post/${post.id}`}
        className="card"
        onClick={scrollToTop}
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
          <h3 style={{ color: '#2b2b2b', margin: 0 }}>{post.title}</h3>
          <p style={{ color: '#2b2b2b', display: 'flex' }}>
            By {post.author.name}
          </p>
        </div>
      </Link>
    ))}
  </div>
));
