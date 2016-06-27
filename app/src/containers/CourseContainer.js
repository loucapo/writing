import Course from './../components/Course.js';
import courseSelector from './selectors/courseSelector';
import { connect } from 'react-redux';
import { getCourse } from './../actions';
import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

class CourseContainer extends Component {
    componentDidMount() { this.loadData(); }
    componentDidUpdate() { this.loadData(); }
    loadData() { this.props.getCourse(this.props.url, this.props.id); }

    render() {
        if (this.props.isFetching) {
            return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
        }
        if (this.props.errorMessage) {
            return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
        }
        return (<Course {...this.props} />);
    }
}

CourseContainer.propTypes = {
    url: PropTypes.string,
    id: PropTypes.string,
    isFetching: PropTypes.string,
    errorMessage: PropTypes.string,
    getCourse: PropTypes.func
};

export default withRouter(connect(courseSelector, { getCourse })(CourseContainer));
