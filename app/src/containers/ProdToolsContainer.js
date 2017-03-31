import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProdTools from '../components/ProdTools/ProdTools';
// import { fetchActivityAction } from './../modules/activityModule';

class ProdToolsContainer extends Component {

  render() {
    return (<ProdTools {...this.props} />);
  }
}

const mapStateToProps = (state) => {
  const role = (state.auth && state.auth.role) ? state.auth.role : null;
  return {
    role
  };
};

export default connect(mapStateToProps)(ProdToolsContainer);
