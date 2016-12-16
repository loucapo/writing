import React, { Component, PropTypes } from 'react';
import FeedbackToolContentFlag from './FeedbackToolContentFlag/FeedbackToolContentFlag';
import feedbackToolContentFlags from './feedbackToolContentFlags.css';


class FeedbackToolContentFlags extends Component {
  state = {expanded: []};

  onClick = (expand, id) => {
    let expanded = this.state.expanded;
    if(expand) {
      expanded.push(id);
    } else {
      expanded = expanded.filter(x => x !== id);
    }
    this.setState({expanded, topFlag: id});
  };

  render() {
    return (
      <div className={ feedbackToolContentFlags.flagContainer }>
        {this.props.feedbackToolContentItems.map((item, index) => (
          <FeedbackToolContentFlag
            expanded={this.state.expanded.includes(item.id)}
            topFlag={this.state.topFlag === item.id}
            item={item}
            onClick={this.onClick}
            key={index} />
        ))}
      </div>
    );
  }
}

FeedbackToolContentFlags.propTypes = {
  feedbackToolContentItems: PropTypes.array
};

export default FeedbackToolContentFlags;
