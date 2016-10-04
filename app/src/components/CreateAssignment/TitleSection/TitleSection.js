import React, { PropTypes } from 'react';

import titleSection from './titleSection.css';

const TitleSection = () => {
  return (
    <div>
      <h1>Create a New Assignment</h1>
      <span className={titleSection.description}>
        Drafting and Revising Assignment
      </span>
      <span className={titleSection.courseName}>
        ENG101 Introduction to Writing
      </span>
    </div>
  );
};

export default TitleSection;
