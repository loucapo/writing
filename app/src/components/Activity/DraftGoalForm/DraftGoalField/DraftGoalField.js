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

  render() {
    let option = this.props.option;
    let openClass = (this.state.showContents) ? ' ' + styles.open : '';
    let iconType = (this.state.showContents) ? 'chevron_down' : 'chevron_right';
    let disabledClass = (this.props.disabled) ? ' ' + styles.disabled : '';

    return (
      <div className={`${styles.container}${openClass}`}>
        <div className={`${styles.heading}${disabledClass}`}>
          <div onClick={this.toggleContents}>
            <MLIcon
              className={styles.icon}
              title="expand"
              type={iconType}
              width="12"
              height="12"
              viewBox="0 0 24 24"
            />
            {option.title}
          </div>
          <input
            className={styles.checkbox}
            onChange={this.props.onChange.bind(this)}
            type="checkbox"
            name="draftGoalOption"
            value={JSON.stringify(option)}
          />
        </div>
        <div className={styles.content}>
          <p>{option.description}</p>
          <strong>Feedback Options:</strong>
          <ul>
            <li>{`Great job! ${option.goalOption1 || ''}`}</li>
            <li>{`Needs work. ${option.goalOption2 || ''}`}</li>
            <li>{`Needs extensive revision. ${option.goalOption3 || ''}`}</li>
          </ul>
        </div>
      </div>
    );
  }
}

DraftGoalField.propTypes = {
  option: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default DraftGoalField;
