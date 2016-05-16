/**
 * Created by rharik on 5/11/16.
 */

import React from 'react';
import Chapter from './Chapter';

export default ({chapters, onChapterClick}) => {
    return (
        <div id="chapters">
            <h2>Chapters</h2>
            <ul>
                {chapters.map((chapter, index) =>
                    <Chapter key={chapter.id} index={index+1} {...chapter} onChapterClick={onChapterClick}/> )}
            </ul>
        </div>)
}