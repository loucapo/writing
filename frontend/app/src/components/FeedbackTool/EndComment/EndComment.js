import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLCard, MLButton } from '../../MLComponents';
import styles from './endComment.css';

class EndComment extends Component {
  state = {
    value: this.props.endComment
  };

  handleSave = () => {
    this.props.submitEndComment(this.props.studentActivityId, this.props.studentDraftId, this.state.value);
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <MLCard type="end-comment" title="End Comment (optional)">
        {this.props.endComment ?
          <div className={styles.endComment}>
            {this.props.endComment}
          </div>
        :
          <div className={styles.addComment}>
            <textarea onChange={this.handleChange} placeholder="Add comment">
              {this.state.value}
            </textarea>
            <MLButton
              className={styles.addCommentButton}
              dataId="add-end-comment"
              title="Add End Comment"
              handleClick={this.handleSave}
              disabled={!this.state.value}
            />
          </div>}
      </MLCard>
    );
  }
}

EndComment.propTypes = {
  submitEndComment: PropTypes.func,
  studentDraftId: PropTypes.string,
  studentActivityId: PropTypes.string,
  endComment: PropTypes.string
};

export default EndComment;
