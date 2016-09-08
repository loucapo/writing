import React, { PropTypes } from 'react';

const Hello = ({ helloWorld, message }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={helloWorld}>Click</button>
    </div>
  );
};

Hello.propTypes = {
  helloWorld: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default Hello;
