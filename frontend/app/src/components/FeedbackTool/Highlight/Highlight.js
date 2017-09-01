import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Highlight extends Component {
  render() {
    debugger
    return (
      <div className='highlight'>
        {this.props.children}
        testing
      </div>
    );
  }
}

Highlight.propTypes = {
  children: PropTypes.array
};

export default Highlight;
