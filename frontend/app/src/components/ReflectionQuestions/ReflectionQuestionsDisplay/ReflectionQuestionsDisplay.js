import React from 'react';
import PropTypes from 'prop-types';

import styles from './reflectionQuestionsDisplay.css';

const ReflectionQuestionsDisplay = ({ reflectionQuestions }) => {

  return reflectionQuestions.length > 0
    ? (<div className={styles.container}>
      <section>
        <div className={styles.heading}>
          <div className={styles.title}>
            Reflection Questions
          </div>
        </div>

        <ul data-id="reflections-list">
          {reflectionQuestions.map((question, index) => (
            <li key={index}>
              {`${question.questionType}: ${question.question}`}
            </li>
          ))}
        </ul>
      </section>
    </div>)
    : null;
};

ReflectionQuestionsDisplay.propTypes = {
  reflectionQuestions: PropTypes.array
};

export default ReflectionQuestionsDisplay;
