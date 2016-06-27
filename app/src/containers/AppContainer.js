import { getSwaggerSpec } from './../actions/index';
import { connect } from 'react-redux';
import Layout from './../components/layout/layout.js';
// import { bindActionCreators } from 'redux';

function mapStateToProps() {
    return {};
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getSwaggerSpec }, dispatch);
// }

export default connect(mapStateToProps, { getSwaggerSpec })(Layout);

