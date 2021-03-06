import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents';
import styles from './endComment.css';

class EndComment extends Component {
  state = {
    value: this.props.endComment
  };

  handleSave = () => {
    this.props.submitEndComment(this.props.studentActivityId, this.props.studentDraftId, this.state.value);
    this.props.setUnsavedChanges(false);
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    }, () => {
      if(this.state.value && this.state.value !== this.props.endComment) {
        this.props.setUnsavedChanges(true);
      } else {
        this.props.setUnsavedChanges(false);
      }
    });
  };

  render() {
    return (
      <div>
        {this.props.endComment
          ? <div className={styles.endComment}>
            {this.props.endComment}
          </div>
          : <div className={styles.addComment}>
            <textarea onChange={this.handleChange} placeholder="Add comment" defaultValue={this.state.value} />
            <MLButton
              className={styles.addCommentButton}
              dataId="add-end-comment"
              title="Add End Comment"
              handleClick={this.handleSave}
              disabled={!this.state.value}
            />
          </div>}
      </div>
    );
  }
}

EndComment.propTypes = {
  submitEndComment: PropTypes.func,
  setUnsavedChanges: PropTypes.func,
  studentDraftId: PropTypes.string,
  studentActivityId: PropTypes.string,
  endComment: PropTypes.string
};

export default EndComment;
