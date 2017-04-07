import React, {PropTypes, Component} from 'react';
import MLIcon from 'ml-react-cdl-icons';
import MLDropdown from '../../../MLDropdown/MLDropdown';
import InstructorControlsContainer from '../../../InstructorControlsContainer/InstructorControlsContainer';
import DraftGoalModal from './../../../MLModal/Modals/DraftGoalModal';
import styles from './draft.css';

class Draft extends Component {
  state = {
    goalsModalIsOpen: false
  };

  openGoalsModal = () => {
    this.setState({ goalsModalIsOpen: true });
  };

  closeGoalModal = () => {
    this.setState({ goalsModalIsOpen: false });
  };

  render() {
    return (
      <div>
        <section className={styles.draftType}>
          <div data-id="review-type-dropdown" className={styles.draftTypeLeft}>
            <div className={styles.subheader}>Review Type</div>
            <MLDropdown title={this.props.draft && this.props.draft.type || 'Instructor Review'} />
          </div>
          <div data-id="grade-type-dropdown">
            <div className={styles.subheader}>Grade Type*</div>
            <MLDropdown title={this.props.draft && this.props.draft.gradeType || 'Select Grade Type'} />
          </div>
        </section>

        <section className={styles.draftDetails}>
          <div className={styles.draftDetailsLeft}>
            <h4 className={styles.flex}>
              <div className={styles.draftFocus}>
                Draft Focus
                <span data-id="draft-focus-help">
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
                  <span data-id="draft-focus-edit">
                    <MLIcon
                      title="edit"
                      type="edit"
                      width="18"
                      height="19"
                      viewBox="0 0 24 24"
                    />
                  </span>
                  <span data-id="draft-focus-delete">
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
            {
              this.props.draft && this.props.draft.goals
                ? null
                : <a data-id="add-draft-goal" onClick={this.openGoalsModal}>Click to Add Draft Goals</a>
            }
            <DraftGoalModal closeModal={this.closeGoalModal} isOpen={this.state.goalsModalIsOpen} />
          </div>
          {/*
           <div className={styles.rightLinks}>
           <div>
           {draft && draft.instructions || <a data-id="add-instructions" href="#">+ Add Draft Instructions</a>}
           </div>

           <div className={styles.reflections}>
           {draft && draft.reflectionQuestions
           || <a data-id="add-reflections" href="#">+ Add Student Reflection Questions</a>}
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
           */}
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
