import Course from './../components/Course.js';
import {} from './../models/course';
import courseSelector from './selectors/courseSelector';
import { connect } from 'react-redux';

export default connect(courseSelector)(Course);
