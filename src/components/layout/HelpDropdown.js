/**
 * Created by rharik on 5/12/16.
 */

import React from 'react'
import HelpMenuItem from './HelpMenuItem'

export default ({items, dropdownActive, onHover}) => (
        <li id="nav-help" 
            aria-owns="sub-nav-help" 
            aria-controls="sub-nav-help" 
            tabindex="0" 
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={dropdownActive}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            aria-label="Help">
            <image src={require('./../../sass/image/icon_down_arrow.svg')} />
            {
                dropdownActive
                    ? <ul className="sub-nav" role="group" id="sub-nav-help">
                            { items.map(i => <HelpMenuItem key={i.id} name={i.name} />) }
                      </ul>
                    : ''
            }
        </li>
    )
