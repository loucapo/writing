import React from 'react';
import PropTypes from 'prop-types';
import './../../styles/index.css';

const Layout = ({children}) => {
  return (
    <div className={'app'}>
      {children}
    </div>);
};


Layout.propTypes = {
  children: PropTypes.object
};
export default Layout;
