import React, { Component, PropTypes } from 'react';
import FlagDetails from './FlagDetails/FlagDetails';
import feedbackToolTypeMap from '../../feedbackToolTypeMap';
import feedbackToolContentFlag from './feedbackToolContentFlag.css';

class FeedbackToolContentFlag extends Component {
  state = {clicked: false};

  onClick = () => {
    this.setState({clicked: !this.state.clicked});
  };

  render = () => (
    <div className={feedbackToolContentFlag.flagContainer} onClick={this.onClick} >
      <div className={feedbackToolContentFlag.triangleBorder} style={{top: `${this.props.item.position.top - 65 }px`}} >
        <div className={feedbackToolContentFlag.title}>
          <strong>{feedbackToolTypeMap[this.props.item.type].title}</strong>
          <span className={feedbackToolContentFlag.icon} />
        </div>
        {this.state.clicked ? <FlagDetails item={this.props.item} /> : null}
      </div>
    </div>
  );
}

FeedbackToolContentFlag.propTypes = {
  item: PropTypes.object
};

export default FeedbackToolContentFlag;
