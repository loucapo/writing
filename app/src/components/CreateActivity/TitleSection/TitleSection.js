import React from 'react';

import titleSection from './titleSection.css';

const TitleSection = () => {
  return (
    <div className={titleSection.wrapper}>
      <div className={titleSection.title}>Create a New Assignment</div>
      <div data-id="course-type" className={titleSection.description}>
        Drafting and Revising Assignment
      </div>
      <div data-id="course-name">
        ENG101 Introduction to Writing
      </div>
    </div>
  );
};

export default TitleSection;
