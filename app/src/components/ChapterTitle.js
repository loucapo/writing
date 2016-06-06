import React from 'react';

export default ({index, title, id, isExpanded, toggleChapter}) => (
    <div className="accord-title">
        <a aria-expanded={isExpanded} onClick={()=>toggleChapter(id)}>
            <div className="accord-toggle"></div>
            <div className="progress">
                <div class="num">{index}</div>
                {
                    // <image src={require('./../sass/image/icon_down_arrow.colors-cc0000.svg')}/>
                }
            </div>
            <div class="text">
                <h3>{title}</h3>
            </div>
        </a>
    </div>
);