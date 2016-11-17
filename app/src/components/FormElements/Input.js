import React from 'react';
import classNames from 'classnames';

const _Input = ({data,
               validation,
               containerStyle
                }) => {
 let inputStyle = classNames({
     ['input__container__' + (data.type ? data.type : 'input')]:true,
     'input__success' : !data.invalid,
     'input__error' : data.invalid
 });

 let validationStyle = classNames({
   'input__container__validation__error' : data.errors.length > 0,
   'input__container__validation__success' : data.errors.length == 0
 });

 const _containerStyle = classNames('input__container', containerStyle);

data.label = `${data.label}${
   data.label.indexOf('*') <0
   && data.rules.some(x=>x.rule=='required') ? '*' : ''}`;

 const input = function() {
   switch(data['x-input'] || data.type){
      case 'textarea': {
        return (<textarea className={inputStyle}
                          placeholder={data.placeholder}
                          name={data.name}
                          value={data.value}
                          onChange={data.onChange}
        />)
      }
     case 'number':
     case 'password':
     case 'string': {
       const password = data['x-input'] === 'password' ? {type: "password"} : '';
       return (<input className={inputStyle}
         {...password}
                      placeholder={data.placeholder}
                      name={data.name}
                      value={data.value}
                      onChange={data.onChange}
       />)
     }
   }
 };

 return (<div className={_containerStyle} >
   {/*<label className="input__container__label" htmlFor={data.name}>{data.label}</label>*/}
   {input()}
   {/*{validationEl}*/}
 </div>);
};

export default _Input;
