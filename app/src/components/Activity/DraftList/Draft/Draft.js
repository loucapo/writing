import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import MLDropdown from '../../../MLDropdown/MLDropdown';
import MLDialog from '../../../MLDialog/MLDialog';
import DraftInstructionsForm from '../../../DraftInstructionsForm/DraftInstructionsForm';
import MLCard from '../../../MLCard/MLCard';
import InstructorControlsContainer from '../../../InstructorControlsContainer/InstructorControlsContainer';
import DraftGoalModalContainer from './../../../../containers/DraftGoalModalContainer';

import styles from './draft.css';

class Draft extends Component {
  state = {
    goalsModalIsOpen: false,
    showDeleteConfirm: false
  };

  toggleGoalsModal = () => {
    this.setState({goalsModalIsOpen: !this.state.goalsModalIsOpen});
  };

  removeDraft = () => {
    this.props.removeDraft(this.props.draft.id);
  };

  updateInstructions = (instructions) => {
    this.props.updateInstructions(this.props.draft.id, instructions);
  };

  showDialog = () => {
    this.setState({
      showDeleteConfirm: true
    });
  };

  closeDialog = (confirm) => {
    let that = this;
    confirm = confirm || false;
    this.setState({
      showDeleteConfirm: false
    }, function remove() {
      if (confirm) {
        that.removeDraft();
      }
    });
  };

  render() {
    let cardMessage = `Are you sure you want to delete ${this.props.cardTitle}? Once deleted it cannot be restored.`;

    return (
      <MLCard
        type="draft"
        role={this.props.role}
        title={this.props.cardTitle}
        options={this.props.totalDrafts > 1 ?
          <a data-id="draft-delete" onClick={this.showDialog}>
            <MLIcon
              className={styles.icon}
              title="trash"
              type="trash"
              width="18"
              height="19"
              viewBox="0 0 24 24"
            />
          </a> : null}>
        <section>
          <MLDialog
            title={'Delete ' + this.props.cardTitle}
            message={cardMessage}
            show={this.state.showDeleteConfirm}
            close={this.closeDialog}
          />
          <section className={styles.draftType}>
            <div data-id="review-type-dropdown" className={styles.draftTypeLeft}>
              <div className={styles.subheader}>Review Type</div>
              <MLDropdown
                defaultOption={{id: '0000', value: 'Instructor Review'}}
                onChange={() => {
                }}
                contentDataId="review-type-selection-content"
                openDataId="review-type-selection-open"
              />
            </div>
            <div data-id="grade-type-dropdown">
              <div className={styles.subheader}>Grade Type*</div>
              <MLDropdown
                title={this.props.draft && this.props.draft.gradeType || 'Select Grade Type'}
                onChange={() => {
                }}
              />
            </div>
          </section>

          <section className={styles.draftDetails}>
            <div className={styles.draftDetailsLeft}>
              <h4 className={styles.flexSpace}>
                <div className={styles.draftGoalsHeading}>
                  Draft Goals
                  <span data-id="draft-goal-help">
                    <MLIcon
                      className={styles.help}
                      title="help"
                      type="help"
                      width="18"
                      height="19"
                      viewBox="0 0 24 24"
                    />
                  </span>
                </div>
                {/* shouldn't all the draft stuff be in here? doesn't this encapsulate the role check?*/}
                <InstructorControlsContainer role={this.props.role}>
                  <span className={styles.controls}>
                    <span data-id="draft-goal-edit">
                      <a onClick={this.toggleGoalsModal}>
                        <MLIcon
                          title="edit"
                          type="edit"
                          width="18"
                          height="19"
                          viewBox="0 0 24 24"
                        />
                      </a>
                    </span>
                    <span data-id="draft-goal-delete">
                      <MLIcon
                        title="trash"
                        type="trash"
                        width="18"
                        height="19"
                        viewBox="0 0 24 24"
                      />
                    </span>
                  </span>
                </InstructorControlsContainer>
              </h4>
              <ul data-id="drafts-goal-list" className={styles.draftGoalsList}>
                {
                  this.props.draft.goals && this.props.draft.goals.length > 0
                    ?
                    this.props.draft.goals.map((title, index) => (
                      <li key={index}>
                        <MLIcon
                          className={styles.comment}
                          title="comment"
                          type="comment"
                          width="23"
                          height="24"
                          viewBox="0 0 24 24"
                        />
                        {title}
                      </li>
                    ))
                    :
                    <li>
                      <a data-id="add-draft-goal" onClick={this.toggleGoalsModal}>
                        Click to Add Draft Goals
                      </a>
                    </li>
                }
              </ul>
              <DraftGoalModalContainer
                draftId={this.props.draft.id}
                activityId={this.props.draft.activityId}
                closeModal={this.toggleGoalsModal}
                isOpen={this.state.goalsModalIsOpen}
              />
            </div>

            <div className={styles.draftDetailsRight}>
              <DraftInstructionsForm
                value={this.props.draft.instructions || ''}
                updateInstructions={this.updateInstructions}
                role={this.props.role}
              />

              <div className={styles.reflections}>
                {this.props.draft && this.props.draft.reflectionQuestions
                || <a data-id="add-reflections" href="#" className={styles.flex}>
                  <MLIcon
                    className={styles.icon}
                    title="plus"
                    type="plus"
                    width="18"
                    height="19"
                    viewBox="0 0 24 24"
                  />&nbsp;
                  Add Student Reflection Questions
                </a>}
                <span data-id="reflections-help">
                  <MLIcon
                    className={styles.help}
                    title="help"
                    type="help"
                    width="18"
                    height="19"
                    viewBox="0 0 24 24"
                  />
                </span>
              </div>
              <div className={styles.draftNote}>
                {this.props.children}
              </div>
            </div>
          </section>
        </section>
      </MLCard>
    );
  }
}

Draft.propTypes = {
  draft: PropTypes.object,
  totalDrafts: PropTypes.number,
  role: PropTypes.string.isRequired,
  children: PropTypes.string,
  cardTitle: PropTypes.string,
  removeDraft: PropTypes.func,
  updateInstructions: PropTypes.func
};

export default Draft;
