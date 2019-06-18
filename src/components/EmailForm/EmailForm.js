import React, { Component } from 'react';
import './EmailForm.css';

export default class EmailForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email } = this.state;

    this.props.addIdea(email);
  };

  render() {
    const { email } = this.state;

    return (
      <form className="email-form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <button className="subscribe-button">Subscribe!</button>
      </form>
    );
  }
}
