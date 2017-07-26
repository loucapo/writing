import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Criteria/criteria.css';

const CriteriaDisplay = ({ score, content, selected }) => {
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

  let className = selected ? `selected ${backgroundColor()}` : '';
  return (
    <div className={className}>
      {content}
    </div>
  );
};

CriteriaDisplay.propTypes = {
  score: PropTypes.string,
  content: PropTypes.string,
  selected: PropTypes.bool,
  setRubricScores: PropTypes.func
};

export default CriteriaDisplay;
