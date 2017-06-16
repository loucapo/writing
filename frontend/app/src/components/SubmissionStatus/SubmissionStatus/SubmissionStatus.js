import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { SubmissionStatusFilter } from '../index';
import { SubmissionStatusTableContainer } from '../../../containers';

import styles from './submissionStatus.css';


class SubmissionStatus extends Component {
  state = {
    draftId: this.props.draftId
  };

  selectDraftSubmissions = (draftId) => {
    this.setState({draftId});
  };

  render() {
    return (
      <div className={ styles.wrapper }>
        <SubmissionStatusFilter
          draftOptions={this.props.draftOptions}
          selectDraftSubmissions={this.selectDraftSubmissions}
          draftId={this.state.draftId} />
        <SubmissionStatusTableContainer draftId={this.state.draftId} />
      </div>);
  }
}

SubmissionStatus.propTypes = {
  draftOptions: PropTypes.array,
  draftId: PropTypes.string
};

export default SubmissionStatus;
