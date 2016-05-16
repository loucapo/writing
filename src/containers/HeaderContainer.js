/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions/index'
import Header from './../components/layout/Header.js'

function mapStateToProps(state) {
    return {
        userName       : state.auth.userName,
        headerMenuCourses     : state.headerMenuCourses,
        headerMenuHelp     : state.headerMenuHelp
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onCourseMenuHover:actions.onCourseMenuHover, onHelpMenuHover:actions.onHelpMenuHover }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

