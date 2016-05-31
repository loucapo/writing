import React from 'react'
import CourseMenuItem from './CourseMenuItem'

export default ({items, dropdownActive, onMenuToggle}) => (
    <li id="nav-courses"
        tabIndex="0"
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={dropdownActive}
        aria-controls="st1"
        onClick={()=>onMenuToggle('headerMenuCourses')}
        onKeyPress={(event) => (event.charCode === 13 || event.charCode === 32) && onMenuToggle('headerMenuCourses', event)}
        onBlur={() => dropdownActive && onMenuToggle('headerMenuCourses')}>COURSES
        <span className="icon icon-icon_down_arrow-0"></span>
        {
            dropdownActive
                ? <ul className="sub-nav menu" role="menu" aria-hidden={dropdownActive}>
                { items.map(i => <CourseMenuItem key={i.id} id={i.id} name={i.name} isActive={i.isActive}/>) }
                <li tabIndex="0" role="menuitem" className="menu-item add-course" aria-controls="st1">+ Add A Course</li>
            </ul>
                : ''
        }
    </li>
)