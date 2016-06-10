import React, { PropTypes } from 'react';

const ChapterTitle = ({ isExpanded, index, title, id, toggleChapter }) => (
    <div className="accord-title">
        <a aria-expanded={isExpanded} onClick={() => toggleChapter(id)}>
            <div className="accord-toggle"></div>
            <div className="progress">
                <div className="num">{index}</div>
                <i className="icon-icon_down_arrow-0" />;

            </div>
            <div className="text">
                <h3>{title}</h3>
            </div>
        </a>
    </div>
);


ChapterTitle.propTypes = {
    isExpanded: PropTypes.bool,
    index: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.number,
    toggleChapter: PropTypes.func
};

export default ChapterTitle;
