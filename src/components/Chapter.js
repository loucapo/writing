/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import ChapterTitle from './ChapterTitle'
import Assignments from './Assignments'

export default ({index, title, summary, assignments}) => (
        <li>
            <ChapterTitle index={index} title={title} />
            <div className="accord-content">
                <p></p>
                <p>{summary}</p>
                <p></p>
                <Assignments assignments={assignments} />
            </div>
        </li>
    );
