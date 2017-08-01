import React from 'react';
import PropTypes from 'prop-types';

import styles from './criteria.css';

const Criteria = ({ score, content, selected, criteriaId, rubricScores, setRubricScores }) => {
  const backgroundColor = () => {
    let color;
    switch (score) {
      case '1':
        color = 'red';
        break;
      case '2':
        color = 'orange';
        break;
      case '3':
        color = 'yellow';
        break;
      case '4':
        color = 'green';
    }
    return styles[color];
  };

  const handleClick = event => {
    // Remove previous selected criteria from row if exists.
    let parent = event.target.parentElement;
    let previousSelected = parent.getElementsByClassName('selected')[0];
    if (previousSelected) {
      previousSelected.className = styles.enabled;
      rubricScores = rubricScores.filter(rubricScore => rubricScore.criteriaId !== criteriaId);
    }

    // Add new selected criteria if not same as previous.
    if (event.target !== previousSelected) {
      event.target.classList = `${styles.enabled} selected ${backgroundColor()}`;
      rubricScores.push({ criteriaId, score });
    }

    setRubricScores(rubricScores);
  };

  let className = selected ? `selected ${backgroundColor()}` : '';
  return (
    <div className={`${styles.enabled} ${className}`} onClick={handleClick}>
      {content}
    </div>
  );
};

Criteria.propTypes = {
  score: PropTypes.string,
  content: PropTypes.string,
  selected: PropTypes.bool,
  criteriaId: PropTypes.string,
  rubricScores: PropTypes.array,
  setRubricScores: PropTypes.func
};

export default Criteria;
