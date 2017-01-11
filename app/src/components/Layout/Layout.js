import React, {PropTypes} from 'react';
import indexCss from '../../styles/index.css';

const Layout = ({children}) => (
  <div className={indexCss.app}>
    {children}
  </div>);


Layout.propTypes = {
  children: PropTypes.object
};
export default Layout;
