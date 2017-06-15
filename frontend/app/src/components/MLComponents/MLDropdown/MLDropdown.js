import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mldropdown.css';

class Dropdown extends Component {
  state = {
    showContents: false,
    selected: this.props.defaultOption || {},
    options: this.props.options || []
  };

  setUpOptions = (_options = [], selectedId) => {
    let options = _options;
    let selected;
    if (!this.props.hideEmptyOption && options.length > 0) {
      if (this.props.defaultOption) {
        options = [this.props.defaultOption, ..._options];
      }
      selected = options.find(x => x.id === selectedId);
    }
    this.setState({ options, selected: selected || this.props.defaultOption });
  };

  componentDidMount() {
    this.setUpOptions(this.props.options, this.props.selectedId);
  }

  componentWillReceiveProps(newProps) {
    this.setUpOptions(newProps.options, newProps.selectedId);
  }

  toggleContents = () => {
    this.setState({
      showContents: !this.state.showContents
    });
  };

  selectOption = option => {
    this.setState({
      selected: option,
      showContents: !this.state.showContents
    });
    this.props.onChange(option);
  };

  handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      this.toggleContents();
    }
  };

  render = () => {
    let openClass = this.state.showContents ? ' ' + styles.dropdownOpen : '';
    let openContainer = this.state.showContents ? styles.openContainer : '';
    let openDataId = this.state.showContents ? this.props.openDataId : '';
    let dropdownClass = `${styles.dropdown}${openClass}`;
    // TODO: refactor into more mini components
    return (
      <div data-id="rubric-dropdown">
        <div className={openContainer} onClick={this.handleBackgroundClick} />

        <div className={dropdownClass} data-id={openDataId} onClick={this.toggleContents}>
          <ul className={styles.dropdownContent} data-id={this.props.contentDataId}>
            {this.state.options.map((option, idx) => (
              <li data-id={option.id} key={idx} onClick={() => this.selectOption(option)}>
                <a href="#">{option.value}</a>
                {option.id === this.state.selected.id ?
                  <MLIcon
                    className={styles.checkIcon}
                    title="check"
                    type="check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  />
                  : null}
              </li>
            ))}
          </ul>

          <div className={styles.dropdownTitle}>
            {this.state.selected.value}
            <span>
              <svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <polygon points="0 0 4 5.19614188 8 0" />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  };
}

Dropdown.propTypes = {
  defaultOption: PropTypes.object,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
  hideEmptyOption: PropTypes.bool,
  contentDataId: PropTypes.string,
  openDataId: PropTypes.string
};

export default Dropdown;
