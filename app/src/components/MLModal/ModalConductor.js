import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../data/actions.js';
import DraftFocusModal from './draftFocusModal.jsx';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'draftFocus':
      return <DraftFocusModal {...props}/>;

    default:
      return null;
  }
};

export default connect(state => state, () => actions)(ModalConductor);
