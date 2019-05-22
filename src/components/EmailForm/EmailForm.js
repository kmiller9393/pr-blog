import React, { Component } from 'react';
import './EmailForm.css';

export default class EmailForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email } = this.state;

    this.props.addIdea(name, email);
  };

  render() {
    const { name, email } = this.state;

    return (
      <form className="email-form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          className="input"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <button className="save-button">Sign Up!</button>
      </form>
    );
  }
}
