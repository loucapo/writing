import React, { PropTypes } from 'react';
import TitleBar from './TitleBar';
import NavBar from './NavBar';
import Assignments from './../containers/UpComingAssignmentsContainer';
import Sections from './../containers/SectionsContainer';

const Course = ({ courseTitle }) => (
  <div>
    <TitleBar title={courseTitle} />
    <NavBar />
    <div id="content" role="main" className="inside" >
      <Assignments />
      <Sections />
    </div>
  </div>
);

Course.propTypes = {
  courseTitle: PropTypes.string
};

export default Course;
