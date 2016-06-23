import { bindActionCreators } from 'redux';
import { toggleSection } from './../actions/index';
import Sections from './../components/Sections.js';
import sectionsSelector from './selectors/sectionsSelector';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleSection }, dispatch);
}

export default connect(sectionsSelector, mapDispatchToProps)(Sections);
