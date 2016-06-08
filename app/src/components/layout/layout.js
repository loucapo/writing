import React from 'react'
import Header from './../../containers/HeaderContainer'

const Layout = ({children}) => {
    // if (!isAuthenticated) {
    //     return (<div>go home</div>)
    // }
    return (
    <div>
        <Header />
        {children}
    </div>)
};

export default Layout;