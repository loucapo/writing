import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StudentDraft from '../components/Draft/StudentDraft';
import {
  getStudentDraft,
  createStudentDraftIfNotThere
} from '../modules/studentDraftModule';

class StudentDraftContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    if (!this.props.studentDraft) {
      this.props.createStudentDraftIfNotThere(
        this.props.params.studentActivityId,
        this.props.params.draftId
      );
      this.props.getStudentDraft(
        this.props.params.studentActivityId,
        this.props.params.draftId
      );
    }
  }

  render() {
    return <StudentDraft {...this.props} />;
  }
}

StudentDraftContainer.propTypes = {
  getStudentDraft: PropTypes.func,
  studentDraft: PropTypes.object,
  params: PropTypes.object,
  activityId: PropTypes.string,
  createStudentDraftIfNotThere: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const studentDraft = state.studentDraft.find(
    x => x.draftId === props.params.draftId
  );
  return {
    studentDraft,
    studentActivityId: props.params.studentActivityId
  };
};

export default connect(mapStateToProps, {
  getStudentDraft,
  createStudentDraftIfNotThere
})(StudentDraftContainer);
