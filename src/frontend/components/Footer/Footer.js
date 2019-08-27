import React, { Component } from 'react';
import EmailForm from '../EmailForm/EmailForm';
import instagram from '../../images/instagram-light.svg';
import facebook from '../../images/facebook-light.svg';
import linkedin from '../../images/linkedin-light.svg';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="weekly-email">
          <h3 className="footer-header">Subscribe to Receive Updates</h3>
          <EmailForm />
        </div>
        <div className="footer-link-container">
          <a
            href="https://www.instagram.com/kimaleentran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-footer-image"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kimaleentran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-footer-image"
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a
            href="https://www.facebook.com/kimaleen.tran.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-footer-image"
              src={facebook}
              alt="facebook"
            />
          </a>
        </div>
      </section>
    );
  }
}
