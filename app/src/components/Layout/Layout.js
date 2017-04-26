import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.css';

const Layout = ({children}) => (
  <div className={'app'}>
    {children}
  </div>);


Layout.propTypes = {
  children: PropTypes.object
};
export default Layout;
