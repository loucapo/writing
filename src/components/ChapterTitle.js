/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'

export default ({index, title}) => (
<div className="accord-title">
    <a aria-expanded="false">
        <div className="accord-toggle"></div>
        <div className="progress">
            <div className="num">{index}</div>
            <image src={require('./../sass/image/icon_down_arrow.svg')} />
        </div>
        <div class="text">
            <h3>{title}</h3>
        </div>
    </a>
</div>
);

//Experiment 1 - Density