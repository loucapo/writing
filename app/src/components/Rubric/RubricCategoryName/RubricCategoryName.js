import React, {PropTypes} from 'react';

import rubricCategoryNameCss from './rubricCategoryName.css';

const RubricCategoryName = ({categories}) => {
  if (categories) {
    return (
      <div className={rubricCategoryNameCss.category_name}>
        <div className={rubricCategoryNameCss.category_name_item}>

        </div>
        {
          categories.map((category, idx) => {
            return (
              <div className={rubricCategoryNameCss.category_name_item}>
                { category.score }
                <div>
                  { category.text }
                </div>
              </div>
            );
          })
        }

      </div>
    );
  }
  return null;

};

RubricCategoryName.propTypes = {
  categories: PropTypes.array
};

export default RubricCategoryName;
