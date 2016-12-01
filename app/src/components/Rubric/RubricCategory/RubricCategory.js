import React, {PropTypes} from 'react';
import RubricCategoryHeading from '../RubricCategoryHeading/RubricCategoryHeading';
import RubricCategoryScore from '../RubricCategoryScore/RubricCategoryScore';
import rubricCategoryCss from './rubricCategory.css';

const RubricCategory = ({ categories, selectCell }) => {
  if (!categories || categories.length <= 0) {
    return null;
  }

  return (
    <div className={rubricCategoryCss.category}>
      <RubricCategoryHeading headings={ categories.map(x=>x.catName) } />
      <RubricCategoryScore
        scores={ categories.map(x=>x.catScores) }
        selections={ categories.map(x=>x.catSelection) }
        selectCell={selectCell} // onClick callback
      />
    </div>
  );
};

RubricCategory.propTypes = {
  categories: PropTypes.array,
  selectCell: PropTypes.func
};

export default RubricCategory;
