const validations = values => {
  let errors = {};

  if (!values.title) {
    errors._error = 'Title is required';
  } else if (values.title.length > 14) {
    errors._error = 'Title must be 14 characters or less';
  }

  return errors;
};

export default validations;
