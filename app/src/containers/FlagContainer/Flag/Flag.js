import React, { Component, PropTypes } from 'react';

import flag from './flag.css';

class Flag extends Component {
  constructor() {
    super();
    this.state = {clicked: false};
  }

  onClick = () => {
    this.setState({clicked: !this.state.clicked});
  };

  //TODO: this should probably be refactored later to be stateless and moved to the components
  // folder...it could be 2 mini components with the state controlled but the flags container, choosing which to show.

  render() {
    if (this.state.clicked) {
      return (
        <div key={this.props.index} className={flag.flagContainer} onClick={this.onClick} >
          <div key={this.props.index} className={flag.triangle_border} >
            <div className={flag.title}>
              <span>{this.props.flagItem.title}</span>
              <span className={flag.icon} />
            </div>
            {
              this.props.flagItem.contentParagraphs.map((paragraph, contentIndex) => {
                return <div key={contentIndex} className={flag.paragraph}>{paragraph}</div>;
              })
            }
            <div className={flag.resources}>Resources</div>
            <ul className={flag.list_container}>
              {
                this.props.flagItem.resources.map((resource, resourceIndex) => {
                  return (
                    <li key={resourceIndex} className={flag.list_item}>
                      <div className={flag.image} />
                      <a data-id="resource-url" href={resource.url} className={flag.anchor}>
                        {resource.title}
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      );
    }
    else {
      return (
        <div key={this.props.index} onClick={this.onClick} >
          <div key={this.props.index} className={flag.triangle_border} >
            <span className={flag.title}>{this.props.flagItem.title}</span>
            <span className={flag.icon} />
          </div>
        </div>
      );
    }
  }
}

Flag.propTypes = {
  flagItem: PropTypes.object,
  index: PropTypes.number
};

export default Flag;

