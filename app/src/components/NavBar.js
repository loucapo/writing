import React from 'react';


const NavBar = () => (
    <div id="main-nav" role="navigation">
        <div className="inside">
            <ul role="tablist">
                <li className="selected" tabIndex="0" role="tab" aria-selected="true">
                    <i className="icon-icon_home" />
                    <span>HOME</span>
                </li>
                <li tabIndex="0" role="tab" aria-selected="false">
                    <i className="icon-icon_book" />
                    <span>EBOOK</span>
                </li>
                <div className="clearfix"></div>
            </ul>
        </div>
    </div>
);

export default NavBar;
