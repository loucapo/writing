import React, {PropTypes} from 'react';
import rubricCategoryScoreCss from './rubricCategoryScore.css';
import uuid from 'uuid';

const RubricCategoryScore = ({scores}) => {
  if (!scores || scores.length <= 0) {
    return null;
  }
  return (
    <div className={rubricCategoryScoreCss.column}>
      { scores.map(scoreRow => (
        <div className={rubricCategoryScoreCss.category_score} key={uuid.v4()}>
          { scoreRow.map(score => (
            <div key={uuid.v4()} data-id="category-score" className={rubricCategoryScoreCss.category_item}>
              { score }
            </div>
            )
          )}
        </div>)
      )}
    </div>
  );
};

RubricCategoryScore.propTypes = {
  scores: PropTypes.array
};

export default RubricCategoryScore;
