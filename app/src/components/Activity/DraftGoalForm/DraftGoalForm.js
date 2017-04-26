import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DraftGoalField from './DraftGoalField/DraftGoalField';
import MLButton from '../../MLButton/MLButton';

import styles from './draftGoalForm.css';

class DraftGoalForm extends Component {
  state = {
    selectedGoals: this.props.selectedGoals
  };

  setSelectedGoals = (field) => {
    if(field.checked && this.state.selectedGoals.length >= 6) {
      return;
    }

    let selectedGoals;
    if(field.checked) {
      const goal = this.props.goals.find(goalObj => goalObj.id === field.id);
      const newGoal = {id: goal.id, title: goal.title};
      selectedGoals = this.state.selectedGoals.concat([newGoal]);
    } else {
      selectedGoals = this.state.selectedGoals.filter(selectedGoal =>
        selectedGoal.id !== field.id
      );
    }
    this.setState({selectedGoals});
  };

  handleSave = (event) => {
    event.preventDefault();
    this.props.closeModal();
    this.props.setDraftGoals(
      this.props.activityId,
      this.props.draftId,
      this.state.selectedGoals.map(selectedGoal => selectedGoal.id)
    );
  };

  disabledStatus = (goalId) => {
    if(this.state.selectedGoals.length === 6) {
      return !this.selectedStatus(goalId);
    }
  };

  selectedStatus = (goalId) => (
    !!this.state.selectedGoals.find(selectedGoal => goalId === selectedGoal.id)
  );

  renderTitles = () => (
    this.state.selectedGoals.map(selectedGoal => selectedGoal.title).join(', ')
  );

  render() {
    return (
      <div>
        <div data-id="goal-input-fields" className={styles.inputs}>
          {
            this.props.goals.map((goal, index) => (
              <DraftGoalField
                key={index}
                disabled={this.disabledStatus(goal.id)}
                goal={goal}
                onChange={this.setSelectedGoals}
                selected={this.selectedStatus(goal.id)}
              />
            ))
          }
        </div>

        <p data-id="selected-goals" className={styles.selectedGoals}>
          {(this.state.selectedGoals.length > 0) ? <strong>Selected Draft Goals: </strong> : null}
          {this.renderTitles()}
        </p>

        <div className={styles.buttons}>
          <MLButton
            dataId="cancel-button"
            title="Cancel"
            handleClick={this.props.closeModal}
          />
          <MLButton
            dataId="save-button"
            title="Save"
            color="blue"
            handleClick={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

DraftGoalForm.propTypes = {
  goals: PropTypes.array,
  closeModal: PropTypes.func,
  setDraftGoals: PropTypes.func,
  activityId: PropTypes.string,
  draftId: PropTypes.string,
  selectedGoals: PropTypes.array
};

export default DraftGoalForm;
