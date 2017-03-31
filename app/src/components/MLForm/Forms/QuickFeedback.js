import React from 'react';
import {Field} from 'redux-form';
import FormWrapper from '../MLFormWrapper';

const QuickFeedbackForm = () => {
  const builderDescription = "Quick Feedback addresses common mechanical errors and provides pre-defined help and resources for the student. Instructors can select Quick Feedback from the Feedback Tool comments menu to be visible as highlighted comments on the student's paper.";

  return (
    <FormWrapper title="Quick Feedback" description={builderDescription}>

      <label htmlFor="title">Quick Feedback Title</label>
      <Field
        name="title"
        placeholder="Untitled Quick Feedback"
        component="input"
      />

      <label htmlFor="comment">Description</label>
      <em>Short pre-defined comment or "blurb" to appear in comment flag upon adding.</em>
      <Field
        name="comment"
        component="textarea"
      />

    </FormWrapper>
  );
};

export default QuickFeedbackForm;

