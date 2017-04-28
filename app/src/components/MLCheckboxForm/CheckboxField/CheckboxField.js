import React, {Component, PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './checkboxField.css';

class CheckboxField extends Component {
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
    let field = this.props.field;
    let openClass = (this.state.showContents) ? ' ' + styles.open : '';
    let iconType = (this.state.showContents) ? 'chevron_down' : 'chevron_right';
    let disabledClass = (this.props.isDisabled) ? ' ' + styles.disabled : '';
    let headingClass = `${styles.heading}${disabledClass}`;
    let containerClass = `${styles.container}${openClass}`;

    return (
      <div className={containerClass}>
        <div
          className={headingClass}
          onClick={this.props.isToggable && this.toggleContents}
          data-id="field-title"
        >
          {
            (this.props.isToggable)
            ?
              <div className={styles.toggableHeading}>
                <MLIcon
                  className={styles.icon}
                  title="expand"
                  type={iconType}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                />
                {field.title || field.question}
              </div>
            :
              <div>
                <h4>Question {this.props.fieldOrder}</h4>
                {field.title || field.question}
              </div>
          }

          <input
            className={styles.checkbox}
            onChange={this.handleChange}
            onClick={this.handleClick}
            type="checkbox"
            name="draftGoalOption"
            value={field.id}
            checked={this.props.isSelected}
          />
        </div>
        <div data-id="field-content" className={styles.content}>
          <p>{field.description}</p>
          <strong>Feedback Options:</strong>
          <ul>
            <li>{`Great job! ${field.goalOption1 || ''}`}</li>
            <li>{`Needs work. ${field.goalOption2 || ''}`}</li>
            <li>{`Needs extensive revision. ${field.goalOption3 || ''}`}</li>
          </ul>
        </div>
      </div>
    );
  }
}

CheckboxField.propTypes = {
  field: PropTypes.object.isRequired,
  fieldOrder: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  isToggable: PropTypes.bool
};

export default CheckboxField;
