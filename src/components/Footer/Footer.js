import React from 'react';
import './Footer.css';
import { withRouteData } from 'react-static';

export default withRouteData(({ post }) => (
  <section className="footer">
    <h5 className="footer-header">Popular Posts</h5>
    <h5 className="footer-header">Weekly Email List</h5>
    <h5 className="footer-header">Contact</h5>
  </section>
));
