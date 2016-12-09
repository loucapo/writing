import React, {PropTypes} from 'react';
import layoutCss from './layout.css';

const Layout = ({children}) => (
  <div className={layoutCss.app}>
    <header className={ layoutCss.header }>
      <div className={ layoutCss.headerLeft }>
        <div data-id="course-name" className={ layoutCss.courseName }>
          ENG 101: Introduction to Writing
        </div>
        <div data-id="activity-type" className={ layoutCss.activity }>
          Argument Essay
        </div>
      </div>
      <div className={ layoutCss.headerRight }>
        <div data-id="due-date" className={ layoutCss.assignDate }>
          Assigned:  Mon. Feb 23, 2017
        </div>
      </div>
    </header>
    {children}
  </div>);


Layout.propTypes = {
  children: PropTypes.object
};
export default Layout;
