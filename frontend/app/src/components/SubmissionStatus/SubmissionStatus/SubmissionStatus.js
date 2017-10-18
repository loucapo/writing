import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { SubmissionStatusFilter } from '../index';
import { SubmissionStatusTableContainer } from '../../../containers';

import styles from './submissionStatus.css';

class SubmissionStatus extends Component {
  state = {
    draftId: null,
    draftOptions: []
  };

  componentWillMount = () => {
    this.createDraftOptions(this.props.drafts);
  };

  componentWillReceiveProps = (nextProps) => {
    this.createDraftOptions(nextProps.drafts);
  }

  createDraftOptions = (drafts) => {
    if (!drafts || drafts.length === 0) {
      return;
    }

    drafts.sort((a, b) => a.index - b.index );
    const draftId = this.props.currentDraft || drafts.find(x => x.index === 0).draftId;
    const draftOptions = drafts.map(x => ({
      id: x.draftId,
      value: `Draft ${x.index + 1}`
    }));
    draftOptions[draftOptions.length - 1].value = 'Final Paper';

    this.setState({
      draftId,
      draftOptions
    });
  }

  selectDraftSubmissions = (draftId) => {
    this.setState({draftId});
  };

  render() {
    return (
      <div className={styles.submissionStatusArea}>
        {(this.props.drafts && this.props.drafts.length) > 0 ?
          <div className={ styles.wrapper }>
            <SubmissionStatusFilter
              draftOptions={this.state.draftOptions}
              selectDraftSubmissions={this.selectDraftSubmissions}
              draftId={this.state.draftId} />
            <SubmissionStatusTableContainer draftId={this.state.draftId} />
          </div>
          :
          <div className={styles.submissionStatusEmpty}>
            You haven't created any drafts yet
          </div>
        }
      </div>);
  }
}

SubmissionStatus.propTypes = {
  drafts: PropTypes.array,
  currentDraft: PropTypes.string
};

export default SubmissionStatus;
