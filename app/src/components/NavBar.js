import React from 'react';

const homeSvg = require('./../sass/image/icon_home.svg');
const bookSvg = require('./../sass/image/icon_book.colors-cc0000.svg');
const NavBar = () => (
    <div id="main-nav" role="navigation">
        <div className="inside">
            <ul role="tablist">
                <li className="selected" tabIndex="0" role="tab" aria-selected="true">
                    <img src={homeSvg} alt="home" />
                    <span>HOME</span>
                </li>
                <li tabIndex="0" role="tab" aria-selected="false">
                    <img src={bookSvg} alt="book" />
                    <span>EBOOK</span>
                </li>
                <div className="clearfix"></div>
            </ul>
        </div>
    </div>
);

export default NavBar;
