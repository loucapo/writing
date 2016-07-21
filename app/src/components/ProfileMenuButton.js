import React, { PropTypes } from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import { Link } from 'react-router';

const ProfileMenuButton = ({ userName, avatar }) => {
  return (
    <Wrapper className="profile-menu" onSelection={() => {}} >
      <Button>
        <span id="nav-profile" >
          <span className="flex-clear-center">
            <p>{userName}</p>
            <span id="avatar">
              <img src={avatar} alt="User Avatar" />
            </span>
            <i className="icon icon-icon_down_arrow-0" aria-hidden="true" />
          </span>
        </span>
      </Button>
      <Menu>
        <MenuItem className="profile-menu-item" key={1} value={1} >
          <a href="http://locahost">Go to Moodle</a>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

ProfileMenuButton.propTypes = {
  items: PropTypes.array
};

export default ProfileMenuButton;

