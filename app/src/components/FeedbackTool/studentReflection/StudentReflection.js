import React from 'react';
import studentReflection from './studentReflection.css';

const StudentReflection = () => {
  return (
    <div className={studentReflection.studentReflectionContainer}>
      Student Reflection
      <p>
        <strong>The most challenging part of this assignment was...</strong>
        Coming up with an "arguable" claim. In the final draft, I tried to argue against someone, so I think that took the whole essay more in the direction of argument than summary.<br/>
        <strong>I want my reader to...</strong>
        Pay attention to the research I included. I tried hard on this part, and I'm proud of the result.<br/>
        <strong>Finally, I want you to know that...</strong>
        This is the longest essay I've ever had to write!
      </p>
    </div>
  );
};

export default StudentReflection;

