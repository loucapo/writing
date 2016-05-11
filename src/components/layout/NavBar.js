/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'

const NavBar = () => (
    <div id="main-nav" role="navigation">
        <div className ="inside">
            <ul role="tablist">
                <li className="selected" tabindex="0" role="tab" aria-selected="true">
                    <img src={require('./../../sass/image/icon_home.svg')} />
                    <span>HOME</span>
                </li>
                <li tabindex="0" role="tab" aria-selected="false">
                    <img src={require('./../../sass/image/icon_book.svg')} />
                    <span>EBOOK</span>
                </li>
                <div class="clearfix"></div>
            </ul>
        </div>
    </div>
);

export default NavBar;