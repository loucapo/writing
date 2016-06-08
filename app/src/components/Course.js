/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import TitleBar from './TitleBar'
import NavBar from './NavBar'
import {UpComingAssignmentsContainer as Assignments} from './../containers/UpComingAssignmentsContainer'
import {ChaptersContainer as Chapters} from './../containers/ChaptersContainer'
import {getCourse} from './../actions'

class Course extends React.Component {
    constructor(props) {
        super(props);
    }

    loadData(props) {
        const {dispatch, params} = props;
        const {id} = params;
        dispatch(getCourse(id));
    }
    componentWillMount() {
        this.loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps);
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