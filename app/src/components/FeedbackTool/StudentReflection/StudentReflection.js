import React from 'react';
import studentReflectionCss from './studentReflection.css';
import coreCss from './../../../styles/core.css';

const StudentReflection = () => {
  return (
    <div className={ coreCss.panel }>
      <div data-id="studentReflections">
        <h1>
          Student Reflection
        </h1>
      </div>
      <section className={ studentReflectionCss.section }>
        <h4>The most challenging part of this assignment was...</h4>
        <div>
          Coming up with an "arguable" claim. In the final draft, I tried to argue against someone,
          so I think that took the whole essay more in the direction of argument than summary.
          <p />
        </div>

        <h4>I want my reader to...</h4>
        <div>
          Pay attention to the research I included.
          <p>
            I tried hard on this part, and I'm proud of the result.
          </p>
        </div>

        <h4>Finally, I want you to know that...</h4>
        <div>
            This is the longest essay I've ever had to write!
        </div>
      </section>
    </div>
  );
};

export default StudentReflection;
