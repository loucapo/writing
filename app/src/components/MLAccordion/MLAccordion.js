import React, {Component, PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mlaccordion.css';

class MLAccordion extends Component {
  state = {
    showContents: false
  };

  toggleContents = () => {
    this.setState({
      showContents: !this.state.showContents
    });
  }

  handleClick = () => {
    this.toggleContents();
  };

  render = () => {

    let openClass = (this.state.showContents) ? ' ' + styles.open : '';
    let iconType = (this.state.showContents) ? 'minus' : 'plus';
    let accordionClass = `${styles.container}${openClass}`;

    return (
      <div className={accordionClass}>
        <div className={styles.title} onClick={this.handleClick} data-id={this.props.type}>
          <MLIcon
            className={styles.icon}
            title="expand"
            type={iconType}
            width="12"
            height="12"
            viewBox="0 0 24 24"
          />
          {this.props.title}
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  };
}

MLAccordion.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.object
};

export default MLAccordion;
