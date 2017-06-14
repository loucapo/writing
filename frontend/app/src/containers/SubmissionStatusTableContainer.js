import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getSubmissionStatuses } from './../modules/submissionStatusesModule';
import { SubmissionStatusTable } from './../components/SubmissionStatus';
import sortBy from 'sort-by';
import moment from 'moment';

class SubmissionStatusContainer extends Component {
  componentWillMount() {
    this.props.getSubmissionStatuses(this.props.draftId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.draftId !== this.props.draftId) {
      this.props.getSubmissionStatuses(newProps.draftId);
    }
  }

  render() {
    return (<SubmissionStatusTable {...this.props} />);
  }
}

SubmissionStatusContainer.propTypes = {
  draftId: PropTypes.string,
  getSubmissionStatuses: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const submissionStatuses = state.submissionStatuses
    .filter(x => x.draftId === props.draftId)
    .map(x => x.status === 'submitted'
        ? {...x, submittedDate: moment(x.submittedDate).format('MMMM Do, YYYY')}
        : x)
    .sort(sortBy('studentId'));
  return {
    draftId: props.draftId,
    submissionStatuses
  };
};

export default connect(mapStateToProps, {
  getSubmissionStatuses })(SubmissionStatusContainer);
