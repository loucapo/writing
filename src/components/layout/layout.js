/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'

const Layout = ({isAuthenticated, userName, children}) => {
    // if (!isAuthenticated) {
    //     return (<div>go home</div>)
    // }
    return (<div>
            'hello world, children go here!'
        {children}
    </div>)
};

export default Layout;