import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import AccordionCard from './AccordionCard/AccordionCard';

import styles from './mlAccordion.css';

class Accordion extends Component {
  state = {
    renderIndex: 0
  };

  showCard = newIndex => {
    if (newIndex === this.state.renderIndex) {
      newIndex = null;
    }
    this.setState({
      renderIndex: newIndex
    });
  };

  render() {
    return (
      <ul className={styles.container}>
        {this.props.list.map((card, idx) => {
          let showMe = idx === this.state.renderIndex;
          let iconType = showMe ? 'minus' : 'plus';

          return (
            <li key={idx} className={styles.border}>
              <div className={styles.container}>
                <div
                  className={styles.title}
                  onClick={this.showCard.bind(this, idx)}
                  data-id={card.dataId}
                >
                  <MLIcon
                    className={styles.icon}
                    title="expand"
                    type={iconType}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  />
                  {card.title}
                </div>
                {showMe
                  ? <AccordionCard content={card.content} key={card.dataId} />
                  : null}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

Accordion.propTypes = {
  list: PropTypes.array
};

export default Accordion;
