import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents';
import styles from './commentModal.css';

class CommentLevelButtons extends Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>
            Please select one and leave your comment below
          </div>
          <div className={styles.commentsHeadingLine} />
        </div>

        <div className={styles.buttons}>
          <MLButton
            className={styles.addCommentButton}
            dataId="nice-job-comment-modal"
            title="Nice Job"
            bordered={this.props.level !== 3}
            handleClick={this.props.handleLevelClick.bind(this, 3)}
          />
          <MLButton
            className={styles.addCommentButton}
            dataId="needs-work-comment-modal"
            title="Needs Work"
            bordered={this.props.level !== 2}
            handleClick={this.props.handleLevelClick.bind(this, 2)}
          />
          <MLButton
            className={styles.addCommentButton}
            dataId="needs-extensive-work-comment-modal"
            title="Needs Extensive Revision"
            bordered={this.props.level !== 1}
            handleClick={this.props.handleLevelClick.bind(this, 1)}
          />
        </div>
      </div>
    );
  }
}

CommentLevelButtons.propTypes = {
  handleLevelClick: PropTypes.func,
  level: PropTypes.number
};

export default CommentLevelButtons;
