import React, {PropTypes} from 'react';
import MLDropdown from '../../MLDropdown/MLDropdown';
import MLCard from './../../MLCard/MLCard';
import Rubric from './../../Rubric/Rubric';

import styles from './rubricSelector.css';

const RubricSelector = ({activityId, rubric, rubricOptions, rubricId, updateActivityRubric, role}) => {
  let selectOnChange = (selected) => {
    let body = {
      id: activityId,
      rubricId: selected.id
    };
    updateActivityRubric(body);
  };

  return (
    <MLCard type="rubric" title="Final Rubric" role={role}>
      <div>
        <div className={styles.rubric}>
          <div data-id="rubric-dropdown">
            <span className={styles.labelText}>Select Rubric</span><br />
            <MLDropdown
              defaultOption={{id: '0000', value: 'No Rubric'}}
              options={rubricOptions}
              onChange={selectOnChange}
              selected={rubricId}
            />
          </div>
          <a data-id="create-rubric" href="#">Create Custom Rubric</a>
        </div>

        <Rubric rubric={rubric} />
      </div>
    </MLCard>
  );
};

RubricSelector.propTypes = {
  activityId: PropTypes.string,
  rubric: PropTypes.object,
  rubricOptions: PropTypes.array,
  rubricId: PropTypes.string,
  updateActivityRubric: PropTypes.func,
  role: PropTypes.string
};

export default RubricSelector;
