import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityContainer, ActivityDisplayContainer } from './../containers/index';
import { loadAuth } from '../modules/authModule';
import { loadDefaults } from '../modules/defaultsModule';
import jwtDecode from 'jwt-decode';
import cookie from 'react-cookie';

class LaunchContainer extends Component {
  componentWillMount() {
    const token = cookie.load('id_token'); //XXX should die here if not there.;
    const authValues = jwtDecode(token);
    const course = authValues.course_data.find(
      x => x.course_id === this.props.params.courseId
    );
    //XXX we need to error here if course isn't set.

    const auth = {
      id: authValues.id,
      firstName: authValues.first_name,
      lastName: authValues.last_name,
      role: course.role,
      activity: {
        activityId: this.props.params.activityId
      }
    };

    this.props.loadAuth(auth);

    const defaultValues = {
      homeRoute: window.location.pathname
    };

    this.props.loadDefaults(defaultValues);
  }

  render() {
    switch (this.props.role) {
      case 'instructor': {
        return <ActivityContainer />;
      }
      case 'student': {
        return <ActivityDisplayContainer />;
      }
      default:
        return null;
    }
  }
}

LaunchContainer.propTypes = {
  role: PropTypes.string,
  params: PropTypes.object,
  loadAuth: PropTypes.func,
  loadDefaults: PropTypes.func
};

export default connect(state => ({ role: state.auth.role }), { loadAuth, loadDefaults })(LaunchContainer);
