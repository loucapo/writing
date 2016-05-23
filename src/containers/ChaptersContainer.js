/**
 * Created by rharik on 5/11/16.
 */

import { bindActionCreators } from 'redux'
import {onChapterClick} from './../actions/index'
import Chapters from './../components/Chapters.js'
import container from './containerFactory'


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onChapterClick }, dispatch)
}

var transform = ({courses, currentCourse, chapters}) => {return {chapters:courses[currentCourse].chapters.map(chapterId => chapters[chapterId])}};

export default container(['courses', 'currentCourse','chapters'], transform, mapDispatchToProps)(Chapters);

