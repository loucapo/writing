import React, {PropTypes} from 'react';
import classNames from 'classnames';

const _Input = ({ data, containerStyle, options }) => {
  if(!data) {return null;}
  let inputStyle = classNames({
    ['input__container__' + (data.type ? data.type : 'input')]: true,
    input__success: !data.invalid, // eslint-disable-line camelcase
    input__error: data.invalid // eslint-disable-line camelcase
  });

  const _containerStyle = classNames('input__container', containerStyle);

  data.label = `${data.label}${
    data.label.indexOf('*') < 0
    && data.rules.some(x=>x.rule === 'required') ? '*' : ''}`;

  const input = function input() {
    switch (data['x-input'] || data.type) {
      case 'textarea': {
        return (<textarea
          data-id={`${data.name}-textarea`}
          className={inputStyle}
          placeholder={data.placeholder}
          name={data.name}
          value={data.value}
          onChange={data.onChange}
          autoFocus={data.autoFocus}
        />);
      }
      case 'select': {
        return (
          <select name={data.name}
            data-id={`${data.name}-select`}
            value={data.value || data.default}
            onChange={data.onChange} >
            autoFocus={data.autoFocus}
            {options}
          </select>);
      }
      case 'number':
      case 'password':
      case 'string': {
        const password = data['x-input'] === 'password' ? {type: 'password'} : '';
        return (<input className={inputStyle}
          {...password}
          data-id={`${data.name}-input`}
          placeholder={data.placeholder}
          name={data.name}
          value={data.value}
          onChange={data.onChange}
          autoFocus={data.autoFocus}
        />);
      }
    }
  };

  return (<div className={_containerStyle} data-id={`${data.name}-inputContainer`}>
    {/*<label
        className="input__container__label"
        htmlFor={data.name}
        data-id={`${data.name}-label`}>
        {data.label}
     </label>*/}
    {input()}
    {/*{validationEl}*/}
  </div>);
};


_Input.propTypes = {
  containerStyle: PropTypes.string,
  data: PropTypes.object,
  options: PropTypes.array
};

export default _Input;
