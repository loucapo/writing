import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSubmissionStatuses } from '../modules/submissionStatusesModule';
import { updateReviewStatus } from '../modules/studentDraftModule';
import { SubmissionStatusTable } from '../components/SubmissionStatus';
import sortBy from 'sort-by';
import moment from 'moment';

class SubmissionStatusContainer extends Component {
  componentWillMount() {
    this.props.getSubmissionStatuses(this.props.draftId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.draftId !== this.props.draftId) {
      this.props.getSubmissionStatuses(newProps.draftId);
    }
  }

  render() {
    return <SubmissionStatusTable {...this.props} />;
  }
}

SubmissionStatusContainer.propTypes = {
  draftId: PropTypes.string,
  getSubmissionStatuses: PropTypes.func,
  updateReviewStatus: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const submissionStatuses = state.submissionStatuses
    .filter(submission => submission.draftId === props.draftId)
    .map(submission => {
      return {
        ...submission,
        submittedDate: moment(submission.submittedDate).format('MMMM Do, YYYY'),
        reviewedDate: moment(submission.reviewedDate).format('MMMM Do, YYYY')
      };
    })
    .sort(sortBy('studentId'));
  return {
    draftId: props.draftId,
    submissionStatuses
  };
};

export default connect(mapStateToProps, {
  getSubmissionStatuses,
  updateReviewStatus
})(SubmissionStatusContainer);
