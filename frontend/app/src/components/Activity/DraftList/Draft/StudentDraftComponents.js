import React from 'react';
import PropTypes from 'prop-types';
import styles from './draft.css';
import DraftGoalsDisplay from './DraftGoals/DraftGoalsDisplay';
import StudentReflectionQuestionsDisplay from './StudentReflectionQuestions/StudentReflectionQuestionsDisplay';
import DraftInstructionsDisplay from './DraftInstructionsForm/DraftInstructionsDisplay';

const StudentDraftComponents = ({draft}) => {
  if (!draft) {
    return null;
  }
  return (
    <section className={styles.draftDetails}>
      { draft.goals && (draft.goals.length > 0) ? <DraftGoalsDisplay goals={draft.goals} /> : null }

      <div className={styles.draftDetailsRight}>
        { draft.instructions ? <DraftInstructionsDisplay instructions={draft.instructions} /> : null }

        { draft.studentReflectionQuestions.length > 0
          ? <StudentReflectionQuestionsDisplay questions={draft.studentReflectionQuestions} />
          : null
        }
      </div>
    </section>
  );
};


StudentDraftComponents.propTypes = {
  draft: PropTypes.object
};

export default StudentDraftComponents;
