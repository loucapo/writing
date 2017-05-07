import React from 'react';
import PropTypes from 'prop-types';

import styles from './studentReflectionQuestions.css';

const StudentReflectionQuestionsDisplay = ({draft}) => (
  <div className={styles.container}>
    <section>
      <div className={styles.heading}>
        <div className={styles.title}>
          Student Reflection Questions
        </div>
      </div>

      <ul data-id="reflections-list">
        {draft.studentReflectionQuestions.map((question, index) => (
          <li key={index}>
            {`${question.questionType}: ${question.question}`}
          </li>
        ))}
      </ul>
    </section>

  </div>
);

StudentReflectionQuestionsDisplay.propTypes = {
  draft: PropTypes.object
};

export default StudentReflectionQuestionsDisplay;
