import React from 'react';
import PropTypes from 'prop-types';
import AccordionCard from './AccordionCard/AccordionCard';

import styles from './mlAccordion.css';

const Accordion = ({list}) => (
  <ul className={styles.container}>
    {
      list.map((card, idx) => (
        <li key={idx} className={styles.border}>
          <AccordionCard
            title={card.title}
            content={card.content}
            dataId={card.dataId}
            key={card.dataId}
          />
        </li>
      ))
    }
  </ul>
);

Accordion.propTypes = {
  list: PropTypes.array
};

export default Accordion;
