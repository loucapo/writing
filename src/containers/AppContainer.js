/**
 * Created by reharik on 3/11/16.
 */

import { connect } from 'react-redux'
import Layout from './../components/layout/layout.js'

function mapStateToProps(state) {
    return {
        // isAuthenticated: state.auth.isAuthenticated,
        // userName       : state.auth.userName
    }
}

export default connect(mapStateToProps)(Layout);

