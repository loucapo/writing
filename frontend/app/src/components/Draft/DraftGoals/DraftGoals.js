import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import { DraftGoalsSelectorModalContainer } from '../../../containers/index';

import styles from './draftGoals.css';

class DraftGoals extends Component {
  state = {
    modalIsOpen: false
  };

  toggleModal = () => {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.title}>
            Draft Goals
          </div>

          <div>
            <span data-id="draft-goal-edit">
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
          </div>
        </div>

        <ul data-id="drafts-goal-list" className={styles.goalsList}>
          {
            this.props.draft.goals && this.props.draft.goals.length > 0
              ?
                this.props.draft.goals.map((title, index) => (
                  <li key={index}>
                    <MLIcon
                      className={styles.commentIcon}
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
                  <a data-id="add-draft-goal" onClick={this.toggleModal}>
                    Click to Add Draft Goals
                  </a>
                </li>
          }
        </ul>

        <DraftGoalsSelectorModalContainer
          draftId={this.props.draft.draftId}
          activityId={this.props.draft.activityId}
          closeModal={this.toggleModal}
          isOpen={this.state.modalIsOpen}
        />
      </div>
    );
  }
}

DraftGoals.propTypes = {
  draft: PropTypes.object
};

export default DraftGoals;
