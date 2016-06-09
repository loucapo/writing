/**
 * Created by rharik on 5/11/16.
 */

import React, { PropTypes } from 'react';
import ChapterTitle from './ChapterTitle';
import Assignments from './../containers/AssignmentsContainer';

const Chapter = ({ index, title, summary, id, isExpanded, onChapterClick }) => (
    <li>
        <ChapterTitle index={index} title={title} id={id} onChapterClick={onChapterClick} />
        {isExpanded ? <div className="">
            <p></p>
            <p>{summary}</p>
            <p></p>
            <Assignments id={id} />
        </div> : null}
    </li>
);


Chapter.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    summary: PropTypes.string,
    id: PropTypes.number,
    isExpanded: PropTypes.bool,
    onChapterClick: PropTypes.func
};

export default Chapter;
