import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mldropdown.css';

class Dropdown extends Component {
  state = {
    showContents: false,
    selected: this.props.defaultOption,
    options: this.props.options || []
  };

  setUpOptions = (_options = [], _selected) => {
    let options = _options;
    let selected = this.props.defaultOption;
    if(!this.props.hideEmptyOption && _options.length > 0) {
      options = [this.props.defaultOption, ..._options];
      selected = options.find(x => x.id === _selected) || this.props.defaultOption;
    }
    this.setState({ options, selected });
  };

  componentDidMount() {
    this.setUpOptions(this.props.options, this.props.selected);
  }

  componentWillReceiveProps(newProps) {
    this.setUpOptions(newProps.options, newProps.selected);
  }

  toggleContents = () => {
    this.setState({
      showContents: !this.state.showContents
    });
  };

  handleClick = () => {
    this.toggleContents();
  };

  closeDropdown = () => {
    this.toggleContents();
  };

  selectOption = (option) => {
    this.setState({
      selected: option,
      showContents: !this.state.showContents
    });
    this.props.onChange(option);
  };

  render = () => {
    let openClass = (this.state.showContents) ? ' ' + styles.dropdownOpen : '';
    let openDataId = (this.state.showContents) ? this.props.openDataId : '';
    let dropdownClass = `${styles.dropdown}${openClass}`;
    // TODO: refactor into more mini components
    return (
      <div data-id="rubric-dropdown">
        <div className={dropdownClass} data-id={openDataId} onClick={this.handleClick}>

          <ul className={styles.dropdownContent} data-id={this.props.contentDataId}>
            {this.state.options.map((option, idx) => {
              return (
                <li data-id={option.id} key={idx} onClick={() => this.selectOption(option)}>
                  <a href="#">{option.value}</a>
                  {(option.id === this.state.selected.id) ?
                    <MLIcon
                      className={styles.checkIcon}
                      title="check"
                      type="check"
                      width="18"
                      height="19"
                      viewBox="0 0 24 24"
                    />
                  : ''}
                </li>
              );
            })}
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

Dropdown.defaultProps = {
  defaultOption: {
    id: '0000',
    value: 'Please Select'
  }
};

Dropdown.propTypes = {
  defaultOption: PropTypes.object,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string,
  hideEmptyOption: PropTypes.bool,
  contentDataId: PropTypes.string,
  openDataId: PropTypes.string
};

export default Dropdown;
