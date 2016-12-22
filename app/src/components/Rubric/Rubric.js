import React, {PropTypes} from 'react';
import RubricCategoryName from './RubricCategoryName/RubricCategoryName';
import RubricCategory from './RubricCategory/RubricCategory';
import ActionButton from '../ActionButton/ActionButton';
import uuid from 'uuid';
import classnames from 'classnames';
import MLIcon from 'ml-react-cdl-icons';

import rubricCss from './rubric.css';
import coreCss from '../../styles/core.css';
import rubricCategoryHeadingCss from './RubricCategoryHeading/rubricCategoryHeading.css';

// TODO refactor it to be a rubric component that contains a rubric header component and a rubric content component
const Rubric = ({ rubric, toggleRubric, selectCell, showHeaderOnly }) => {
  if (showHeaderOnly) {
    let categories = rubric.categories.slice(); // clone array
    categories.splice(0, 0, {catName: 'Argument Rubric'}); // insert first category for levels column
    let classname = classnames(rubricCategoryHeadingCss.heading, rubricCategoryHeadingCss.headingId);
    return (
      <div className={ coreCss.panel }>
        <h1 data-id="rubric-title">
          <div>Final Rubric</div>
          <ActionButton dataId="activity-rubric-edit-button" content="Edit" />
        </h1>
        <div className={ coreCss.panelBottom }>
          <div className={classname}>
            {
              categories.map((category) => {
                return (
                  <div key={uuid.v4()} className={rubricCategoryHeadingCss.heading_item}>
                    <div
                      key={uuid.v4()}
                      data-id="activity-rubric-category-heading"
                      className={rubricCategoryHeadingCss.heading_name}>
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
    <div className={ coreCss.panel }>
      <h1 data-id="rubric-title">
        <span>Final Draft Rubric</span>
        <span className={rubricCss.close}>
          <MLIcon
            iconTitle="x"
            iconFill="#000000" // black
            iconType="x"
            iconWidth="24"
            iconHeight="24"
            viewBox="0 0 24 24"
            onClick={toggleRubric}
          />
        </span>
      </h1>
      <div className={rubricCss.rubricTable}>
        <RubricCategoryName categoryNames={ rubric.categoryNames } />
        <RubricCategory categories={rubric.categories} selectCell={selectCell} />
      </div>
    </div>
  );
};

Rubric.propTypes = {
  rubric: PropTypes.object,
  toggleRubric: PropTypes.func,
  selectCell: PropTypes.func, // onClick callback for a cell
  showHeaderOnly: PropTypes.bool
};

export default Rubric;
