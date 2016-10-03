import React from 'react';

const header = require('./header.css');

const Header = () => {
  return (
    <header className={header['top-header']} >
      <h2 className={header.logo}>Macmillan Writing Center</h2>
      <span className={header['course-name']}>ENG 101 Writing Composition</span>
    </header>
  );
};

export default Header;
