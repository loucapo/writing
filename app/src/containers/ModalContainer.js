import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DraftFocusModal from '../components/MLModal/draftFocusModal';
import {closeModal} from '../modules/modalModule';

class ModalContainer extends Component {
  render() {
    switch (this.props.currentModal) {
      case 'draftFocus':
        return <DraftFocusModal {...this.props} />;

      default:
        return null;
    }
  }
}

ModalContainer.propTypes = {
  currentModal: PropTypes.string
};

export default connect(state => state, {closeModal})(ModalContainer);
