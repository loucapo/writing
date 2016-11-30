import React, {PropTypes} from 'react';
import rubricCategoryNameCss from './rubricCategoryName.css';

const RubricCategoryName = ({ categoryNames }) => {
  if (!categoryNames || categoryNames.length <= 0) {
    return null;
  }
  return (
    <div className={rubricCategoryNameCss.category_name}>
      { categoryNames.map(category => (
        <div data-id="category-name" className={rubricCategoryNameCss.category_name_item}>
          { category.score }
          <div>
            { category.text }
          </div>
        </div>)
      )}
    </div>);

};

RubricCategoryName.propTypes = {
  categoryNames: PropTypes.array
};

export default RubricCategoryName;
