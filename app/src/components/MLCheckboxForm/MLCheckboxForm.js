import React, {Component, PropTypes} from 'react';
import CheckboxField from './CheckboxField/CheckboxField';
import MLButton from '../MLButton/MLButton';

import styles from './mlCheckboxForm.css';

class CheckboxForm extends Component {
  state = {
    selectedFields: this.props.selectedFields
  };

  setSelectedFields = (field) => {
    if(field.checked && this.props.selectionLimit && this.state.selectedFields.length >= this.props.selectionLimit) {
      return;
    }

    let selectedFields;
    if(field.checked) {
      const selectedField = this.props.fields.find(fieldObj => fieldObj.id === field.id);
      const fieldIdAndTitle = {id: selectedField.id, title: selectedField.title};
      selectedFields = this.state.selectedFields.concat([fieldIdAndTitle]);
    } else {
      selectedFields = this.state.selectedFields.filter(selectedGoal =>
        selectedGoal.id !== field.id
      );
    }
    this.setState({selectedFields});
  };

  handleSave = (event) => {
    event.preventDefault();
    if(this.props.closeModal) {
      this.props.closeModal();
    }
    this.props.saveForm(
      this.props.activityId,
      this.props.draftId,
      this.state.selectedFields.map(selectedField => selectedField.id)
    );
  };

  isFieldDisabled = (fieldId) => {
    if(this.props.selectionLimit && this.state.selectedFields.length === this.props.selectionLimit) {
      return !this.isFieldSelected(fieldId);
    }
  };

  isFieldSelected = (fieldId) => (
    !!this.state.selectedFields.find(selectedField => fieldId === selectedField.id)
  );

  _renderTitles = () => (
    this.state.selectedFields.map(selectedField => selectedField.title).join(', ')
  );

  render() {
    return (
      <div>
        <div data-id="input-fields" className={styles.inputs}>
          {
            this.props.fields.map((field, index) => (
              <CheckboxField
                key={index}
                field={field}
                fieldOrder={index + 1}
                onChange={this.setSelectedFields}
                isSelected={this.isFieldSelected(field.id)}
                isDisabled={this.isFieldDisabled(field.id)}
                isToggable={this.props.isFormTogglable}
              />
            ))
          }
        </div>

        <div data-id="selected-fields" className={styles.selectedFields}>
          {
            (this.props.isFormListable && this.state.selectedFields.length > 0) ?
              <p>
                <strong>Selected Draft Goals: </strong>
                {this._renderTitles()}
              </p>
              : null
          }
        </div>

        <div className={styles.buttons}>
          <MLButton
            dataId="cancel-button"
            title="Cancel"
            handleClick={this.props.closeModal}
            bordered={true}
          />
          <MLButton
            dataId="save-button"
            title="Save"
            handleClick={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

CheckboxForm.propTypes = {
  fields: PropTypes.array.isRequired,
  selectedFields: PropTypes.array.isRequired,
  saveForm: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
  activityId: PropTypes.string,
  draftId: PropTypes.string,
  selectionLimit: PropTypes.number,
  isFormListable: PropTypes.bool,
  isFormTogglable: PropTypes.bool
};

export default CheckboxForm;
