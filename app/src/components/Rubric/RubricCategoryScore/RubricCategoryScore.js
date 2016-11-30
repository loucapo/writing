import React, {PropTypes} from 'react';
import rubricCategoryScoreCss from './rubricCategoryScore.css';

const RubricCategoryScore = ({scores, selectCell, selections}) => {
  if (!scores || scores.length <= 0) {
    return null;
  }
  return (
    <div className={rubricCategoryScoreCss.column}>
      {
        scores.map((scoreRow, column) => {
          return (
            <div className={rubricCategoryScoreCss.category_score} key={column}>
              {
                scoreRow.map((score, row) => {
                  console.log('============ selections ============');
                  console.log(selections);
                  console.log('=================================');
                  console.log('============ row ============');
                  console.log(row);
                  console.log('=================================');
                  console.log('============ column ============');
                  console.log(column);
                  console.log('=================================');
                  let classname = rubricCategoryScoreCss.category_item;
                  if (selections[column] === row) {
                    classname += '' + rubricCategoryScoreCss.selected
                  }
                  return (
                    <div
                      data-id="category-score"
                      className={rubricCategoryScoreCss.category_item}
                      onClick={selectCell.bind(null, row, column)}
                      key={row}
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
