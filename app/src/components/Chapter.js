/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import ChapterTitle from './ChapterTitle'
import Assignments from './../containers/AssignmentsContainer'

export default ({index, title, summary, assignments, id, isExpanded, toggleChapter}) => (
        <li>
            <ChapterTitle index={index} title={title} id={id} toggleChapter={toggleChapter} />
            {isExpanded ? <div className="">
                <p></p>
                <p>{summary}</p>
                <p></p> 
                <Assignments id={id} /> 
            </div>: null}
        </li>
    );
