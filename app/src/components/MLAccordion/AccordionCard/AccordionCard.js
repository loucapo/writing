import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './accordionCard.css';

class AccordionCard extends Component {
  state = {
    showContents: false
  };

  toggleContents = () => {
    this.setState({
      showContents: !this.state.showContents
    });
  }

  render() {
    let openClass = (this.state.showContents) ? ' ' + styles.open : '';
    let iconType = (this.state.showContents) ? 'minus' : 'plus';
    let accordionCardClass = `${styles.container}${openClass}`;

    return (
      <div className={accordionCardClass}>
        <div className={styles.title} onClick={this.toggleContents} data-id={this.props.dataId}>
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
          {this.props.content}
        </div>
      </div>
    );
  }
}

AccordionCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  dataId: PropTypes.string
};

export default AccordionCard;
