import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProdTools from '../components/ProdTools/ProdTools';
// import { fetchActivityAction } from './../modules/activityModule';

class ProdToolsContainer extends Component {
  componentWillMount() {
    console.log('loading prod tools...');
  }

  // loadData() {
  //   if (this.props.activityId) {
  //     this.props.fetchActivityAction(this.props.activityId);
  //   }
  // }

  render() {
    // if(!this.props.activity) {
    //   return null;
    // }
    return (<ProdTools {...this.props} />);
  }
}

ProdToolsContainer.propTypes = {
  // activity: PropTypes.object,
  // activityId: PropTypes.string,
  // fetchActivityAction: PropTypes.func,
  // drafts: PropTypes.array
};

const mapStateToProps = (state) => {
  const role = (state.auth && state.auth.role) ? state.auth.role : null;
//   const activityId = state.auth.activity.activityId;
  return {
    role
//     activityId,
//     activity: state.activities.find(x => x.id === activityId),
//     drafts: state.drafts
  };
};

export default connect(mapStateToProps)(ProdToolsContainer);
