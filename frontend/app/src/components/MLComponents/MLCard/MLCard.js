import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading/Heading';

import styles from './mlCard.css';

class Card extends Component {
  state = {
    collapsed: false
  };

  toggleCard = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    let disabledClass = (this.props.disabled) ? ` ${styles.disabled}` : '';
    let cardClass = `${styles.card}${disabledClass}`;
    let _children = React.Children.toArray(this.props.children);
    let child1 = _children[0];
    let child2 = _children[1];

    return (
      <div className={cardClass} data-id={'MLCard-' + this.props.title.split(' ').join('-')}>
        {/*we are using one component for a great many cases.  thus we have to do some
        juggling.  you will always provide at least one child here, that is the body of the
        "card". However, in many cases you will provide some buttons and stuff for the
        card Header. So we check, are there two children provided? that means header children
        and main body.  if there is only one child, then it must be the body so pass null
        for children in header*/}
        {/*I agree that this is ... a bit messy.  I would suggest that we use a different
        abstraction here.  one option would be to have two different Card Types one that
        has header stuff, and one that does not.  Another would be that we pass the header
        into the card so that it is setup by the end user and it is very explicit.*/}
        <Heading
          type={this.props.type || this.props.title}
          title={this.props.title}
          disabled={this.props.disabled}
          handleClick={this.toggleCard}
          collapsed={this.state.collapsed}
        >
          {/*if there are two children, then the first belongs in the header, else null*/}
          {child2 ? child1 : null}
        </Heading>

        {!this.state.collapsed
          ? <div className={styles.body}>
            {/*if there is a second child, use that else use child1*/}
            {child2 || child1}
          </div>
          : null
        }
      </div>
    );
  }
}

Card.propTypes = {
  options: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  type: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool
};

export default Card;
