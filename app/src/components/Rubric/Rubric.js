import React, {PropTypes} from 'react';

// import ActivitySummary from './ActivitySummary/ActivitySummary';
import RubricCategoryName from './RubricCategoryName/RubricCategoryName';
import RubricCategory from './RubricCategory/RubricCategory';

import rubricCss from './rubric.css';

const Rubric = () => {
  // if (!activity || drafts.length <= 0) {
  //   return null;
  // }
  return (
    <section className={rubricCss.rubric_container}>
      <RubricCategoryName />

      <RubricCategory />
    </section>
  );
};

Rubric.propTypes = {
  // activity: PropTypes.object,
  // drafts: PropTypes.array
};


export default Rubric;
