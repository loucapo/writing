import React, {PropTypes} from 'react';
import rubricCategoryHeadingCss from './rubricCategoryHeading.css';
import uuid from 'uuid';

const RubricCategoryHeading = ({nameValues}) => {
  if (!nameValues || nameValues.length <= 0) {
    return null;
  }

  return (
    <div className={rubricCategoryHeadingCss.heading}>
      {
        nameValues.map((nameValue) => {
          return (
            <div key={uuid.v4()} className={rubricCategoryHeadingCss.heading_item}>
              <div key={uuid.v4()} data-id="category-heading" className={rubricCategoryHeadingCss.heading_name}>
                { nameValue.name }
              </div>
              <div key={uuid.v4()} data-id="category-heading-value" className={rubricCategoryHeadingCss.heading_value}>
                { nameValue.value }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

RubricCategoryHeading.propTypes = {
  nameValues: PropTypes.array
};

export default RubricCategoryHeading;
