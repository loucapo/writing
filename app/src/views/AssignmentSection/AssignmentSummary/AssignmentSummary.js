import React from 'react';

import assignmentSummary from './assignmentSummary.css';

const AssignmentSection = () => {
  return (
    <div className={ assignmentSummary.summary }>
      <h1 className={ assignmentSummary.title }>
        Assignment Title
      </h1>
      <div className={assignmentSummary.typeAndCourse}>
        Drafting/Revising Assignment
        <br />
        ENG101 Introduction to Writing
      </div>
      <div className={assignmentSummary.rhetoricAndRubric}>
			<span className={assignmentSummary.label}>
				Rhetoric Genre:
			</span>
        Argument
        <br />
        <span className={assignmentSummary.label}>
				Rubric:
			</span>
        <a href="#">Argument</a>
      </div>
      <div className={ assignmentSummary['prompt-summary'] }>
        <div className={assignmentSummary.label}>
          Prompt:
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor ex tincidunt auctor placerat. Etiam
          nec dui id mauris sagittis dignissim. Praesent ultricies pharetra suscipit. Donec a tempor arcu. Suspendisse
          tempor arcu massa, sit amet rutrum arcu ultricies non. Morbi gravida elit eu mauris malesuada gravida.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse fringilla
          ac velit non ornare. Etiam dignissim at odio nec tincidunt. Aliquam venenatis consequat vehicula. Donec
          maximus sodales risus, at ultricies dui tincidunt eu.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor ex tincidunt auctor placerat. Etiam
          nec dui id mauris sagittis dignissim. Praesent ultricies pharetra suscipit. Donec a tempor arcu. Suspendisse
          tempor arcu massa, sit amet rutrum arcu ultricies non. Morbi gravida elit eu mauris malesuada gravida.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse fringilla
          ac velit non ornare. Etiam dignissim at odio nec tincidunt. Aliquam venenatis consequat vehicula. Donec
          maximus sodales risus, at ultricies dui tincidunt eu.
        </p>
      </div>
      <a href="#">Edit Assignment Information</a>
    </div>
  );
};

export default AssignmentSection;
