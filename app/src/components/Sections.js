import React, { PropTypes } from 'react';
import Section from './Section';

const Sections = ({ sections, toggleSection }) => (
    <div id="sections">
        <h2>Sections</h2>
        <ul>
            {sections.map((section, index) =>
                <Section
                    key={section.id}
                    index={index + 1}
                    {...section}
                    toggleSection={toggleSection}
                />)}
        </ul>
    </div>);


Sections.propTypes = {
    sections: PropTypes.array,
    toggleSection: PropTypes.func
};

export default Sections;
