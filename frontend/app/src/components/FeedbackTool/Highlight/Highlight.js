import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Highlight extends Component {
  render() {
    return (
      <span className='highlight'>
        {this.props.block.getText()}
      </span>
    );
  }
}

Highlight.propTypes = {
  children: PropTypes.array
};

export default Highlight;
