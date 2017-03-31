import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import MLHeader from '../MLHeader/MLHeader.js';
import validate from './validations';

import './mlFormWrapper.css';

class FormWrapper extends Component {

  onHandleSubmit = (event) => {
    event.preventDefault();
    // Handle submit logic here
  }

  render() {
    return (
      <div>
        <MLHeader title={this.props.title} handleSubmit={this.onHandleSubmit} />

        <section>
          <p>{this.props.description}</p>

          <form>
            {this.props.anyTouched && this.props.error}
            {this.props.children}
          </form>

        </section>
      </div>
    );
  }
}

FormWrapper.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  anyTouched: PropTypes.bool,
  error: PropTypes.string
};

export default reduxForm({
  form: 'prodtoolsform',
  validate
})(FormWrapper);
