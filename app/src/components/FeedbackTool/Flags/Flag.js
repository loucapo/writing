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

  render() {
    if (this.state.clicked) {
      return (
        <div key={this.props.index} className={flag.flagContainer} onClick={this.onClick} >
          <div key={this.props.index} className={flag.triangle_border} >
            <div className={flag.title}>{this.props.flagItem.title}</div>
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
                      <a href={resource.url} className={flag.anchor}>
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
        <div key={this.props.index} className={flag.flagContainer} onClick={this.onClick} >
          <div key={this.props.index} className={flag.triangle_border} >
            <div className={flag.title}>{this.props.flagItem.title}</div>
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

