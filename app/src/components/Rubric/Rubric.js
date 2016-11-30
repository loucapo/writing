import React, {PropTypes} from 'react';
import RubricCategoryName from './RubricCategoryName/RubricCategoryName';
import RubricCategory from './RubricCategory/RubricCategory';
import rubricCss from './rubric.css';

const Rubric = ({ rubric, toggleRubric, selectCell }) => {
  return (
    <section className={rubricCss.rubric_container}>
      <div className={rubricCss.title}>Final Draft Rubric</div>
      <div className={rubricCss.close} onClick={toggleRubric}>X</div>
      <RubricCategoryName categoryNames={ rubric.categoryNames } />
      <RubricCategory categories={rubric.categories} selectCell={selectCell} />
    </section>
  );
};

Rubric.propTypes = {
  rubric: PropTypes.object,
  toggleRubric: PropTypes.func,
  selectCell: PropTypes.func
};

export default Rubric;
