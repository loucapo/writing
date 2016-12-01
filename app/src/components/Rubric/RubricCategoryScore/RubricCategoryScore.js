import React, {PropTypes} from 'react';
import rubricCategoryScoreCss from './rubricCategoryScore.css';
import uuid from 'uuid';

const RubricCategoryScore = ({scores, selectCell, selections}) => {
  if (!scores || scores.length <= 0) {
    return null;
  }
  return (
    <div className={rubricCategoryScoreCss.column}>
      {
        scores.map((scoreRow, column) => {
          return (
            <div className={rubricCategoryScoreCss.category_score} key={uuid.v4()}>
              {
                scoreRow.map((score, row) => {
                  let classname = rubricCategoryScoreCss.category_item;
                  if (selections[column] === row) {
                    classname += ' ' + rubricCategoryScoreCss.selected;
                  }
                  return (
                    <div
                      data-id="category-score"
                      className={classname}
                      onClick={selectCell.bind(null, row, column)}
                      key={uuid.v4()}
                    >
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
  scores: PropTypes.array,
  selections: PropTypes.array,
  selectCell: PropTypes.func
};

export default RubricCategoryScore;
