import React, { Component } from 'react';
import './ContactForm.css';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, firstName, lastName, subject, message } = this.state;

    return (
      <form className="contact-form">
        <div className="contact-info">
          <div>
            <input
              className="contact-input"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              placeholder="First Name"
            />
            <input
              className="contact-input"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
            />
          </div>
          <input
            className="contact-input"
            id="email-input"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email Address"
          />
          <input
            className="contact-input"
            id="subject-input"
            name="subject"
            value={subject}
            onChange={this.handleChange}
            placeholder="Subject"
          />
          <textarea
            className="contact-message"
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="Message"
          />
        </div>
        <button className="contact-info-button">Connect!</button>
      </form>
    );
  }
}
