/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import Header from './../../containers/HeaderContainer'
import TitleBar from './../../components/layout/TitleBar'
import NavBar from './../../components/layout/NavBar'

const Layout = ({courseName, children}) => {
    // if (!isAuthenticated) {
    //     return (<div>go home</div>)
    // }
    return (<div>
        <Header />
        <TitleBar courseName={courseName} />
        <NavBar />
        {children}
    </div>)
};

export default Layout;