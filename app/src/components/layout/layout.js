import React, { PropTypes } from 'react';
import Header from './../../containers/HeaderContainer';
import { CALL_API } from 'redux-api-middleware';

const Layout = ({ children, dispatch }) => {
    dispatch({
        type: 'GetSwaggerSpec',
        [CALL_API]: {
            endpoint: 'http://localhost:3000/documentationJS',
            method: 'GET',
            types: ['SWAGGER_REQUEST', 'SWAGGER_SUCCESS', 'SWAGGER_FAILURE']
        }
    });
    return (<div>
        <Header />
        {children}
    </div>);
};

Layout.propTypes = {
    children: PropTypes.object,
    dispatch: PropTypes.func
};

export default Layout;

