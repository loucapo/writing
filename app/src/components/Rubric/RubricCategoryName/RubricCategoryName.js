import React, {PropTypes} from 'react';

import rubricCategoryNameCss from './rubricCategoryName.css';

const RubricCategoryName = () => {
  // if (!activity || drafts.length <= 0) {
  //   return null;
  // }
  return (
      <div className={rubricCategoryNameCss.category_name}>
        <div className={rubricCategoryNameCss.category_name_item}>

        </div>
        <div className={rubricCategoryNameCss.category_name_item}>
          4
          <div>Exceeds Expectations</div>
        </div>
        <div className={rubricCategoryNameCss.category_name_item}>
          3
          <div>Meets Expectations</div>
        </div>
        <div className={rubricCategoryNameCss.category_name_item}>
          2
          <div>Nearly Meets Expectations</div>
        </div>
        <div className={rubricCategoryNameCss.category_name_item}>
          1
          <div>Fails To Meet Expectations</div>
        </div>
      </div>
  );
};

RubricCategoryName.propTypes = {
  // activity: PropTypes.object,
  // drafts: PropTypes.array
};


export default RubricCategoryName;
