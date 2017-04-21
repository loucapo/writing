import React, {PropTypes, Component} from 'react';
import MLIcon from 'ml-react-cdl-icons';
import MLDropdown from '../../../MLDropdown/MLDropdown';
import InstructorControlsContainer from '../../../InstructorControlsContainer/InstructorControlsContainer';
import DraftGoalModalContainer from './../../../../containers/DraftGoalModalContainer';

import styles from './draft.css';

class Draft extends Component {
  state = {
    goalsModalIsOpen: false
  };

  toggleGoalsModal = () => {
    this.setState({ goalsModalIsOpen: !this.state.goalsModalIsOpen });
  };

  render() {
    return (
      <div>
        <section className={styles.draftType}>
          <div data-id="review-type-dropdown" className={styles.draftTypeLeft}>
            <div className={styles.subheader}>Review Type</div>
            <MLDropdown
              title={this.props.draft && this.props.draft.type || 'Instructor Review'}
              onChange={()=>{}}
            />
          </div>
          <div data-id="grade-type-dropdown">
            <div className={styles.subheader}>Grade Type*</div>
            <MLDropdown
              title={this.props.draft && this.props.draft.gradeType || 'Select Grade Type'}
              onChange={()=>{}}
            />
          </div>
        </section>

        <section className={styles.draftDetails}>
          <div className={styles.draftDetailsLeft}>
            <h4 className={styles.flex}>
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

          <div className={styles.rightLinks}>
            <div>
              {this.props.draft && this.props.draft.instructions || <a data-id="add-instructions" href="#">+ Add Draft Instructions</a>}
            </div>

            <div className={styles.reflections}>
              {this.props.draft && this.props.draft.reflectionQuestions || <a data-id="add-reflections" href="#">+ Add Student Reflection Questions</a>}
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
          </div>
        </section>
      </div>
    );
  }
}

Draft.propTypes = {
  draft: PropTypes.object,
  role: PropTypes.string.isRequired
};

export default Draft;
