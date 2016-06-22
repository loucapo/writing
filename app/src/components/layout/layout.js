import React, { PropTypes } from 'react';
import Header from './../../containers/HeaderContainer';

const Layout = ({ children, getSwaggerSpec }) => {
    getSwaggerSpec();
    return (<div>
        <Header />
        {children}
    </div>);
};

Layout.propTypes = {
    children: PropTypes.object,
    getSwaggerSpec: PropTypes.func
};

export default Layout;

