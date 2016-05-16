/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import Header from './../../containers/HeaderContainer'

const Layout = ({children}) => {
    // if (!isAuthenticated) {
    //     return (<div>go home</div>)
    // }
    return (
    <div>
        <div id="coverup" style={{display: 'none'}}></div>
        <Header />
        {children}
    </div>)
};

export default Layout;