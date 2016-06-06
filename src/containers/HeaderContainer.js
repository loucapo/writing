import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onSelectCourseFromMenu } from './../actions/index';
import Header from './../components/layout/Header';

function mapStateToProps(state) {
    return {
        userName       : state.auth.userName,
        headerMenuCourses     : state.headerMenuCourses,
        headerMenuHelp     : state.headerMenuHelp
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onSelectCourseFromMenu }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);