import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { feedbackToolAction } from './../modules';
import FeedbackTool from '../components/FeedbackTool/FeedbackTool';

class FeedbackToolContainer extends Component {
  componentWillMount() { this.loadData(); }

  componentWillReceiveProps(newProps) { this.loadData(); }

  loadData() { this.props.feedbackToolAction(this.props.params.id); }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<FeedbackTool{...this.props} />);
  }
}

FeedbackToolContainer.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  params: PropTypes.object
}

const mapStateToProps = (state, props) => {
  let feedbackTool = state.studentSubmissions.filter(x => x.id === props.id);

  return {
    studentDraft: RichTextEditor.createValueFromString(feedbackTool[0] ? feedbackTool[0].draft : '', 'html')
  };
};

export default connect(mapStateToProps, {feedbackToolAction})(FeedbackToolContainer);


