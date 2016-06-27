import React, { PropTypes } from 'react';

const TitleBar = ({ title }) => (
    <div id="title" role="banner">
        <div className="inside">
            <h1>{title}</h1>
        </div>
    </div>
);

TitleBar.propTypes = {
    title: PropTypes.string
};

export default TitleBar;
