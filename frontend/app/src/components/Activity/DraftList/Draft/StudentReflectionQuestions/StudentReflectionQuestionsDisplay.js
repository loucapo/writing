import React from 'react';
import PropTypes from 'prop-types';

import styles from './studentReflectionQuestions.css';

const StudentReflectionQuestionsDisplay = ({ questions }) => (
  <div className={styles.container}>
    <section>
      <div className={styles.heading}>
        <div className={styles.title}>
          Reflection Questions
        </div>
      </div>

      <ul data-id="reflections-list">
        {questions.map((question, index) => (
          <li key={index}>
            {`${question.questionType}: ${question.question}`}
          </li>
        ))}
      </ul>
    </section>

  </div>
);

StudentReflectionQuestionsDisplay.propTypes = {
  questions: PropTypes.array
};

export default StudentReflectionQuestionsDisplay;
