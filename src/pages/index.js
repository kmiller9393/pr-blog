import React from 'react';
import { withRouteData } from 'react-static';
import RecentPosts from '../components/RecentPosts/RecentPosts';
import Footer from '../components/Footer/Footer';

export default () => (
  <section className="home-container">
    <article className="image-container">
      <div className="banner-image" />
      <h2 className="banner-text">I Love Experiencing Special Moments</h2>
      <h2 className="banner-text-1">And Helping People Do The Same.</h2>
    </article>
    <RecentPosts />
    <Footer />
  </section>
);
