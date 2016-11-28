import React, {PropTypes} from 'react';
import rubricCategoryHeadingCss from './rubricCategoryHeading.css';

const RubricCategoryHeading = ({headings}) => {
  if (!headings || headings.length <= 0) {
    return null;
  }

  return (
    <div className={rubricCategoryHeadingCss.heading}>
      {
        headings.map((headingName, idx) => {
          return (
            <div className={rubricCategoryHeadingCss.heading_item}>
              <div data-id="category-heading" className={rubricCategoryHeadingCss.heading_name}>
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
