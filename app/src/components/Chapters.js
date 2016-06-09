/**
 * Created by rharik on 5/11/16.
 */

import React, { PropTypes } from 'react';
import Chapter from './Chapter';

const Chapters = ({ chapters, onChapterClick }) => (
    <div id="chapters">
        <h2>Chapters</h2>
        <ul>
            {chapters.map((chapter, index) =>
                <Chapter
                    key={chapter.id}
                    index={index + 1}
                    {...chapter}
                    onChapterClick={onChapterClick}
                />)}
        </ul>
    </div>);


Chapters.propTypes = {
    chapters: PropTypes.array,
    onChapterClick: PropTypes.func
};

export default Chapters;
