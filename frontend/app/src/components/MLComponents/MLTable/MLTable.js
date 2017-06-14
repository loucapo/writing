import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Column, Cell} from 'fixed-data-table';
import '../../../styles/fixed-data-table.css';

import styles from './mlTable.css';

class MLTable extends Component {

  state = {
    tableWidth: 992
  };

  componentDidMount = () => {
    this._update();
    window.addEventListener('resize', this._onResize, false);
  };

  _onResize = () => {
    clearTimeout(this._updateTimer);
    this._updateTimer = setTimeout(this._update, 16);
  };

  _update = () => {
    let widthOffset = 40;
    let maxWidth = 992;
    this.setState({
      tableWidth: (window.innerWidth - widthOffset) < maxWidth ? window.innerWidth - widthOffset : maxWidth
    });
  };

  render = () => {

    // TODO: should clean this up once we are sure we need it. the hard coded values should be overridable defaults.
    return (
      <div className={styles.data_table}>

        <Table
          rowHeight={50}
          rowsCount={this.props.criteriaList.length}
          width={this.state.tableWidth}
          maxHeight={500}
          headerHeight={50}>
          <Column
            header={<Cell className={styles.headerRow}>Criteria Title</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                <a href="#">{this.props.criteriaList[rowIndex].title}</a>
              </Cell>
            )}
            width={200}
            flexGrow={1}
          />
          <Column
            header={<Cell className={styles.headerRow}>Date Created</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                {this.props.criteriaList[rowIndex].createdDate}
              </Cell>
            )}
            width={200}
          />
        </Table>
      </div>
    );
  };
}

MLTable.propTypes = {
  criteriaList: PropTypes.array
};

export default MLTable;
