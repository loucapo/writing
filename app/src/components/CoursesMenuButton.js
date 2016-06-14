import React, { PropTypes } from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import { Link } from 'react-router';

const CourseMenuButton = ({ items }) => {
    const menuItems = items.map((e) =>
        (<MenuItem key={e.id} value={e.id} ><Link to={'/course/' + e.id} >{e.name}</Link></MenuItem>));

    return (
        <Wrapper className="courses-menu" onSelection={() => {}} >
            <Button>
                Courses
                <i className="icon icon-icon_down_arrow-0" aria-hidden="true" />
            </Button>
            <Menu>
                {menuItems}
                <MenuItem value="" ><span aria-hidden="true" >+</span> Add A Course</MenuItem>
            </Menu>
        </Wrapper>
    );
};

CourseMenuButton.propTypes = {
    items: PropTypes.array
};

export default CourseMenuButton;

