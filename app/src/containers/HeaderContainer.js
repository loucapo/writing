import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../components/layout/Header';
import { navigateToCourse } from './../actions';

function mapStateToProps(state) {
    return {
        userName: state.auth.userName,
        headerMenuCourses: state.headerMenuCourses,
        headerMenuHelp: state.headerMenuHelp
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ navigateToCourse }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
