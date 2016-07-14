import React, { PropTypes } from 'react';
import SectionTitle from './SectionTitle';
import Assignments from './../containers/AssignmentsContainer';

const Section = ({ index, title, summary, externalId, isExpanded, toggleSection }) => (
  <li>
    <SectionTitle index={index} title={title} id={externalId} toggleSection={toggleSection} />
    {isExpanded ? <div className="" >
      <p></p>
      <p>{summary}</p>
      <p></p>
      <Assignments id={externalId} />
    </div> : null}
  </li>
);

Section.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  summary: PropTypes.string,
  externalId: PropTypes.number,
  isExpanded: PropTypes.bool,
  toggleSection: PropTypes.func
};

export default Section;

