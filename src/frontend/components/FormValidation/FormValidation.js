import React from 'react';
import { useMutation } from 'graphql-hooks';

const CREATE_SUBSCRIBER_MUTATION = `
mutation CreateSubscribe($userEmail: String!) {
  createSubscribe(data: { userEmail: $userEmail }) {
    id
    createdAt
    userEmail
  }
}
`;

const FormValidation = (initialState, validate) => {
  const [value, setValue] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [createSubscribe] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = event => {
    event.persist();
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(value);
    setErrors(validationErrors);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userEmail = value.email;
    const validationErrors = validate(value);
    setErrors(validationErrors);
    setSubmitting(true);

    createSubscribe({ variables: { userEmail } });
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    value,
    errors,
    isSubmitting
  };
};

export default FormValidation;
