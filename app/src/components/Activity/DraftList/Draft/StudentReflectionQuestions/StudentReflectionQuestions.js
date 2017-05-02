import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import StudentReflectionQuestionsModalContainer from '../../../../../containers/StudentReflectionQuestionsModalContainer';

import styles from './studentReflectionQuestions.css';

class StudentReflectionQuestions extends Component {
  state = {
    modalIsOpen: false
  };

  toggleModal = () => {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  };

  render() {
    return (
      <div className={styles.container}>
        {
          this.props.draft.studentReflectionQuestions.length > 0
          ?
            <section className={styles.section}>
              <div className={styles.heading}>
                <div className={styles.title}>
                  Student Reflection Questions
                  <span data-id="reflections-help">
                    <MLIcon
                      className={styles.helpIcon}
                      title="help"
                      type="help"
                      width="18"
                      height="19"
                      viewBox="0 0 24 24"
                    />
                  </span>
                </div>
                <div>
                  <span data-id="reflections-edit">
                    <a onClick={this.toggleModal}>
                      <MLIcon
                        className={styles.icon}
                        title="edit"
                        type="edit"
                        width="18"
                        height="19"
                        viewBox="0 0 24 24"
                      />
                    </a>
                  </span>
                  <span data-id="reflections-delete">
                    <MLIcon
                      className={styles.icon}
                      title="trash"
                      type="trash"
                      width="18"
                      height="19"
                      viewBox="0 0 24 24"
                    />
                  </span>
                </div>
              </div>

              <ul data-id="reflections-list">
                {this.props.draft.studentReflectionQuestions.map((question, index) => (
                  <li key={index}>
                    {`${question.questionType}: ${question.question}`}
                  </li>
                ))}
              </ul>
            </section>
          :
            <a data-id="add-reflections" onClick={this.toggleModal}>
              <MLIcon
                className={styles.icon}
                title="plus"
                type="plus"
                width="18"
                height="19"
                viewBox="0 0 24 24"
              />&nbsp;
              Add Student Reflection Questions
            </a>
        }

        <StudentReflectionQuestionsModalContainer
          draftId={this.props.draft.draftId}
          activityId={this.props.draft.activityId}
          closeModal={this.toggleModal}
          isOpen={this.state.modalIsOpen}
        />
      </div>
    );
  }
}

StudentReflectionQuestions.propTypes = {
  draft: PropTypes.object
};

export default StudentReflectionQuestions;
