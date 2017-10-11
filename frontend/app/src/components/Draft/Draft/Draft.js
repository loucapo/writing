import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import {
  MLButton,
  MLCard,
  MLDialog
} from './../../MLComponents/index';

import {
  DraftGoals,
  DraftInstructions
} from './../index';

import { ReflectionQuestionsSelector } from './../../ReflectionQuestions/index';

import styles from './draft.css';

class Draft extends Component {
  state = {
    showDeleteConfirm: false
  };

  updateInstructions = instructions => {
    this.props.updateInstructions(this.props.draft.draftId, instructions);
  };

  showDialog = (e) => {
    e.stopPropagation();
    if (this.props.totalDrafts > 1) {
      this.setState({
        showDeleteConfirm: true
      });
    }
  };

  closeDialog = confirm => {
    let that = this;
    confirm = confirm || false;
    this.setState(
      {
        showDeleteConfirm: false
      },
      function remove() {
        if (confirm) {
          that.props.removeDraft(that.props.draft.draftId);
        }
      }
    );
  };

  render() {
    let cardMessage = `Are you sure you want to delete ${this.props.cardTitle}? Once deleted it cannot be restored.`;
    const deleteEnabled = this.props.totalDrafts > 1;
    return (
      <MLCard
        key={this.props.draft.draftId}
        type="draft"
        title={this.props.cardTitle}
      >
        <a data-id="draft-delete" className={styles.deleteButton} disabled={!deleteEnabled} onClick={this.showDialog}>
          <MLIcon
            className={deleteEnabled ? styles.icon : styles.iconDisabled}
            title="trash"
            type="trash"
            width="18"
            height="19"
            viewBox="0 0 24 24"
          />
        </a>
        <div>
          <MLDialog
            title={'Delete ' + this.props.cardTitle}
            message={cardMessage}
            show={this.state.showDeleteConfirm}
            close={this.closeDialog}
          >
            <MLButton
              title="Delete"
              color="red"
              bordered={true}
              handleClick={this.closeDialog.bind(this, true)}
              dataId="dialog-delete"
            />
            <MLButton
              title="Cancel"
              dataId="dialog-cancel"
              handleClick={this.closeDialog.bind(this, false)}
            />

          </MLDialog>
          {this.props.draftNote ?
            <section>
              <div className={styles.draftNote}>
                {this.props.draftNote}
              </div>
            </section> : null
          }
          <section className={styles.draftType}>
            <div data-id="review-type-dropdown" className={styles.draftTypeLeft}>
              <div className={styles.subheader}>
                Review Type &nbsp;
                <span className={styles.studentReviewType}>Instructor Review</span>
              </div>
            </div>
          </section>
          <section className={styles.draftDetails}>
            <DraftGoals draft={this.props.draft} />

            <div className={styles.draftDetailsRight}>
              <DraftInstructions
                value={this.props.draft.instructions || ''}
                updateInstructions={this.updateInstructions}
              />

              <ReflectionQuestionsSelector draft={this.props.draft} />
            </div>
          </section>
        </div>
      </MLCard>
    );
  }
}

Draft.propTypes = {
  draft: PropTypes.object,
  totalDrafts: PropTypes.number,
  draftNote: PropTypes.string,
  cardTitle: PropTypes.string,
  removeDraft: PropTypes.func,
  updateInstructions: PropTypes.func
};

export default Draft;
