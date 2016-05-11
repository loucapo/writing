/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import TitleBar from './TitleBar'
import NavBar from './NavBar'
import Assignments from './../containers/AssignmentsContainer'
import Chapters from './../containers/ChaptersContainer'

const Course = ({courseName}) => (
    <div>
        <TitleBar courseName={courseName} />
        <NavBar />
        <div id="content" role="main" className="inside">
            <Assignments />
            <Chapters/>
        </div>
    </div>
);

export default Course;