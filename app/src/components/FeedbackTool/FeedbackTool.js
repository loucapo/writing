import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';
import highlightSelection from './utilities/highlightSelection'

import {Form} from 'freakin-react-forms';
import {EditorState, RichUtils} from 'draft-js';
import OtherButton from './FeedbackButtons/OtherButton'

class FeedbackTool extends Component {
  constructor() {
    super();
    //TODO import bind all for this crap
    this.onChange = this.onChange.bind(this);
    this.highlight = this.highlight.bind(this);
  }

  componentDidMount() {
  }

  componentWillMount() {
    // XXX i'd really like to leave this as an example, as we will be needing it and
    // XXX I'm finally getting clear on how to do the data load stuff
    // this.props.fetchStudentSubmissionAction(this.props.params.id);
    this.setState({
      value: this.props.document
    });
  }

  componentWillReceiveProps() {
    // XXX i'd really like to leave this as an example, as we will be needing it and
    // XXX I'm finally getting clear on how to do the data load stuff
    // if(newProps.params.id !== oldProps.params.id) {
    //   this.props.fetchStudentSubmissionAction(newProps.props.params.id);
    // }
  }

  onChange(value) {
    console.log('==========windo.getSelection()=========');
    console.log(window.getSelection());
    console.log('==========END windo.getSelection()=========');
    const rect = window.getSelection().anchorOffset > 0 ? window.getSelection().getRangeAt(0).getBoundingClientRect() : null;
    console.log('==========rect=========');
    console.log(rect);
    console.log('==========END rect=========');
    this.setState({value, rect});
  }

  highlight(color) {
    const editorValue = this.state.value;
    var editorState = editorValue.getEditorState();
    const value =  editorValue.setEditorState(highlightSelection(editorState, color));
    this.setState({value});
  }

  render() {
    const colorStyleMap = {
      green: {
        backgroundColor: 'lightgreen'
      }
    };
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (
      <div>
        <OtherButton submitOtherComment={this.props.submitOtherComment} position={this.state.rect} highlight={this.highlight}> click me</OtherButton>
        <RichTextEditor onChange={this.onChange} value={this.state.value} customStyleMap={colorStyleMap} />
      </div>
    );
  }
}

FeedbackTool.propTypes = {
  document: PropTypes.object,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitOtherComment: PropTypes.func
};

export default FeedbackTool;
