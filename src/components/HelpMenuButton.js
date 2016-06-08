import React, {PropTypes} from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

const HelpMenuButton = ({items}) => {
  const menuItems = items.map((e) => {
    return <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>;
  });

  return (
    <Wrapper className="help-menu" onSelection={()=>{}}>
      <Button>
        <i className="icon icon-icon_help-white" aria-hidden="true"><span>Help</span></i>
      </Button>
      <Menu>
        {menuItems}
      </Menu>
    </Wrapper>
  );
};


HelpMenuButton.propTypes = {
    items: PropTypes.array
};

export default HelpMenuButton;