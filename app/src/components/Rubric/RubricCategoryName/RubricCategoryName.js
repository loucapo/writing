import React, {PropTypes} from 'react';
import rubricCategoryNameCss from './rubricCategoryName.css';
import uuid from 'uuid';

const RubricCategoryName = ({ categoryNames }) => {
  if (!categoryNames || categoryNames.length <= 0) {
    return null;
  }
  return (
    <div className={rubricCategoryNameCss.category_levels}>
      {
        categoryNames.map((category) => {
          return (
            <div
              data-id="category-nameLevel"
              className={rubricCategoryNameCss.category_nameLevelContainer}
              key={uuid.v4()}
            >
              <span className={rubricCategoryNameCss.name}>{ category.score + ' ' + category.text }</span>
            </div>
          );
        })
      }

    </div>
  );

};

RubricCategoryName.propTypes = {
  categoryNames: PropTypes.array
};

export default RubricCategoryName;
