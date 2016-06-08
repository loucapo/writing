import React, {PropTypes} from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import {Link} from 'react-router';


const CoursesMenuButton = ({items}) => {
  const menuItems = items.map((e) => {
    return <MenuItem key={e.id} value={e.id}><Link to={'/course/'+e.id}>{e.name}</Link></MenuItem>;
  });

  return (
    <Wrapper className="courses-menu" >
      <Button>
        Courses
        <i className="icon icon-icon_down_arrow-0" aria-hidden="true"></i>
      </Button>
      <Menu>
        {menuItems}
        <MenuItem value=""><span aria-hidden="true">+</span> Add A Course</MenuItem>
      </Menu>
    </Wrapper>
  );
};


CoursesMenuButton.propTypes = {
    items: PropTypes.array
};

export default CoursesMenuButton;