import React, {PropTypes} from 'react';

import rubricCategoryHeadingCss from './rubricCategoryHeading.css';

const RubricCategoryHeading = () => {
  // if (!activity || drafts.length <= 0) {
  //   return null;
  // }
  return (
    <div className={rubricCategoryHeadingCss.heading}>
      <div className={rubricCategoryHeadingCss.heading_item}>
        <div className={rubricCategoryHeadingCss.heading_name}>
          Thesis
        </div>
      </div>
      <div className={rubricCategoryHeadingCss.heading_item}>
        <div className={rubricCategoryHeadingCss.heading_name}>
          Claims
        </div>
      </div>
      <div className={rubricCategoryHeadingCss.heading_item}>
        <div className={rubricCategoryHeadingCss.heading_name}>
          Evidence
        </div>
      </div>
      <div className={rubricCategoryHeadingCss.heading_item}>
        <div className={rubricCategoryHeadingCss.heading_name}>
          Logical Appeals
        </div>
      </div>
      <div className={rubricCategoryHeadingCss.heading_item}>
        <div className={rubricCategoryHeadingCss.heading_name}>
          Counterargument
        </div>
      </div>
    </div>
  );
};

RubricCategoryHeading.propTypes = {
  // activity: PropTypes.object,
  // drafts: PropTypes.array
};

export default RubricCategoryHeading;
