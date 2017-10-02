import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { EditingMarksModal } from '../components/FeedbackTool';
import { getEditingMarks } from '../modules/editingMarksModule';
import { createFeedback } from '../modules/feedbackModule';

class EditingMarksModalContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.getEditingMarks();
  }

  render() {
    return this.props.editingMarks.length > 0 ? <EditingMarksModal {...this.props} /> : null;
  }
}

EditingMarksModalContainer.propTypes = {
  getEditingMarks: PropTypes.func,
  editingMarks: PropTypes.array
};

const mapStateToProps = (state) => {
  let editingMarks = state.editingMarks.map(mark => {
    mark.id = mark.editingMarkId;
    return mark;
  });

  return {
    editingMarks
  };
};

export default connect(mapStateToProps, {
  getEditingMarks,
  createFeedback
})(EditingMarksModalContainer);
