import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { activityAction } from './../modules';
// import Activity from '../components/Activity';
import Rubric from '../components/Rubric/Rubric';

class RubricContainer extends Component {
  componentDidMount() { this.loadData(); }

  // TODO: this should load from redux usint a rubric action in a rubric module. see activity module
  loadData() {
    return {
      headings: [
        {
          text: "Exceeds Expectations",
          score: 4
        },
        {
          text: "Meets Expectations",
          score: 3
        },
        {
          text: "Nearly Meets Expectations",
          score: 2
        },
        {
          text: "Fails to Meet Expectations",
          score: 1
        }
      ],
      categories: [
        {
          catName: "Thesis",
          catScores: [
            "Introduces a focused, arguable thesis",
            "Introduces an arguable thesis that lacks focus",
            "Introduces a vague or broad thesis",
            "Lacks an arguable thesis"
          ]
        },
        {
          catName: "Claims",
          catScores: [
            "Claims clearly relate to thesis",
            "Introduces relevant claims that need further development",
            "Introduces claims that do not all support the thesis",
            "Lacks sufficient claims to support thesis"
          ]
        },
        {
          catName: "Evidence",
          catScores: [
            "Evidence supports claims and is well-chosen",
            "Evidence supports claim",
            "Evidence does not support claim",
            "Limited or no evidence"
          ]
        },
        {
          catName: "Logical Appeals",
          catScores: [
            "Develops multiple effective appeals",
            "Develops an effective appeal",
            "Introduces an effective appeal that needs further development",
            "Uses weak or no appeals"
          ]
        },
        {
          catName: "Counterargument",
          catScores: [
            "Develops a credible counterargument and addresses it adequately",
            "Introduces a credible counterargument",
            "Introduces a weak counterargument",
            "Does not address counterarguments"
          ]
        },
      ]
    }
  }

  render() {
    // if (this.props.isFetching) {
    //   return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    // }
    // if (this.props.errorMessage) {
    //   return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    // }

    // TODO: this should render a rubric component (to be created)
    return (<Rubric{...this.props} />);
  }
}

RubricContainer.propTypes = {
  headings: PropTypes.array,
  categories: PropTypes.array
  // url: PropTypes.string,
  // id: PropTypes.string,
  // isFetching: PropTypes.string,
  // errorMessage: PropTypes.string,
  // activityAction: PropTypes.func,
  // params: PropTypes.object

};

// const mapStateToProps = (state, props) => {
//   const activity = state.activities.filter(x => x.id === props.params.id)[0];
//   if (!activity) {
//     return {};
//   }
//   const drafts = activity.drafts.map(x => state.drafts.filter(d => d.id === x)[0]);
//   return {
//     activity,
//     drafts
//   };
// };
//
export default (RubricContainer);


