import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRubric, rubricOnChange } from './../modules';
import Rubric from '../components/Rubric/Rubric';

class RubricContainer extends Component {
  constructor(props) {
    super(props);
  }

  // onClick callback for individual cell
  selectCell = (rowNumber, colNumber) => {
    this.props.rubricOnChange(this.props.rubric, rowNumber, colNumber);
  };

  componentDidMount() { this.loadData(); }

  // TODO: this should load from redux using a rubric action in a rubric module. see activity module
  loadData() {
    if (this.props.isRubricLoaded === false) {
      this.props.loadRubric();
      this.props.toggleIsRubricLoaded();
    }
  }

  render() {
    return (
      <Rubric
        rubric={this.props.rubric}
        showRubric={this.props.showRubric}
        toggleRubric={this.props.toggleRubric}
        selectCell={this.selectCell}
      />
    );
  }
}

RubricContainer.propTypes = {
  rubric: PropTypes.object.isRequired,
  loadRubric: PropTypes.func.isRequired,
  rubricOnChange: PropTypes.func,
  toggleRubric: PropTypes.func.isRequired,
  showRubric: PropTypes.bool.isRequired,
  isRubricLoaded: PropTypes.bool.isRequired,
  toggleIsRubricLoaded: PropTypes.func.isRequired

};

const mapStateToProps = (state) => {
  console.log('============ this.state.rubric ============');
  console.log(state.rubric);
  console.log('=================================');
  return {
    rubric: state.rubric
  };
};

export default connect(mapStateToProps, {loadRubric, rubricOnChange})(RubricContainer);


