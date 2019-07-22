import React from 'react';
import { withRouteData } from 'react-static';
import Markdown from 'react-markdown';

export default withRouteData(({ post }) => (
  <article className="blog-card">
    {post && <h1 className="post-main-title ">{post.title}</h1>}
    {post && (
      <div className="placeholder">
        <img
          alt={post.title}
          src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${
            post.image[0].handle
          }`}
        />
      </div>
    )}
    <div className="blog-content">
      {post && <Markdown source={post.content} />}
    </div>
  </article>
));
