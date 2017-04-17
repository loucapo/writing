import React, {Component, PropTypes} from 'react';
import DraftGoalField from './DraftGoalField/DraftGoalField';
import MLButton from '../../MLButton/MLButton';

import styles from './draftGoalForm.css';

class DraftGoalForm extends Component {
  state = {
    selectedGoals: this.props.selectedGoals
  };

  setSelectedGoals = (field) => {
    if(!field.target.checked) {
      let selectedGoals = this.state.selectedGoals;
      let fieldId = JSON.parse(field.target.value).id;

      selectedGoals.forEach((selectedGoal, index) => {
        if (selectedGoal.id === fieldId) {
          selectedGoals.splice(index, 1);
        }
      });
      this.setState({selectedGoals});
    } else if(this.state.selectedGoals.length >= 6) {
      field.target.checked = false;
    } else {
      this.setState({selectedGoals: [...this.state.selectedGoals, JSON.parse(field.target.value)]});
    }
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

  disabledStatus = (goal) => {
    if (this.state.selectedGoals.length === 6) {
      let result = true;
      this.state.selectedGoals.forEach(selectedGoal => {
        if (selectedGoal.id === goal.id) {
          result = false;
        }
      });
      return result;
    }
  };

  render() {
    let selectedGoals = this.state.selectedGoals;

    return (
      <form>
        <div className={styles.inputs}>
          {
            this.props.goals.map((goal, index) => (
              <DraftGoalField
                key={index}
                disabled={this.disabledStatus(goal)}
                option={goal}
                onChange={this.setSelectedGoals}
              />
            ))
          }
        </div>

        <p className={styles.selectedGoals}>
          {(selectedGoals.length > 0) ? <strong>Selected Draft Goals:</strong> : null}
          {
            selectedGoals.map((goal, index, array) => (
              ` ${goal.title}${((array.length - 1) === index) ? '' : ','}`
            ))
          }
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
      </form>
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
