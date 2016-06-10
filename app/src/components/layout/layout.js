import React, { PropTypes } from 'react';
import Header from './../../containers/HeaderContainer';

const Layout = ({ children }) => (<div>
    <Header />
    {children}
</div>);

Layout.propTypes = {
    children: PropTypes.object
};

export default Layout;

