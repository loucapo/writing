import React from 'react';
import sideMenu from './../sideMenu.css';

const CounterArgsButton = () => {
  let commentIcon = "https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg";

  return (
    <li data-id="counterargs">
      <img src={commentIcon}/>Counterarguments
    </li>
  );
};

export default CounterArgsButton;
