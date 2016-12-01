import React, {PropTypes} from 'react';
import rubricCategoryHeadingCss from './rubricCategoryHeading.css';
import uuid from 'uuid';

const RubricCategoryHeading = ({headings}) => {
  if (!headings || headings.length <= 0) {
    return null;
  }

  return (
    <div className={rubricCategoryHeadingCss.heading}>
      {
        headings.map((headingName, idx) => {
          return (
            <div key={uuid.v4()} className={rubricCategoryHeadingCss.heading_item}>
              <div key={uuid.v4()} data-id="category-heading" className={rubricCategoryHeadingCss.heading_name}>
                { headingName }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

RubricCategoryHeading.propTypes = {
  headings: PropTypes.array
};

export default RubricCategoryHeading;
