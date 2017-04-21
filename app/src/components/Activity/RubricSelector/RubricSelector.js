import React, {PropTypes} from 'react';
import MLDropdown from '../../MLDropdown/MLDropdown';
import MLCard from './../../MLCard/MLCard';
import Rubric from './../../Rubric/Rubric';

import styles from './rubricSelector.css';

const RubricSelector = ({
  activityId,
  rubric,
  rubricOptions,
  rubricId,
  updateActivityRubric,
  role}) => {
  let selectOnChange = (selected) => {
    let body = {
      rubricId: selected.id
    };
    updateActivityRubric(body, activityId);
  };

  return (
    <MLCard type="rubric" title="Final Rubric" role={role}>
      <div>
        <div className={styles.rubric}>
          <div data-id="rubric-title">
            <span className={styles.labelText}>Select Rubric</span><br />
            <MLDropdown
              defaultOption={{id: '0000', value: 'No Rubric'}}
              options={rubricOptions}
              onChange={selectOnChange}
              selected={rubricId}
              contentDataId="rubric-selection-content"
              openDataId="rubric-selection-open"
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
