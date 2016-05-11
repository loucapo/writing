/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import Chapters from './../components/Chapters.js'

function mapStateToProps(state) {
    return {
        chapters: state.course.chapters
    }
}

export default connect(mapStateToProps)(Chapters);

