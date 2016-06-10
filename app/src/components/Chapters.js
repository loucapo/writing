/**
 * Created by rharik on 5/11/16.
 */

import React, { PropTypes } from 'react';
import Chapter from './Chapter';

const Chapters = ({ chapters, toggleChapter }) => (
    <div id="chapters">
        <h2>Chapters</h2>
        <ul>
            {chapters.map((chapter, index) =>
                <Chapter
                    key={chapter.id}
                    index={index + 1}
                    {...chapter}
                    toggleChapter={toggleChapter}
                />)}
        </ul>
    </div>);


Chapters.propTypes = {
    chapters: PropTypes.array,
    toggleChapter: PropTypes.func
};

export default Chapters;
