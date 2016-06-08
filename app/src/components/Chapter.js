import React from 'react';
import ChapterTitle from './ChapterTitle';
import AssignmentsContainer from './../containers/AssignmentsContainer';

export default ({index, title, summary, id, isExpanded, toggleChapter}) => {
    return (
        <li>
            <ChapterTitle index={index} title={title} id={id} toggleChapter={toggleChapter}/>
            {isExpanded ? <div className="">
                <p></p>
                <p>{summary}</p>
                <p></p>
                <AssignmentsContainer id={id}/>
            </div> : null}
        </li>
    );
}
