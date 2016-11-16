import React, {PropTypes} from 'react';
import RubricCategoryHeading from '../RubricCategoryHeading/RubricCategoryHeading';
import RubricCategoryScore from '../RubricCategoryScore/RubricCategoryScore';
import rubricCategoryCss from './rubricCategory.css';

const RubricCategory = ({ categories }) => {

  if (!categories || categories.length <= 0) {
    return null;
  }

  return (
    <div className={rubricCategoryCss.category}>
      <RubricCategoryHeading headings={ categories.map(x=>x.catName) } />

      <RubricCategoryScore scores={ categories.map(x=>x.catScores) } />
    </div>
  );
};

RubricCategory.propTypes = {
  categories: PropTypes.array
};

export default RubricCategory;
