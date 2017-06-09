import {connect} from 'react-redux';
import { SubmissionStatus } from './../components/SubmissionStatus';

const mapStateToProps = (state) => {
  const draftId = state.drafts.find(x => x.index === 0).draftId;
  const draftOptions = state.drafts.map(x => ({
    id: x.draftId,
    value: `Draft ${x.index + 1}`
  }));
  draftOptions[draftOptions.length - 1].value = 'Final Paper';

  return {
    draftId,
    draftOptions
  };
};

export default connect(mapStateToProps)(SubmissionStatus);
