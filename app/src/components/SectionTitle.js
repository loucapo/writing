import React, { PropTypes } from 'react';

const SectionTitle = ({ isExpanded, index, title, id, toggleSection }) => (
    <div className="accord-title" >
        <a aria-expanded={isExpanded} onClick={() => toggleSection(id)} >
            <div className="accord-toggle" ></div>
            <div className="progress" >
                <div className="num" >{index}</div>
                <i className="icon-icon_down_arrow-0" />

            </div>
            <div className="text" >
                <h3>{title}</h3>
            </div>
        </a>
    </div>
);


SectionTitle.propTypes = {
    isExpanded: PropTypes.bool,
    index: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
    toggleSection: PropTypes.func
};

export default SectionTitle;
