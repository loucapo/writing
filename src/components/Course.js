/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import TitleBar from './TitleBar'
import NavBar from './NavBar'
import Assignments from './../containers/UpCommingAssignmentsContainer'
import Chapters from './../containers/ChaptersContainer'
import loadCourse from './../actions'

class Course extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch, params} = this.props;
        const {id} = params;
        // dispatch(loadCourse(id));
    }
    
    render() {
        return (<div>
            <TitleBar title={this.props.courseTitle} />
            <NavBar />
            <div id="content" role="main" className="inside">
                <Assignments />
                <Chapters />
            </div>
        </div>)
    }
}

export default Course;