import React from 'react';

const NavBar = () => (
    <div id="main-nav" role="navigation">
        <div className ="inside">
            <ul role="tablist">
                <li className="selected" tabIndex="0" role="tab" aria-selected="true">
                    <img src={require('./../sass/image/icon_home.svg')} />
                    <span>HOME</span>
                </li>
                <li tabIndex="0" role="tab" aria-selected="false">
                    <img src={require('./../sass/image/icon_book.colors-cc0000.svg')} />
                    <span>EBOOK</span>
                </li>
                <div className="clearfix"></div>
            </ul>
        </div>
    </div>
);

export default NavBar;