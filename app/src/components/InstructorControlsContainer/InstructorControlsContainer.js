import React from 'react';
import PropTypes from 'prop-types';

const InstructorControlsContainer = ({role, children}) => {

  if (role !== 'instructor') {
    return null;
  }

  return (

    <div>
      {children}
    </div>

  );
};

InstructorControlsContainer.propTypes = {
  role: PropTypes.string,
  children: PropTypes.object
};

export default InstructorControlsContainer;
