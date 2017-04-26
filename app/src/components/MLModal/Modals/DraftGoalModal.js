import React from 'react';
import PropTypes from 'prop-types';
import MLModal from '../MLModal';
import DraftGoalForm from '../../Activity/DraftGoalForm/DraftGoalForm';

const DraftGoalModal = ({
  closeModal,
  isOpen,
  goals,
  selectedGoals,
  setDraftGoals,
  draftId,
  activityId}) => {
  return isOpen
    ?
    (<MLModal
      title="Select the primary goals of this draft"
      closeModal={closeModal}>
      <p data-id="goal-form-description">
        Select the primary goals you would like students to focus on while they compose this draft.
        You will be able to link your feedback with these goals when you review students' drafts.
      </p>
      <p>
        Select up to 6 <strong>Draft Goals</strong> for each draft
      </p>
      <DraftGoalForm
        goals={goals}
        closeModal={closeModal}
        selectedGoals={selectedGoals}
        setDraftGoals={setDraftGoals}
        activityId={activityId}
        draftId={draftId}
      />
    </MLModal>)
    : null;
};

DraftGoalModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  goals: PropTypes.array.isRequired,
  selectedGoals: PropTypes.array,
  setDraftGoals: PropTypes.func.isRequired,
  draftId: PropTypes.string,
  activityId: PropTypes.string
};

export default DraftGoalModal;
