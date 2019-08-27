import React from 'react';
import FormValidation from '../FormValidation/FormValidation';
import validateAuth from '../../utils/validateAuth';
import './EmailForm.css';

const INITIAL_STATE = {
  email: ''
};

const EmailForm = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    value,
    errors,
    isSubmitting
  } = FormValidation(INITIAL_STATE, validateAuth);

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className={errors.email ? 'email-input error-input' : 'email-input'}
        name="email"
        value={value.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Email Address"
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="subscribe-button"
      >
        Subscribe!
      </button>
    </form>
  );
};

export default EmailForm;
