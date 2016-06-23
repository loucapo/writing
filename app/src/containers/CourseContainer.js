import { bindActionCreators } from 'redux';
import Course from './../components/Course.js';
import courseSelector from './selectors/courseSelector';
import { connect } from 'react-redux';
import { getCourse } from './../actions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCourse }, dispatch);
}

export default connect(courseSelector, mapDispatchToProps)(Course);
