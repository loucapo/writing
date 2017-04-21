import React, {Component, PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './draftGoalField.css';

class DraftGoalField extends Component {
  state = {
    showContents: false
  };

  toggleContents = () => {
    this.setState({
      showContents: !this.state.showContents
    });
  };

  handleClick = (event) => {
    // Prevents field expand/collapse when clicking checkbox.
    event.stopPropagation();
  };

  handleChange = (event) => {
    this.props.onChange({
      checked: event.target.checked,
      id: event.target.value
    });
  };

  render() {
    let goal = this.props.goal;
    let openClass = (this.state.showContents) ? ' ' + styles.open : '';
    let iconType = (this.state.showContents) ? 'chevron_down' : 'chevron_right';
    let disabledClass = (this.props.disabled) ? ' ' + styles.disabled : '';
    let headingClass = `${styles.heading}${disabledClass}`;
    let containerClass = `${styles.container}${openClass}`;

    return (
      <div className={containerClass}>
        <div
          className={headingClass}
          onClick={this.toggleContents}
          data-id="goal-field-title"
        >
          <div>
            <MLIcon
              className={styles.icon}
              title="expand"
              type={iconType}
              width="12"
              height="12"
              viewBox="0 0 24 24"
            />
            {goal.title}
          </div>
          <input
            className={styles.checkbox}
            onChange={this.handleChange}
            onClick={this.handleClick}
            type="checkbox"
            name="draftGoalOption"
            value={goal.id}
            checked={this.props.selected}
          />
        </div>
        <div data-id="goal-field-content" className={styles.content}>
          <p>{goal.description}</p>
          <strong>Feedback Options:</strong>
          <ul>
            <li>{`Great job! ${goal.goalOption1 || ''}`}</li>
            <li>{`Needs work. ${goal.goalOption2 || ''}`}</li>
            <li>{`Needs extensive revision. ${goal.goalOption3 || ''}`}</li>
          </ul>
        </div>
      </div>
    );
  }
}

DraftGoalField.propTypes = {
  goal: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  selected: PropTypes.bool
};

export default DraftGoalField;
