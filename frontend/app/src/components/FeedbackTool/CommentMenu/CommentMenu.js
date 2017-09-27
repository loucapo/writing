import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './commentMenu.css';

class CommentMenu extends Component {
  componentDidMount = () => {
    document.body.addEventListener('mousedown', this.closeCommentMenu);
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('mousedown', this.closeCommentMenu);
  };

  closeCommentMenu = () => {
    let commentMenu = document.querySelector('#commentMenu');
    if((!commentMenu.contains(event.target)) ||
        _.isEqual(event.target, document.querySelector('[data-id="comment-menu-cancel"]'))) {
      this.props.closeMenu();
    }
  };

  render() {
    return (
      <ul
        id="commentMenu"
        className={styles.commentMenu}
        style={{ top: `${this.props.position.top}px`, left: `${this.props.position.left}px` }}
      >
        <li data-id="comment-menu-draft-goals" title="Not implemented">Draft Goals</li>
        <li data-id="comment-menu-editing-marks" title="Not implemented">Editing Marks</li>
        <li data-id="comment-menu-open-comments" onClick={this.props.showModal.bind(this, 'openComment')}>Open Comments</li>
        <li data-id="comment-menu-cancel">Cancel</li>
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
