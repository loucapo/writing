import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton, MLMenuList } from '../../MLComponents';
import styles from './commentModal.css';

class EditingMarksModal extends Component {
  state = {
    comment: null,
    editingMark: null
  };

  dummyEditingMarks = [
    { title: 'Comma splice', id: '1' },
    { title: 'Fragment', id: '2' },
    { title: 'Usage', id: '3' },
    { title: 'Pronoun Agreement', id: '4' },
    { title: 'Subject-verb Agreement', id: '5' },
    { title: 'Appropriate Language', id: '6' },
    { title: 'Needs Analysis', id: '7' },
    { title: 'Comma Error', id: '8' },
    { title: 'Apostrophe Error', id: '9' },
    { title: 'Integrate Source (MLA)', id: '10' },
    { title: 'Integrate Souce (APA)', id: '11' },
    { title: 'Needs Evidence', id: '12' },
    { title: 'Pronoun Reference', id: '13' },
    { title: 'Quotation Marks', id: '14' },
    { title: 'Spelling', id: '15' },
    { title: 'Documentation (MLA)', id: '16' },
    { title: 'Documentation (APA)', id: '17' },
    { title: 'Verb Error', id: '18' }
  ];

  handleEditingMarkChange = e => {
    this.setState({ editingMark: e.target.textContent });
  };

  handleCommentChange = e => {
    this.setState({ comment: e.target.textContent.trim() });
  };

  render() {
    return (
      <div>
        <div className={styles.header}>
          Editing Marks
        </div>

        <div className={styles.modalWrapper}>
          <MLMenuList list={this.dummyEditingMarks} callback={this.handleEditingMarkChange} />

          <div className={styles.rightPanel}>
            <div className={styles.commentWrapper}>

              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionHeaderText}>Automatic Comment</div>
                  <div className={styles.commentsHeadingLine} />
                </div>
                <div className={styles.commentDescription}>
                  A comma splice occurs when two independent clauses are connected by only a comma. Independent clauses
                  can stand by themselves as sentences, but they can't be connected with just a comma.
                </div>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionHeaderText}>Additional Comment</div>
                  <div className={styles.commentsHeadingLine} />
                </div>
                <div className={styles.commentTextWrapper}>
                  <div
                    placeholder="(Optional)"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onKeyUp={this.handleCommentChange}
                    className={styles.commentText}
                  />
                </div>
              </div>
            </div>

            <div className={styles.controls}>
              {this.props.createFeedbackError && this.props.createFeedbackError.status
                ? <div className={styles.feedbackError}>
                  There was a problem saving your comment, please try again.
                </div>
                : null}
              <MLButton
                className={styles.addCommentButton}
                dataId="cancel-comment-modal"
                title="Cancel"
                color="red"
                bordered={true}
                handleClick={this.props.closeModal}
              />
              <MLButton
                className={styles.addCommentButton}
                dataId="save-comment-modal"
                title="Save"
                // handleClick={this.props.handleSave.bind(this, this.state.comment)}
                disabled={!this.state.editingMark}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditingMarksModal.propTypes = {
  closeModal: PropTypes.func,
  handleSave: PropTypes.func,
  createFeedbackError: PropTypes.object
};

export default EditingMarksModal;
