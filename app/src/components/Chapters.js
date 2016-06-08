import React from 'react';
import Chapter from './Chapter';

export default ({chapters, toggleChapter}) => {
    return (
        <div id="chapters">
            <h2>Chapters</h2>
            <ul>
                {
                    chapters.map((chapter, index) =>
                        <Chapter key={chapter.id} index={index+1} {...chapter} toggleChapter={toggleChapter}/>)
                }
            </ul>
        </div>
    );
};
