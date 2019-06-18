import React, { Component } from 'react';
import './Footer.css';
import EmailForm from '../EmailForm/EmailForm';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="weekly-email">
          <h3 className="footer-header">Subscribe to Receive Updates</h3>
          <EmailForm addIdea={this.props.addIdea} />
        </div>
      </section>
    );
  }
}
