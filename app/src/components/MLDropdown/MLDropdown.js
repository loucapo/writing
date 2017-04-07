import React, {Component, PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mldropdown.css';

class Dropdown extends Component {
  state = {
    showContents: false,
    selected: this.props.placeholder || 'please select'
  };

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
    let dropdownClass = `${styles.dropdown}${openClass}`;

    // TODO: refactor into more mini components
    return (
      <div>
        <div className={dropdownClass} onClick={this.handleClick}>
          <div className={styles.dropdownTitle}>
            {this.state.selected.value || this.props.placeholder}
            <span>
              <svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <polygon points="0 0 4 5.19614188 8 0" />
                </g>
              </svg>
            </span>
          </div>
          <ul className={styles.dropdownContent}>
            {this.props.options && this.props.options.map((option, idx) => {
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
        </div>
      </div>
    );
  };
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
