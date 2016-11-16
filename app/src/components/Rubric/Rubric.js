import React, {PropTypes} from 'react';

// import ActivitySummary from './ActivitySummary/ActivitySummary';
import RubricCategoryName from './RubricCategoryName/RubricCategoryName';
import RubricCategory from './RubricCategory/RubricCategory';

import rubricCss from './rubric.css';

const Rubric = ({ categories, categoryNames }) => {

  return (
    <section className={rubricCss.rubric_container}>
      <div className={rubricCss.title}>Final Draft Rubric</div>
      <RubricCategoryName categoryNames={ categoryNames } />

      <RubricCategory categories={ categories }/>
    </section>
  );
};

Rubric.propTypes = {
  categoryNames: PropTypes.array,
  categories: PropTypes.array
};

export default Rubric;
