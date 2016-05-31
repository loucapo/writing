import React from 'react'
import HelpMenuItem from './HelpMenuItem'

export default ({items, dropdownActive, onMenuToggle}) => (
        <li id="nav-help" 
            aria-owns="sub-nav-help" 
            aria-controls="sub-nav-help" 
            tabIndex="0"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={dropdownActive}
            onClick={()=>onMenuToggle('headerMenuHelp')}
            onKeyPress={(event) => (event.charCode === 13 || event.charCode === 32) && onMenuToggle('headerMenuHelp', event)}
            onBlur={() => dropdownActive && onMenuToggle('headerMenuHelp')}
            className={dropdownActive ? "open" : ""}
            aria-label="Help">
            <div className="icon icon-icon_help-white"></div>
            {
                dropdownActive
                    ? <ul className="sub-nav" role="group" id="sub-nav-help">
                            { items.map(i => <HelpMenuItem key={i.id} name={i.name} />) }
                      </ul>
                    : ''
            }
        </li>
    )
