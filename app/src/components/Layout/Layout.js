import React, {PropTypes} from 'react';
import layoutCss from './layout.css';

const Layout = ({children}) => (
  <div className={layoutCss.app}>
    {children}
  </div>);


Layout.propTypes = {
  children: PropTypes.object
};
export default Layout;
