import React, {PropTypes} from 'react';

const ChapterTitle = ({isExpanded, index, title, id, onChapterClick}) => (
<div className="accord-title">
    <a aria-expanded={isExpanded} onClick={()=>onChapterClick(id)}>
        <div className="accord-toggle"></div>
        <div className="progress">
            <div className="num">{index}</div>
            <image src={require('./../sass/image/icon_down_arrow.colors-cc0000.svg')} />
        </div>
        <div className="text">
            <h3>{title}</h3>
        </div>
    </a>
</div>
);


ChapterTitle.propTypes = {
    isExpanded: PropTypes.bool,
    index: PropTypes.int,
    title: PropTypes.string,
    id: PropTypes.int,
    onChapterClick: PropTypes.func
};

export default ChapterTitle;