import React from 'react';
import PropTypes from 'prop-types';
import {
  MLDropdown,
  MLCard
} from './../../MLComponents/index';

import { Rubric } from './../../Rubric/index';

import styles from './activityRubricSelector.css';

const ActivityRubricSelector = ({
  activityId,
  rubric,
  rubricOptions,
  rubricId,
  updateActivityRubric
}) => {
  let selectOnChange = (selected) => {
    let body = {
      rubricId: selected.id
    };
    updateActivityRubric(activityId, body);
  };

  return (
    <MLCard type="rubric" title="Final Rubric">
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

ActivityRubricSelector.propTypes = {
  activityId: PropTypes.string,
  rubric: PropTypes.object,
  rubricOptions: PropTypes.array,
  rubricId: PropTypes.string,
  updateActivityRubric: PropTypes.func
};

export default ActivityRubricSelector;
