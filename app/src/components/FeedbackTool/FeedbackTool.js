import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';
import MLModal from './../MLModal/MLModal';

import {Form} from 'freakin-react-forms';
import Input from './../FormElements/Input';
import {EditorState, RichUtils} from 'draft-js';

class FeedbackTool extends Component {
  constructor() {
    super();
    //TODO import bind all for this crap
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.onClick();
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

  onClose(e) {
    e.preventDefault();
    this.setState({
      isOpen: false
    });
  }

  onChange(value) {
    const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    this.setState({value, rect});
  }

  onSubmit(x) {
    this.props.submitOtherComment(x);
    this.setState({
      isOpen: false
    });
  }

  onClick() {
    const editorValue = this.state.value;
    // get Draft.js EditorState from react-rte EditorValue
    const editorState = editorValue.getEditorState();

    const contentState = editorState.getCurrentContent();
    // not exactly clear on this yet but you need to get a new immutable
    // EditorState with a description of what happened in it.
    let nextEditorState = EditorState.push(
      editorState,
      contentState,
      'change-inline-style'
    );

    nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, 'green');
    const rect = this.state.rect;
    let left = rect.left - 150 + rect.width / 2;
    left = left > 0 ? left : 0;

    const pos = {top: rect.bottom + 20, left};

    this.setState({
      isOpen: true,
      // convert the new Draft.js EditorState back to react-rte EditorValue
      value: editorValue.setEditorState(nextEditorState),
      modalPosition: pos
    });
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
        <button onClick={this.onClick}> click me</button>
        <RichTextEditor onChange={this.onChange} value={this.state.value} customStyleMap={colorStyleMap} />
        <MLModal position={this.state.modalPosition} titleBar={{enable: false}} isOpen={this.state.isOpen}
          closeModal={this.onClose}>
          <Form submitHandler={this.onSubmit} model={this.props.model}>
            <div>
              <Input frfProperty={this.props.model.otherComment} />
            </div>
            <button type="submit">Submit</button>
            <button onClick={x=>this.onClose(x)}>Cancel</button>
          </Form>
        </MLModal>
      </div>
    );
  }
}

FeedbackTool.propTypes = {
  document: PropTypes.object,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitOtherComment: PropTypes.func,
  model: PropTypes.object
};

export default FeedbackTool;
