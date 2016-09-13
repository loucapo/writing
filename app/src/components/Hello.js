import React, { PropTypes } from 'react';

const Hello = ({ helloAction, message }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={helloAction}>Click</button>
    </div>
  );
};

Hello.propTypes = {
  helloAction: PropTypes.func,
  message: PropTypes.string
};

export default Hello;
