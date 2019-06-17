import React from 'react';
import RecentCard from '../RecentCard/RecentCard';
import { Link } from '@reach/router';
import './RecentPosts.css';

export default props => (
  <section className="recent-posts">
    <h2 className="recent-header">Recent Blog Posts</h2>
    <div className="recent-card-container">
      {props.posts.map(post => (
        <Link
          to={`/post/${post.id}`}
          onClick={() => window.scrollTo(0, 0)}
          key={post.id}
        >
          <RecentCard {...post} />
        </Link>
      ))}
    </div>
  </section>
);
