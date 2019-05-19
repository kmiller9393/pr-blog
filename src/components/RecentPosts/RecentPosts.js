import React from 'react';
import instaPosts from '../../utils/instaPosts';
import './RecentPosts.css';

export default () => (
  <section className="recent-posts">
    <h2 className="recent-header">Recent Instagram Posts</h2>
    <div className="instagram-container">{instaPosts}</div>
  </section>
);
