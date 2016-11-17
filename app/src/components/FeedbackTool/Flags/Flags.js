import React, { Component, PropTypes } from 'react';

import Flag from './Flag';

class Flags extends Component {
  constructor() {
    super();
  }

  getContent = () => {
    return (
      this.props.flagElements.map((flagItem, index) => {
        return (<Flag flagItem={flagItem} index={index} key={index} />);
      })
    );
  }

  render() {
    return (<div>{this.getContent()}</div>);
  }
}

Flags.propTypes = {
  flagElements: PropTypes.array
};

export default Flags;
