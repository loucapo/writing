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
        return (<Course {...this.props} />);
    }
}

CourseContainer.propTypes = {
    url: PropTypes.string,
    id: PropTypes.string,
    getCourse: PropTypes.func
};

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getCourse }, dispatch);
// }

export default withRouter(connect(courseSelector, { getCourse })(CourseContainer));
