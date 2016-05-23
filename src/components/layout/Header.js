import React from 'react'
import CoursesDropdown  from './CoursesDropdown'
import HelpDropdown  from './HelpDropdown'


const Header = ({userName, headerMenuCourses, headerMenuHelp, onCourseMenuHover, onHelpMenuHover}) => {
  return (
    <div>
      <header role="banner" id="header">
        <div id="logo-ml"><img src={require('./../../sass/image/logo_ml.png')} alt="Macmillan Learning"/></div>
        <div id="header-nav" role="navigation">
          <ul role="menubar">
            <CoursesDropdown onHover={onCourseMenuHover} {...headerMenuCourses} />
            <HelpDropdown onHover={onHelpMenuHover} {...headerMenuHelp} />
            <li id="nav-profile" tabindex="0" role="menuitem"><span>{userName}</span>
              <div id="avatar"><img src={require('./../../sass/image/avatar.png')} alt="User Profile"/></div>
            </li>
            <div className="clearfix"></div>
          </ul>
        </div>
{/*
        <div id="mobile-icon"
             role="navigation">
          <div className="icon-icon_hamburger-0"
               tabindex="0"
               role="button"
               aria-haspopup="true"
               aria-expanded="false"
               aria-label="Navigation Menu">
*/}
            <input type="checkbox" id="nav-trigger" className="nav-trigger"/>
            <label htmlFor="nav-trigger" className="icon-icon_hamburger-0"></label>
            <label htmlFor="nav-trigger" className="icon-icon_x-0"></label>

        <div id="mobile-nav" role="navigation">
          <div id="icon-x" tabindex="0" role="button" aria-label="Close">
          </div>
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
{/*
          </div>
        </div>
*/}
      </header>

    </div>
  )
};

export default Header