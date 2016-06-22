import { bindActionCreators } from 'redux';
import { toggleChapter } from './../actions/index';
import Chapters from './../components/Chapters.js';
import chaptersSelector from './selectors/chaptersSelector';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleChapter }, dispatch);
}

export default connect(chaptersSelector, mapDispatchToProps)(Chapters);
