import React, { Component } from 'react';
import './ContactForm.css';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      subject: '',
      message: '',
      formSubmitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      this.setState({
        email: '',
        subject: '',
        message: '',
        formSubmitted: true
      });
    } catch (err) {
      this.setState({
        formSubmitted: false
      });
      throw err;
    }
  };

  render() {
    const { email, subject, message } = this.state;

    return (
      <form className="contact-form" onSubmit={e => this.handleSubmit(e)}>
        <div className="contact-info">
          <input
            className="contact-input"
            id="email-input"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email Address"
            required
          />
          <input
            className="contact-input"
            id="subject-input"
            name="subject"
            value={subject}
            onChange={this.handleChange}
            placeholder="Subject"
            required
          />
          <textarea
            className="contact-message"
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="Message"
            required
          />
        </div>
        <button className="contact-info-button">Send!</button>
      </form>
    );
  }
}
