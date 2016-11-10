import React, {PropTypes} from 'react';

import rubricCategoryScoreCss from './rubricCategoryScore.css';

const RubricCategoryScore = () => {
  // if (!activity || drafts.length <= 0) {
  //   return null;
  // }
  return (
    <div>
      <div className={rubricCategoryScoreCss.category_score}>
        <div className={rubricCategoryScoreCss.category_item}>
          Introduces a focused, arguable thesis
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          s
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          d
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          f
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          g
        </div>
      </div>

      <div className={rubricCategoryScoreCss.category_score}>
        <div className={rubricCategoryScoreCss.category_item}>
          Introduces an arguable thesis that lacks focus
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          s
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          d
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          f
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          g
        </div>
      </div>

      <div className={rubricCategoryScoreCss.category_score}>
        <div className={rubricCategoryScoreCss.category_item}>
          Introduces a vague or broad thesis
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          s
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          d
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          f
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          g
        </div>
      </div>

      <div className={rubricCategoryScoreCss.category_score}>
        <div className={rubricCategoryScoreCss.category_item}>
          Lacks an arguable thesis
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          s
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          d
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          f
        </div>
        <div className={rubricCategoryScoreCss.category_item}>
          g
        </div>
      </div>
    </div>
  );
};

RubricCategoryScore.propTypes = {
  // activity: PropTypes.object,
  // drafts: PropTypes.array
};


export default RubricCategoryScore;
