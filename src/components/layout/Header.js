import React, {PropTypes} from 'react';
import HelpMenuButton  from '../HelpMenuButton';
import CoursesMenuButton from '../CoursesMenuButton';

const Header = ({userName, headerMenuCourses, headerMenuHelp, onSelectCourseFromMenu}) => {
  return (
    <div>
      <header role="banner" id="header">
        <div id="logo-ml">
          <img src={require('./../../sass/image/logo_ml.png')} alt="Macmillan Learning Logo"/>
        </div>
        <nav id="header-nav" role="navigation">
          <CoursesMenuButton onSelection={onSelectCourseFromMenu} {...headerMenuCourses} />
          <HelpMenuButton {...headerMenuHelp}/>
          <div id="nav-profile" >
            <span>{userName}</span>
            <div id="avatar">
              <img src={require('./../../sass/image/avatar.png')} alt="User Avatar"/>
            </div>
          </div>
        </nav>
        <input type="checkbox" id="nav-trigger" className="nav-trigger" aria-hidden="true"/>
        <label htmlFor="nav-trigger"
               className="icon-icon_hamburger-0"></label>
        <label htmlFor="nav-trigger" className="icon-icon_x-0"></label>
        <div id="mobile-nav">
          <ul>
            <li><i className="icon-icon_book-0"></i>COURSES</li>
            <li><i className="icon-icon_help-1"></i>HELP</li>
            <li>
              <div id="mobile-avatar">
                <img src={require('./../../sass/image/avatar.png')} alt="User Profile" />
              </div>
              PROFILE
            </li>
          </ul>
        </div>
      </header>

    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
  headerMenuCourses: PropTypes.array,
  headerMenuHelp: PropTypes.array,
  onSelectCourseFromMenu: PropTypes.func
};


export default Header;