import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './commentMenu.css';

class CommentMenu extends Component {
  componentDidMount = () => {
    document.body.addEventListener('mousedown', this.props.closeMenu.bind(this));
  }

  componentWillUnmount = () => {
    document.body.removeEventListener('mouseup', this.props.closeMenu.bind(this));
  }

  render() {
    return (
      <ul
        id="commentMenu"
        className={styles.commentMenu}
        style={{ top: `${this.props.position.top}px`, left: `${this.props.position.left}px` }}
      >
        <li data-id="menu-add-comment" onClick={this.props.showModal}>Add Comment</li>
        <li data-id="menu-cancel">Cancel</li>
      </ul>
    );
  }
}

CommentMenu.propTypes = {
  position: PropTypes.object,
  showModal: PropTypes.func,
  closeMenu: PropTypes.func
};

export default CommentMenu;
