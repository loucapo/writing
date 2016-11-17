import React, {PropTypes} from 'react';
import RubricCategoryName from './RubricCategoryName/RubricCategoryName';
import RubricCategory from './RubricCategory/RubricCategory';
import rubricCss from './rubric.css';

const Rubric = ({ rubric }) => {

  return (
    <section className={rubricCss.rubric_container}>
      <div className={rubricCss.title}>Final Draft Rubric</div>
      <RubricCategoryName categoryNames={ rubric.categoryNames } />

      <RubricCategory categories={ rubric.categories }/>
    </section>
  );
};

Rubric.propTypes = {
  rubric: PropTypes.object
};

export default Rubric;
