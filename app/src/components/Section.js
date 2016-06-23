import React, { PropTypes } from 'react';
import SectionTitle from './SectionTitle';
import Assignments from './../containers/AssignmentsContainer';

const Section = ({ index, title, summary, id, isExpanded, toggleSection }) => (
    <li>
        <SectionTitle index={index} title={title} id={id} toggleSection={toggleSection} />
        {isExpanded ? <div className="" >
            <p></p>
            <p>{summary}</p>
            <p></p>
            <Assignments id={id} />
        </div> : null}
    </li>
);

Section.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    summary: PropTypes.string,
    id: PropTypes.number,
    isExpanded: PropTypes.bool,
    toggleSection: PropTypes.func
};

export default Section;
