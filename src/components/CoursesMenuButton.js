import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

export default ({items, onSelection}) => {
  const menuItems = items.map((e) => {
    return <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>;
  });

  return (
    <Wrapper className="courses-menu" onSelection={onSelection}>
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
}