/**
 * Created by rharik on 5/11/16.
 */
import React from 'react'
import CoursesDropdown  from './CoursesDropdown'
import HelpDropdown  from './HelpDropdown'


const Header = ({userName, headerMenuCourses, headerMenuHelp, onCourseMenuHover, onHelpMenuHover}) => {
    return (<header role="banner" id="header">
        <div id="logo-ml"><img src={require('./../../sass/image/logo_ml.png')} alt="Macmillan Learning"/></div>
        <div id="header-nav" role="navigation">
            <ul role="menubar">
                <CoursesDropdown onHover={onCourseMenuHover} {...headerMenuCourses} />
                <HelpDropdown onHover={onHelpMenuHover} {...headerMenuHelp} />
                <li id="nav-profile" tabindex="0" role="menuitem"><span>{userName}</span>
                    <div id="avatar"><img src="https://hm-staging.mnv-tech.com/user/pix.php/19311/f1.jpg" alt="User Profile"/></div>
                </li>
                <div className="clearfix"></div>
            </ul>
        </div>
        <div id="mobile-icon" role="navigation">
            <div className="icon-icon_hamburger-0" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Navigation Menu"></div>
        </div>
    </header>);
};
export default Header;