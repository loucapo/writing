import React, {PropTypes} from 'react';
import classNames from 'classnames';

const _Input = ({data,
               containerStyle
                }) => {
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
          className={inputStyle}
          placeholder={data.placeholder}
          name={data.name}
          value={data.value}
          onChange={data.onChange}
        />);
      }
      case 'number':
      case 'password':
      case 'string': {
        const password = data['x-input'] === 'password' ? {type: 'password'} : '';
        return (<input className={inputStyle}
          {...password}
          placeholder={data.placeholder}
          name={data.name}
          value={data.value}
          onChange={data.onChange}
        />);
      }
    }
  };

  return (<div className={_containerStyle}>
    {/*<label className="input__container__label" htmlFor={data.name}>{data.label}</label>*/}
    {input()}
    {/*{validationEl}*/}
  </div>);
};


_Input.propTypes = {
  data: PropTypes.object.required,
  containerStyle: PropTypes.string
};

export default _Input;
