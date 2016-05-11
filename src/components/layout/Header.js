/**
 * Created by rharik on 5/11/16.
 */
import React from 'react'

const Header = ({userName}) => (<header role="banner" id="header">
        <div id="logo-ml"><img src={require('./../../sass/image/logo_ml.png')} alt="Macmillan Learning" /></div>
        <div id="header-nav" role="navigation">
            <ul role="menubar">
                <li id="nav-courses" tabindex="0" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="st1" >COURSES
                   <image src={require('./../../sass/image/icon_down_arrow.svg')} />
                    <ul className="sub-nav menu" role="menu" aria-hidden="true">
                        <li tabindex="0" role="menuitem" className="menu-item add-course" aria-controls="st1">+ Add A Course</li>
                    </ul>
                </li>

                <li id="nav-help" aria-owns="sub-nav-help" aria-controls="sub-nav-help" tabindex="0" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="Help" >
                    <img src={require('./../../sass/image/icon_help.svg')} />
                    <ul className="sub-nav" role="group" id="sub-nav-help">
                        <li tabindex="0" role="button">User Guide</li>
                        <li tabindex="0" role="button">Email Technical Support</li>
                        <li tabindex="0" role="button">Chat with an Agent</li>
                        <li tabindex="0" role="button">Show Book Information</li>
                    </ul>
                </li>
                <li id="nav-profile" tabindex="0" role="menuitem"><span>{userName}</span>
                    <div id="avatar"><img src="https://hm-staging.mnv-tech.com/user/pix.php/19311/f1.jpg" alt="User Profile" /></div>
                </li>
                <div className="clearfix"></div>
            </ul>
        </div>
        <div id="mobile-icon" role="navigation">
            <div id="icon-hamburder" tabindex="0" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Navigation Menu">
            </div>
        </div>
    </header>);

export default Header;