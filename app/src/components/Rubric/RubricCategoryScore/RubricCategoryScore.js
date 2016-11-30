import React, {PropTypes} from 'react';
import rubricCategoryScoreCss from './rubricCategoryScore.css';

const RubricCategoryScore = ({scores}) => {
  if (!scores || scores.length <= 0) {
    return null;
  }
  return (
    <div className={rubricCategoryScoreCss.column}>
      { scores.map(scoreRow => (
        <div className={rubricCategoryScoreCss.category_score}>
          { scoreRow.map(score => (
            <div data-id="category-score" className={rubricCategoryScoreCss.category_item}>
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
