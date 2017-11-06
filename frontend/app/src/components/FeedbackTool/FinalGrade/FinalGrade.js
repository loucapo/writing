import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLCard, MLButton } from '../../MLComponents';
import styles from './finalGrade.css';

class FinalGrade extends Component {
  state = {
    value: this.props.finalGrade,
    className: ''
  };

  handleSave = () => {
    this.props.submitFinalGrade(this.props.studentActivityId, this.props.studentDraftId, this.state.value);
    this.props.setUnsavedChanges(false);
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
      className: (event.target.value > 100) ? ' ' + styles.error : ''
    }, () => {
      if(this.state.value && this.state.value !== this.props.finalGrade) {
        this.props.setUnsavedChanges(true);
      } else {
        this.props.setUnsavedChanges(false);
      }
    });
  };

  handleOnKeyPress = event => {
    let keycode = event.charCode || event.keyCode;
    // we need to prevent a user from typing . + - e E in the grade field bc html input type=number allows those as
    // values even though you manually limit the field to 0 - 100 with a step of 1.
    switch (keycode) {
      case 43:  //+
      case 45:  //-
      case 46:  //.
      case 69:  //E
      case 101: //e
        event.preventDefault();
        return false;
    }
    return true;
  };

  render() {
    return (
      <MLCard type="final-grade" title="Final Grade">
        {this.props.finalGrade ?
          <span>{this.props.finalGrade}</span>
        :
          <div className={styles.finalGrade}>
            <div className={styles.grade}>
              <input
                data-id="final-grade"
                type="number"
                name="finalGrade"
                max="100"
                min="0"
                step="1"
                placeholder="ex. 0-100 "
                onChange={this.handleChange}
                onKeyPress={this.handleOnKeyPress}
                className={this.state.className}
              />
              <span className={styles.infoSpan + this.state.className}>
                Only whole numbers on a scale of
                <span className={styles.bold}> 0 - 100 </span>
                can be used.
              </span>
            </div>
            <MLButton
              dataId="add-final-grade"
              title="Save"
              handleClick={this.handleSave}
              disabled={this.state.value > 100 || !this.state.value}
            />
          </div>}
      </MLCard>
    );
  }
}

FinalGrade.propTypes = {
  submitFinalGrade: PropTypes.func,
  setUnsavedChanges: PropTypes.func,
  studentDraftId: PropTypes.string,
  studentActivityId: PropTypes.string,
  finalGrade: PropTypes.string
};

export default FinalGrade;
