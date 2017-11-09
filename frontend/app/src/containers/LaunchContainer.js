import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityContainer, ActivityDisplayContainer } from './../containers/index';
import { loadAuth } from '../modules/authModule';
import { loadDefaults } from '../modules/defaultsModule';
import jwtDecode from 'jwt-decode';
import cookie from 'react-cookie';

class LaunchContainer extends Component {

  state = {
    auth: {}
  };

  componentWillMount = () => {
    const pathArray = this.props.location.pathname.split('/');
    if (pathArray.length < 4) {
      throw new Error('Unable to authorize user. URL is malformed.');
    }
    const courseId = pathArray[2];
    const resourceId = pathArray[3];
    const token = cookie.load('id_token'); //XXX should die here if not there.;
    const authValues = jwtDecode(token);
    const appMetadata = authValues['https://macmillantech.com/app_metadata'];
    const userMetadata = authValues['https://macmillantech.com/user_metadata'];
    let studentEnrollments = [];
    let instructorEnrollments = [];
    if (appMetadata && appMetadata.course_data) {
      if (appMetadata.course_data.student) {
        studentEnrollments = appMetadata.course_data.student;
      }

      if (appMetadata.course_data.instructor) {
        instructorEnrollments = appMetadata.course_data.instructor;
      }
    }

    const isEnrolledStudent = studentEnrollments ? studentEnrollments.includes(courseId) : false;
    const isEnrolledInstructor = instructorEnrollments ? instructorEnrollments.includes(courseId) : false;
    let role;
    if (isEnrolledInstructor) {
      role = 'instructor';
    } else if (isEnrolledStudent) {
      role = 'student';
    }

    const auth = {
      id: authValues.sub,
      firstName: userMetadata.first_name,
      lastName: userMetadata.last_name,
      role,
      activity: {
        activityId: resourceId
      }
    };

    this.setState({
      auth
    });

    this.props.loadAuth(auth);

    const defaultValues = {
      homeRoute: window.location.pathname
    };

    this.props.loadDefaults(defaultValues);
  };

  render = () => {
    switch (this.state.auth.role) {
      case 'instructor': {
        return <ActivityContainer />;
      }
      case 'student': {
        return <ActivityDisplayContainer />;
      }
      default:
        return null;
    }
  };
}

LaunchContainer.propTypes = {
  role: PropTypes.string,
  location: PropTypes.object,
  loadAuth: PropTypes.func,
  loadDefaults: PropTypes.func
};

export default connect(state => ({ role: state.auth.role }), { loadAuth, loadDefaults })(LaunchContainer);
