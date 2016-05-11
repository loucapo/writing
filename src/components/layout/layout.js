/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import Header from './../../containers/HeaderContainer'

const Layout = ({isAuthenticated, userName, children}) => {
    // if (!isAuthenticated) {
    //     return (<div>go home</div>)
    // }
    return (<div>
        <Header userName={userName} />
        {children}
    </div>)
};

export default Layout;