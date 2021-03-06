import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { CriteriaDisplay } from '../index';
import styles from './rubricDisplay.css';

const RubricDisplay = ({ rubric, studentDraftId }) => {
  return (
    <section data-id="rubric-preview" className={styles.rubric}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>{rubric.title}</div>
        <div>1 - Falls Below Expectations</div>
        <div>2 - Nearly Meets Expectations</div>
        <div>3 - Meets Expectations</div>
        <div>4 - Exceeds Expectations</div>
      </header>
      {rubric.criteria.map((criterion) => {
        return (
          <div key={criterion.criterionId} className={styles.row}>
            <div className={styles.heading}>{parser(criterion.title.replace('/', '/<wbr>'))}</div>
            {criterion.rubricLevels.map((level, index) => (
              <CriteriaDisplay
                key={index}
                criterionId={criterion.criterionId}
                score={level.score}
                content={level.content}
                selected={level.selected}
                studentDraftId={studentDraftId}
              />
            ))}
          </div>
        );
      })}
    </section>
  );
};

RubricDisplay.propTypes = {
  rubric: PropTypes.object,
  studentDraftId: PropTypes.string
};

export default RubricDisplay;
