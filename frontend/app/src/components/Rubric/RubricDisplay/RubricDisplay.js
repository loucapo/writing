import React from 'react';
import PropTypes from 'prop-types';
import { CriteriaDisplay } from '../index';
import styles from './rubricDisplay.css';

const RubricDisplay = ({ rubric }) => {
  return (
    <section data-id="rubric-preview" className={styles.rubric}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>{rubric.title}</div>
        <div>1 - Falls Below Expectations</div>
        <div>2 - Nearly Meets Expectations</div>
        <div>3 - Meets Expectations</div>
        <div>4 - Exceeds Expectations</div>
      </header>
      {rubric.criteria.map((criteria) => {
        return (
          <div key={criteria.criteriaId} className={styles.row}>
            <div className={styles.heading}>{criteria.title}</div>
            {criteria.rubricLevels.map((level, index) => (
              <CriteriaDisplay
                key={index}
                criteriaId={criteria.criteriaId}
                score={level.score}
                content={level.content}
                selected={level.selected}
              />
            ))}
          </div>
        );
      })}
    </section>
  );
};

RubricDisplay.propTypes = {
  rubric: PropTypes.object
};

export default RubricDisplay;
