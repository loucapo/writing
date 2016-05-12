/**
 * Created by rharik on 5/11/16.
 */

import React from 'react';
import Chapter from './Chapter';

export default ({chapters}) => (
    <div id="chapters">
    <h2>Chapters</h2>
    <ul>
        {chapters.map(chapter => <Chapter key={chapter.id} {...chapter}/> )}
    </ul>
</div>)