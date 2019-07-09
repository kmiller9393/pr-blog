import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './ContactForm.css';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      senderEmail: '',
      subject: '',
      feedback: '',
      formSubmitted: false,
      formEmailSent: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();

    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const receiverEmail = process.env.REACT_APP_EMAILJS_RECEIVER;

    const { senderEmail, feedback } = this.state;

    this.sendFeedback(templateId, senderEmail, receiverEmail, feedback);

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
    emailjs
      .send('mailgun', templateId, {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => this.setState({ formEmailSent: true }))
      .catch(err => console.error('Failed to send email. Error: ', err));
  }

  render() {
    const { senderEmail, firstName, lastName, subject, feedback } = this.state;

    return (
      <form className="contact-form" onSubmit={e => this.handleSubmit(e)}>
        <div className="contact-info">
          <div>
            <input
              className="contact-input"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              placeholder="First Name"
              required
            />
            <input
              className="contact-input"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <input
            className="contact-input"
            id="email-input"
            name="senderEmail"
            value={senderEmail}
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
            name="feedback"
            value={feedback}
            onChange={this.handleChange}
            placeholder="Message"
            required
          />
        </div>
        <button className="contact-info-button">Connect!</button>
      </form>
    );
  }
}
