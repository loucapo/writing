import React, {PropTypes} from 'react';
import RubricCategoryName from './RubricCategoryName/RubricCategoryName';
import RubricCategory from './RubricCategory/RubricCategory';
import ActionButton from '../ActionButton/ActionButton';
import uuid from 'uuid';
import rubricCss from './rubric.css';
import coreCss from '../../styles/core.css';
import rubricCategoryHeadingCss from './RubricCategoryHeading/rubricCategoryHeading.css';

const Rubric = ({ rubric, toggleRubric, selectCell, showHeaderOnly }) => {
  if (showHeaderOnly) {
    let categories = rubric.categories.slice(); // clone array
    categories.splice(0, 0, {catName: "Argument Rubric"}); // insert first category for levels column
    let firstPass = true; // only bold first heading
    return (
      <div className={ coreCss.panel }>
        <h1 data-id="rubric-title">
          <div>Final Rubric</div>
          <ActionButton dataId="activity-rubric-edit-button" content="Edit" />
        </h1>
        <div className={ coreCss.panelBottom }>
          <div className={rubricCategoryHeadingCss.heading}>
            {
              categories.map((category) => {
                let classname = rubricCategoryHeadingCss.heading_name;
                if (firstPass) {
                  firstPass = false;
                  classname = classname + ' ' + rubricCss.argumentRubric;
                }
                return (
                  <div key={uuid.v4()} className={rubricCategoryHeadingCss.heading_item}>
                    <div key={uuid.v4()} data-id="activity-rubric-category-heading" className={classname}>
                      { category.catName }
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className={rubricCss.show_rubric_levels}>
            <a href="#">Show Rubric Levels</a>
          </div>
        </div>
      </div>
    );
  }
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
  selectCell: PropTypes.func, // onClick callback for a cell
  showHeaderOnly: PropTypes.bool
};

export default Rubric;
