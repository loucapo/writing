import React from 'react';
import PropTypes from 'prop-types';
import { MLDropdown, MLCard } from '../../MLComponents';
import { RubricDisplayContainer } from '../../../containers';

import styles from './activityRubricSelector.css';

const ActivityRubricSelector = ({ rubricId, activityId, rubricOptions, updateActivityRubric }) => {
  let selectOnChange = selected => {
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
              defaultOption={{ id: '0000', value: 'No Rubric' }}
              options={rubricOptions}
              onChange={selectOnChange}
              selectedId={rubricId}
              contentDataId="rubric-selection-content"
              openDataId="rubric-selection-open"
            />
          </div>
          <a data-id="create-rubric" href="#">Create Custom Rubric</a>
        </div>

        <RubricDisplayContainer />
      </div>
    </MLCard>
  );
};

ActivityRubricSelector.propTypes = {
  activityId: PropTypes.string,
  rubricOptions: PropTypes.array,
  updateActivityRubric: PropTypes.func,
  rubricId: PropTypes.string
};

export default ActivityRubricSelector;
