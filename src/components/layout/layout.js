import React, {PropTypes} from 'react';
import Header from './../../containers/HeaderContainer';

const Layout = ({children}) => {
    // if (!isAuthenticated) {
    //     return (<div>go home</div>)
    // }
    return (
    <div>
        <Header />
        {children}
    </div>);
};

Layout.propTypes = {
    children: PropTypes.array
};


export default Layout;