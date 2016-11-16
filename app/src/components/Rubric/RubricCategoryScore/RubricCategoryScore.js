import React, {PropTypes} from 'react';

import rubricCategoryScoreCss from './rubricCategoryScore.css';

const RubricCategoryScore = ({scores}) => {
  if (!scores || scores.length <= 0) {
    return null;
  }
  return (
    <div className={rubricCategoryScoreCss.column}>
      {
        scores.map((scoreRow, idx) => {
          console.log(idx);
          return (
            <div className={rubricCategoryScoreCss.category_score}>
              {
                scoreRow.map((score, idx) => {
                  console.log(idx);
                  return (
                    <div className={rubricCategoryScoreCss.category_item}>
                      { score }
                    </div>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
};

RubricCategoryScore.propTypes = {
  scores: PropTypes.array
};


export default RubricCategoryScore;
