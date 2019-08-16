import React from 'react';
import { withRouteData } from 'react-static';
import Markdown from 'react-markdown';
import Navbar from '../frontend/components/Navbar/Navbar';
import Footer from '../frontend/components/Footer/Footer';

export default withRouteData(({ post }) => (
  <article className="blog-post">
    <Navbar />
    {post && <h1 className="post-main-title">{post.title}</h1>}
    {post && (
      <img
        alt={post.title}
        className="post-image"
        src={`https://media.graphcms.com/${post.image[0].handle}`}
      />
    )}
    <div className="blog-content">
      {post && <Markdown source={post.content} />}
    </div>
    <Footer />
  </article>
));
