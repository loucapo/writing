import React from 'react';

const CounterArgsButton = () => {
  let commentIcon = 'https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg';

  return (
    <li data-id="counterargs">
      <img src={commentIcon} />Counterarguments
    </li>
  );
};

export default CounterArgsButton;
