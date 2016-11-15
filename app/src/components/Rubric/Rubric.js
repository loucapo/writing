import React, {PropTypes} from 'react';

// import ActivitySummary from './ActivitySummary/ActivitySummary';
import RubricCategoryName from './RubricCategory/RubricCategoryName/RubricCategoryName';
import RubricCategory from './RubricCategory/RubricCategory';

import rubricCss from './rubric.css';

const Rubric = (rubric) => {
  console.log('rubric\'s rubric');
  console.log(rubric);
  return (
    <section className={rubricCss.rubric_container}>
      <RubricCategoryName categories={rubric.headings} />

      <RubricCategory />
    </section>
  );
};

Rubric.propTypes = {
  rubric: PropTypes.object,
  headings: PropTypes.array,
  categories: PropTypes.array
};

export default Rubric;
