import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './mlMenuList.css';

class MenuList extends Component {
  state = {
    active: null
  };

  handleClick = (e) => {
    this.setState({active: e.target.dataset.id});
    this.props.callback();
  };

  render() {
    return (
      <ul className={styles.menulist}>
        {this.props.list.map(item => (
          <li
            key={item.id}
            data-id={item.id}
            className={this.state.active === item.id ? styles.active : null}
            onClick={this.handleClick}
          >
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

MenuList.propTypes = {
  list: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired
};

export default MenuList;
