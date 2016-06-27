import { connect } from 'react-redux';
import Header from './../components/layout/Header';

function mapStateToProps(state) {
    return {
        userName: state.auth.userName,
        headerMenuCourses: state.headerMenuCourses,
        headerMenuHelp: state.headerMenuHelp
    };
}

export default connect(mapStateToProps)(Header);
