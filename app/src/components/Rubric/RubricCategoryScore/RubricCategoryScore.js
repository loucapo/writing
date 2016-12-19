import React, {PropTypes} from 'react';
import rubricCategoryScoreCss from './rubricCategoryScore.css';
import uuid from 'uuid';

const colorClassNames = [
  rubricCategoryScoreCss.category_item_green,
  rubricCategoryScoreCss.category_item_yellow,
  rubricCategoryScoreCss.category_item_orange,
  rubricCategoryScoreCss.category_item_red
];

const RubricCategoryScore = ({scores, selectCell, selections}) => {
  const numberRows = 4;
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

                  // Note row # increases from top to bottom, but score increases bottom to top
                  // there are numberRows rows so (numberRows - row #) is the score
                  if (selections[column] === numberRows - row) {
                    classname += ' ' + colorClassNames[row] + ' ' + rubricCategoryScoreCss.selected;
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
        }
      )}
    </div>
  );
};

RubricCategoryScore.propTypes = {
  scores: PropTypes.array,
  selections: PropTypes.array,
  selectCell: PropTypes.func
};

export default RubricCategoryScore;
