import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import mlmodal from './mlModal.css';

export default class MLModal extends Component {
  constructor() {
    super();
    this.mergeConfig = this.mergeConfig.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown.bind(this));
  }

  onKeyDown(e) {
    if ((this.props.isOpen) && (e.keyCode === 27)) {
    this.props.closeModal();
    }
  }

  mergeConfig() {
    const defaultConfigs = {
      overlayOpacity: '.5',
      isOpen: false,
      className: ''
    };

    const defaultTitleBarConfigs = {
      className:'',
      text:'',
      closeText: 'x',
      closeButtonClassName:'',
      closeButton:true,
      enable:false
    };
    var titleBarConfig = Object.assign({}, defaultTitleBarConfigs, this.props.titleBar);
    this.configs = Object.assign({}, defaultConfigs, this.props );
    this.configs.titleBar = titleBarConfig;
  }

  renderTitleBar() {
    const { className, text, closeText, closeButton, closeButtonClassName } = this.configs.titleBar;

    const titleBarClass = {};
    if (className) {
      titleBarClass[className] = titleBarClass;
    }

    return (
      <div className={ classNames(mlmodal['mlModal-titleBar'], titleBarClass) }>
        <span>{ (text && text.length) ? text : <br /> }</span>
        { closeButton &&
        <button
          onClick={this.props.closeModal}
          className={classNames(mlmodal['mlModal-btn--close'], closeButtonClassName)}>
          { closeText }
        </button>
        }
      </div>
    )
  }

  render() {
    this.mergeConfig();

    const {
      titleBar,
      overlayOpacity,
      children,
      className,
      position
    } = this.configs;
    return this.props.isOpen ? (
      <div data-title={ (titleBar.enable) ? titleBar.position : null }
          className={mlmodal['mlModal'] }>
          <div style={ position } className={ classNames(mlmodal['mlModal-wrapper'], className)}>
            { titleBar.enable && this.renderTitleBar() }
            <div className={mlmodal['mlModal-content']}>
              { children }
            </div>
          </div>
          <div className={mlmodal['mlModal-overlay']} style={{ opacity: overlayOpacity }} onClick={ this.props.closeModal }/>
        </div>
      ) : null;
  }
};
