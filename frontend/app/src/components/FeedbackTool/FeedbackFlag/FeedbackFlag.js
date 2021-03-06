import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import styles from './feedbackFlag.css';

class FeedbackFlag extends Component {
  state = {
    menuOpen: false
  };

  componentDidUpdate = () => {
    if (this.state.menuOpen) {
      document.body.addEventListener('click', this.handleCollapse);
    }
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.handleCollapse);
  };

  menuClose = () => {
    this.setState({ menuOpen: false });
    document.body.removeEventListener('click', this.handleCollapse);
  };

  handleCollapse = () => {
    let clickedElem = document.querySelector(
      `[data-id='${_.get(this.props, 'feedback.feedbackId')}'] .${styles.feedbackFlagMenuList}`
    );
    if (clickedElem && !clickedElem.contains(event.target)) {
      this.menuClose();
    }
  };

  handleDeleteFeedback = () => {
    this.props.handleDeleteFeedback(_.get(this.props, 'feedback.feedbackId'));
  };

  handleMenuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  flagColor = () => {
    let feedback = this.props.feedback;
    let color = '';
    if (feedback.level === 3) {
      color = ` ${styles.flagGreen}`;
    } else if (feedback.editingMarkId) {
      color = ` ${styles.flagOrange}`;
    }
    return color;
  };

  render() {
    const { feedback, flagTop, handleFlagClick, expandedId, isDisplay } = this.props;
    const expandedClass = expandedId ? ` ${styles.expanded}` : '';
    const flagClass = styles.flag + this.flagColor() + expandedClass;

    return (
      <div className={flagClass} style={{ top: `${flagTop}px` }} data-id={feedback.feedbackId}>
        <div className={styles.flagCaret}>
          <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1">
            <defs />
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(0.000000, 1.000000)">
                <g className={styles.triangle}>
                  <polygon points="0.85660335 9.76258269 0.85660335 0.143396646 6.76258269 4.95298967" />
                </g>
                <polyline className={styles.triangleOutline} stroke="#000000" points="1 0 7 5 1 10" />
              </g>
            </g>
          </svg>
        </div>
        <div className={styles.flagHeader}>
          <div className={styles.flagTitle}
            onClick={() => handleFlagClick(feedback.feedbackId)}
          >
            <div className={styles.flagTitleCont}>
              <MLIcon
                className={styles.commentIcon}
                title="comment"
                type="comment"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              />
              <div className={styles.flagTitleText}>{feedback.title}</div>
            </div>
          </div>
          {!isDisplay && expandedId ?
            <a className={styles.moreButton} onClick={this.handleMenuToggle}>
              <MLIcon
                className={styles.moreIcon}
                title="more"
                type="more"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              />
            </a>
            : null}
        </div>
        {expandedId ?
          <div className={styles.feedback}>
            {feedback.isHeaderShown ?
              <div className={styles.predefined}>
                {feedback.predefined}
              </div>
            : null }
            <div className={styles.feedbackContent}>{feedback.content}</div>
          </div>
          : null}
        {this.state.menuOpen ?
          <div className={styles.feedbackFlagMenu}>
            <ul className={styles.feedbackFlagMenuList}>
              <li data-id="menu-delete" onClick={this.handleDeleteFeedback}>
                Delete Comment
              </li>
            </ul>
          </div>
          : null}
      </div>
    );
  }
}

FeedbackFlag.propTypes = {
  feedback: PropTypes.object,
  flagTop: PropTypes.number,
  handleFlagClick: PropTypes.func,
  expandedId: PropTypes.bool,
  isDisplay: PropTypes.bool,
  handleDeleteFeedback: PropTypes.func
};

export default FeedbackFlag;
