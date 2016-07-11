import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { getAvailableCoursesByUID } from './../actions';
import Header from './../components/layout/Header';

class HeaderContainer extends Component {
  componentDidMount() { this.props.getAvailableCoursesByUID(this.props.url); }

  render() {
    return (<Header {...this.props} />);
  }
}

HeaderContainer.propTypes = {
  url: PropTypes.string,
  userName: PropTypes.string,
  headerMenuCourses: PropTypes.array,
  headerMenuHelp: PropTypes.object,
  getAvailableCoursesByUID: PropTypes.func
};


function mapStateToProps(state) {
  return {
    userName: state.auth.userName,
    headerMenuCourses: state.headerMenuCourses.items,
    headerMenuHelp: state.headerMenuHelp,
    url: '/api' + state.swagger.paths.coursesAvailableByUID.path
  };
}

export default connect(mapStateToProps, { getAvailableCoursesByUID })(HeaderContainer);

