import { bindActionCreators } from 'redux';
import { toggleChapter } from './../actions/index';
import Chapters from './../components/Chapters.js';
import container from './containerFactory';
import chaptersSelector from './selectors/chaptersSelector';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleChapter }, dispatch);
}

export default container(['courses', 'currentCourse', 'chapters'], chaptersSelector, mapDispatchToProps)(Chapters);
