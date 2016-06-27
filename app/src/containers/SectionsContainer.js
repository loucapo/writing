import { toggleSection } from './../actions/index';
import Sections from './../components/Sections.js';
import sectionsSelector from './selectors/sectionsSelector';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default withRouter(connect(sectionsSelector, { toggleSection })(Sections));
