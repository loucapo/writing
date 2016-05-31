import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onMenuToggle } from './../actions/index';
import Header from './../components/layout/Header';

function mapStateToProps(state) {
    return {
        userName       : state.auth.userName,
        headerMenuCourses     : state.headerMenuCourses,
        headerMenuHelp     : state.headerMenuHelp
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onMenuToggle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);