import {bindActionCreators} from 'redux'
import {toggleChapter} from './../actions/index'
import Chapters from './../components/Chapters.js'
import container from './containerFactory'


function mapDispatchToProps(dispatch) {
    return bindActionCreators({toggleChapter}, dispatch)
}

const transform = ({courses, currentCourse, chapters}) => {
    return {chapters: courses[currentCourse].chapters.map(chapterId => chapters[chapterId])}
};

const ChaptersContainer = container(['courses', 'currentCourse', 'chapters'], transform, mapDispatchToProps)(Chapters);

export {transform, ChaptersContainer}
