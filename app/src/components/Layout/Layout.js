import React, {PropTypes} from 'react';
import '../../styles/index.css';
import '../../styles/fixed-data-table.css';

const Layout = ({children}) => (
  <div className={'app'}>
    {children}
  </div>);


Layout.propTypes = {
  children: PropTypes.object
};
export default Layout;
