import React from 'react';
import PropTypes from 'prop-types';
import {
  MLCard
} from './../../MLComponents/index';

import { Rubric } from './../../Rubric/index';

const ActivityRubricDisplay = ({ rubric }) => (
  <MLCard type="rubric" title="Final Rubric" >
    <Rubric rubric={rubric} />
  </MLCard>
);

ActivityRubricDisplay.propTypes = {
  rubric: PropTypes.object
};

export default ActivityRubricDisplay;
