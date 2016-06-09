/**
 * Created by rharik on 5/11/16.
 */

import React, { PropTypes } from 'react';
import TitleBar from './TitleBar';
import NavBar from './NavBar';
import Assignments from './../containers/UpCommingAssignmentsContainer';
import Chapters from './../containers/ChaptersContainer';
import { getCourse } from './../actions';

class Course extends React.Component {
    componentWillMount() {
        this.loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps);
    }

    loadData(props) {
        const { dispatch, params } = props;
        const { id } = params;
        dispatch(getCourse(id));
    }

    render() {
        return (<div>
            <TitleBar title={this.props.courseTitle} />
            <NavBar />
            <div id="content" role="main" className="inside">
                <Assignments />
                <Chapters />
            </div>
        </div>);
    }
}

Course.propTypes = {
    courseTitle: PropTypes.string
};

export default Course;
