/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'

const TitleBar = ({courseName}) => (
    <div id="title" role="banner">
        <div className="inside">
            <h1>{courseName}</h1>
        </div>
    </div>
);

export default TitleBar;
