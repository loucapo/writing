/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'

export default ({expanded, index, title, expandChapter}) => (
<div className="accord-title">
    <a aria-expanded={expanded} onClick={expandChapter}>
        <div className="accord-toggle"></div>
        <div className="progress">
            <div class="num">{index}</div>
            <image src={require('./../sass/image/icon_down_arrow.svg')} />
        </div>
        <div class="text">
            <h3>{title}</h3>
        </div>
    </a>
</div>
);

//Experiment 1 - Density