import React, { Component } from 'react';
import './Footer.css';
import { withRouteData } from 'react-static';
import EmailForm from '../EmailForm/EmailForm';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div>
          <h3 className="footer-header">Popular Posts</h3>
        </div>
        <div className="weekly-email">
          <h3 className="footer-header">Weekly Email List</h3>
          <EmailForm addIdea={this.props.addIdea} />
        </div>
      </section>
    );
  }
}
