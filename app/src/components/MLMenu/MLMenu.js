import React, {Component, PropTypes} from 'react';

import styles from './mlMenu.css';

class MLMenu extends Component {
  state = {
    display: 0
  };

  toggleSelection = (selection) => {
    this.setState({
      display: selection
    });
  };

  render = () => {
    let tabs = this.props.tabs;
    let display = this.state.display;

    return (
      <div>
        <nav data-id="ml-menu" className={styles.container}>

          {
            tabs.map((tab, idx) => {
              return (
                <div key={idx} className={ (display === idx) ? styles.active : '' }>
                  <a data-id={'tab' + idx} onClick={x => this.toggleSelection(idx, x)}>{tab.title}</a>
                </div>
              );
            })
          }

        </nav>

        <div className={styles.spacer}>
          {tabs[display].content}
        </div>
      </div>
    );
  }
}

MLMenu.propTypes = {
  tabs: PropTypes.array,
  role: PropTypes.string
};


export default MLMenu;
