import React from 'react';

import titleSection from './titleSection.css';

const TitleSection = () => {
  return (
    <div className={titleSection.wrapper}>
      <div className={titleSection.title}>Create a New Assignment</div>
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
