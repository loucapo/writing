import React from 'react';
import PropTypes from 'prop-types';
import MLCard from '../../MLCard/MLCard';
import Rubric from '../../Rubric/Rubric';

const StudentRubric = ({ rubric }) => (
  <MLCard type="rubric" title="Final Rubric" >
    <Rubric rubric={rubric} />
  </MLCard>
);

StudentRubric.propTypes = {
  rubric: PropTypes.object
};

export default StudentRubric;
