/**
 * Created by reharik on 3/11/16.
 */

import { connect } from 'react-redux';
import Layout from './../components/layout/layout.js';
import { getSwaggerSpec } from './../actions/index';
import { bindActionCreators } from 'redux';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSwaggerSpec }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

