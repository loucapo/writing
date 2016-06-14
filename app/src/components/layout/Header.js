import React, { PropTypes } from 'react';
import HelpMenuButton from '../HelpMenuButton';
import CoursesMenuButton from '../CoursesMenuButton';

import logo from './../../sass/image/logo_ml.png';
import avatar from './../../sass/image/avatar.png';

const Header = ({ userName, headerMenuCourses, headerMenuHelp }) => (<div>
    <header role="banner" id="header" >
        <div id="logo-ml" >
            <img src={logo} alt="Macmillan Learning Logo" />
        </div>
        <nav id="header-nav" role="navigation" >
            <CoursesMenuButton {...headerMenuCourses} />
            <HelpMenuButton {...headerMenuHelp} />
            <div id="nav-profile" >
                <span>{userName}</span>
                <div id="avatar" >
                    <img src={avatar} alt="User Avatar" />
                </div>
            </div>
        </nav>
        <input type="checkbox" id="nav-trigger" className="nav-trigger" aria-hidden="true" />
        <label
            htmlFor="nav-trigger"
            className="icon-icon_hamburger-0"
        />
        <label htmlFor="nav-trigger" className="icon-icon_x-0" />
        <div id="mobile-nav" >
            <ul>
                <li><i className="icon-icon_book-0" />COURSES</li>
                <li><i className="icon-icon_help-1" />HELP</li>
                <li>
                    <div id="mobile-avatar" >
                        <img src={avatar} alt="User Profile" />
                    </div>
                    PROFILE
                </li>
            </ul>
        </div>
    </header>
</div>);

Header.propTypes = {
    userName: PropTypes.string,
    headerMenuCourses: PropTypes.object,
    headerMenuHelp: PropTypes.object
};

export default Header;
