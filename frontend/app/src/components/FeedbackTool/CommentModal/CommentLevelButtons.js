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
            dataId="good-job-comment-modal"
            title="Good Job"
            bordered={this.props.level !== 'Good Job'}
            handleClick={this.props.handleLevelClick}
          />
          <MLButton
            className={styles.addCommentButton}
            dataId="needs-work-comment-modal"
            title="Needs Work"
            bordered={this.props.level !== 'Needs Work'}
            handleClick={this.props.handleLevelClick}
          />
          <MLButton
            className={styles.addCommentButton}
            dataId="needs-extensive-work-comment-modal"
            title="Needs Extensive Revision"
            bordered={this.props.level !== 'Needs Extensive Revision'}
            handleClick={this.props.handleLevelClick}
          />
        </div>
      </div>
    );
  }
}

CommentLevelButtons.propTypes = {
  handleLevelClick: PropTypes.func,
  level: PropTypes.string
};

export default CommentLevelButtons;
