/**
 * Created by rharik on 5/12/16.
 */

import React from 'react'
import CourseMenuItem from './CourseMenuItem'

export default ({items, dropdownActive, onHover}) => (
    <li id="nav-courses"
        tabindex="0"
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={dropdownActive}
        aria-controls="st1"
        onMouseEnter={onHover}
        onMouseLeave={onHover}>COURSES
        <image src={require('./../../sass/image/icon_down_arrow.svg')} />
        {
            dropdownActive
                ? <ul className="sub-nav menu" role="menu" aria-hidden={dropdownActive}>
                { items.map(i => <CourseMenuItem key={i.id} id={i.id} name={i.name} isActive={i.isActive}/>) }
                <li tabindex="0" role="menuitem" className="menu-item add-course" aria-controls="st1">+ Add A Course</li>
            </ul>
                : ''
        }
    </li>
)
