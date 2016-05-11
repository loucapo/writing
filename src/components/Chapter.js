/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import ChapterTitle from './ChapterTitle'
import ChapterContent from './ChapterContent'

export default ({index, title, content}) => (
    <li>
        <ChapterTitle index={index} title={title} />
        <ChapterContent {...content} />
    </li>
)