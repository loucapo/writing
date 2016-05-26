import React from 'react'
import CourseMenuItem from './CourseMenuItem'

export default ({items, dropdownActive, onHover}) => (
    <li id="nav-courses"
        tabindex="-1"
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={dropdownActive}
        aria-controls="st1"
        // onMouseEnter={onHover}
        onMouseLeave={onHover}
        onClick={onHover}
        // onfocus={onHover}
        >

        COURSES

    <span className="icon icon-icon_down_arrow-0"></span>
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