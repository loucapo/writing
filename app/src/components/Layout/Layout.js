import React, {PropTypes} from 'react';

const Layout = ({children}) => (
  <div className="app">
    {children}
  </div>);


Layout.propTypes = {
  children: PropTypes.array
};
export default Layout;
