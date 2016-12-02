import React, {PropTypes} from 'react';
import RubricCategoryHeading from '../RubricCategoryHeading/RubricCategoryHeading';
import RubricCategoryScore from '../RubricCategoryScore/RubricCategoryScore';
import rubricCategoryCss from './rubricCategory.css';

const RubricCategory = ({ categories, selectCell }) => {
  if (!categories || categories.length <= 0) {
    return null;
  }

  // building single array of name-value objects
  let nameValues = [];
  for(let counter = 0; counter < categories.length; counter++) {
    let nameValue = {};
    nameValue.name = categories[counter].catName;
    nameValue.value = (categories[counter].catSelection === -1) ? '' : categories[counter].catSelection;
    nameValues.push(nameValue);
  }

  return (
    <div className={rubricCategoryCss.category}>
      <RubricCategoryHeading
        nameValues={ nameValues }
      />
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
