import React from 'react';
import PropTypes from 'prop-types';
import {
  MLModal,
  MLCheckboxForm
} from './../../MLComponents/index';

const ReflectionQuestionsSelectorModal = ({
  closeModal,
  isOpen,
  reflectionQuestions,
  selectedQuestions,
  setReflectionQuestions,
  draftId,
  activityId}) => {
  return isOpen
    ?
    (<MLModal
      title="Select reflection questions for this draft"
      closeModal={closeModal}>
      <p data-id="reflection-form-description">
        Customize the following reflection prompts to fit the needs of your assignment.
        Students will submit reflection responses based on your selections after they've completed their draft.
        You can add free response and polling questions.
      </p>
      <MLCheckboxForm
        fields={reflectionQuestions}
        closeModal={closeModal}
        selectedFields={selectedQuestions}
        saveForm={setReflectionQuestions}
        activityId={activityId}
        draftId={draftId}
      />
    </MLModal>)
    : null;
};

ReflectionQuestionsSelectorModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  reflectionQuestions: PropTypes.array.isRequired,
  selectedQuestions: PropTypes.array.isRequired,
  setReflectionQuestions: PropTypes.func.isRequired,
  draftId: PropTypes.string,
  activityId: PropTypes.string
};

export default ReflectionQuestionsSelectorModal;
