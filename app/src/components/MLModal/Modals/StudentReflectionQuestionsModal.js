import React, {PropTypes} from 'react';
import MLModal from '../MLModal';
import CheckboxForm from '../../MLCheckboxForm/MLCheckboxForm';

const ReflectionQuestionsModal = ({
  closeModal,
  isOpen,
  studentReflectionQuestions,
  selectedQuestions,
  setStudentReflectionQuestions,
  draftId,
  activityId}) => {
  return isOpen
    ?
    (<MLModal
      title="Select reflection questions for this draft"
      closeModal={closeModal}>
      <p>
        Customize the following reflection prompts to fit the needs of your assignment.
        Students will submit reflection responses based on your selections after they've completed their draft.
        You can add free response and polling questions.
      </p>
      <CheckboxForm
        fields={studentReflectionQuestions}
        closeModal={closeModal}
        selectedFields={selectedQuestions}
        saveForm={setStudentReflectionQuestions}
        activityId={activityId}
        draftId={draftId}
      />
    </MLModal>)
    : null;
};

ReflectionQuestionsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  studentReflectionQuestions: PropTypes.array.isRequired,
  selectedQuestions: PropTypes.array.isRequired,
  setStudentReflectionQuestions: PropTypes.func.isRequired,
  draftId: PropTypes.string,
  activityId: PropTypes.string
};

export default ReflectionQuestionsModal;
