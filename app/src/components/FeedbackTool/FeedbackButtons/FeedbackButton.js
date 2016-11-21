import React, {Component, PropTypes} from 'react';
import FeedbackModal from './../FeedbackModal/FeedbackModal'

class FeedbackButton extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //highlight color, specificSubmitFormAction, editorStateUpdateAction, specificFormModels

  }
  componentWillMount() {
    this.setState({
      isOpen: false
    });
  }
  onClose(e) {
    e.preventDefault();
    this.setState({
      isOpen: false
    });
  }

  onSubmit(x) {
    this.props.onSubmit(x);
    this.setState({
      isOpen: false
    });
  }

  onClick(e) {
    e.preventDefault();
    let pos;
    if(this.props.position) {
      const rect = this.props.position;
      let left = rect.left - 150 + rect.width / 2;
      left = left > 0 ? left : 0;
      pos = {top: rect.bottom + 20, left};
    }

    this.props.highlight(this.props.color);
    console.log('==========pos=========');
    console.log(pos);
    console.log('==========END pos=========');
    this.setState({
      isOpen: true,
      // convert the new Draft.js EditorState back to react-rte EditorValue
      position: pos
    });
  }

  render() {
      return (
        <li data-id={this.props.buttonName}>
          <img src={this.props.commentIcon} onClick={this.onClick}/>{this.props.buttonName}
          <FeedbackModal isOpen={this.state.isOpen}
                         position={this.state.position}
                         model={this.props.model}
                         onClose={this.onClose}
                         onSubmit={this.props.onSubmit} />
        </li>
      );
    };

  }

export default FeedbackButton