import React, {PropTypes} from 'react';

import RubricCategoryHeading from '../RubricCategoryHeading/RubricCategoryHeading';
import RubricCategoryScore from '../RubricCategoryScore/RubricCategoryScore';

import rubricCategoryCss from './rubricCategory.css';

const RubricCategory = () => {
  // if (!activity || drafts.length <= 0) {
  //   return null;
  // }
  return (
    <div className={rubricCategoryCss.category}>
      <RubricCategoryHeading />

      <RubricCategoryScore />
    </div>
  );
};

RubricCategory.propTypes = {
  // activity: PropTypes.object,
  // drafts: PropTypes.array
};


export default RubricCategory;
