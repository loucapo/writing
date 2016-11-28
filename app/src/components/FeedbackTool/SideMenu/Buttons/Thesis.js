import React from 'react';

const ThesisButton = () => {
  let commentIcon = 'https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg"';

  return (
    <li data-id="thesis">
      <img src={commentIcon} />Thesis
    </li>
  );
};

export default ThesisButton;
