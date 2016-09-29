import React from 'react';
import logo from './../../images/logo_ml.png';

const header = require('./header.css');

const Header = () => {
  return (
    <header className={header['top-header']} >
      <img src={logo} alt="Macmillan Learning Logo" />
    </header>
  );
};

export default Header;
