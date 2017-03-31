import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import MLButton from '../MLButton/MLButton';
import {Table, Column, Cell} from 'fixed-data-table';

import styles from './criteria.css';

class Criteria extends Component {

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

    return (
      <div className={styles.data_table}>

        <MLButton title="+ Add New Criteria" dataId="criteria-add" handleClick={this.handleCancel} />
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
                {moment(this.props.criteriaList[rowIndex].createdDate).format('MM/DD/YYYY')}
              </Cell>
            )}
            width={200}
          />
        </Table>
      </div>
    );
  };
}

Criteria.propTypes = {
  role: PropTypes.string,
  criteriaList: PropTypes.array
};

export default Criteria;
