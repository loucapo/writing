import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { SubmissionStatusTableContainer } from './../../../containers';

import submissionStatus from './submissionStatus.css';


class SubmissionStatus extends Component {
  state = {
    draftId: this.props.draftId
  };

  render() {
    return (
      <div className={ submissionStatus.wrapper }>
        <div className={ submissionStatus.subList }>
          <SubmissionStatusTableContainer draftId={this.state.draftId} />
        </div>
      </div>);
  }
}

SubmissionStatus.propTypes = {
  draftOptions: PropTypes.array,
  draftId: PropTypes.string
};

export default SubmissionStatus;
