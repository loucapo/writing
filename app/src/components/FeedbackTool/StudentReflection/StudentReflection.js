import React from 'react';
import studentReflectionCss from './studentReflection.css';
import MLIcon from 'ml-react-cdl-icons';

import coreCss from './../../../styles/core.css';
import feedbackTool from './../feedbackTool.css';

const StudentReflection = () => {
  return (
    <div className={ coreCss.panel }>
      <div data-id="studentReflections">
        <h1 className={feedbackTool.titleSpan}>
          <span>
            <MLIcon
              iconTitle="minus"
              iconFill="#000000" // black
              iconType="minus"
              iconWidth="12"
              iconHeight="12"
              viewBox="0 0 24 24"
            />
          </span>
          <span className={feedbackTool.title}>Student Reflection</span>
        </h1>
      </div>
      <section className={ studentReflectionCss.section }>
        <h4>The most challenging part of this assignment was...</h4>
        <div className={ studentReflectionCss.contentItem }>
          Coming up with an "arguable" claim. In the final draft, I tried to argue against someone,
          so I think that took the whole essay more in the direction of argument than summary.
        </div>

        <h4>I want my reader to...</h4>
        <div className={ studentReflectionCss.contentItem }>
          Pay attention to the research I included.
          <p>
            I tried hard on this part, and I'm proud of the result.
          </p>
        </div>

        <h4>Finally, I want you to know...</h4>
        <div className={ studentReflectionCss.contentItem }>
          This is the longest essay I've ever had to write!
        </div>
      </section>
    </div>
  );
};

export default StudentReflection;
