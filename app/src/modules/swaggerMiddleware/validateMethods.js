module.exports = function() {
  function isEmpty(value) {
    return {valid: !!value || Object.keys(value).length === 0};
  }

  function validate(value, parameter) {
    // if no parameter, treat as an error
    if (!parameter) {
      return {
        success: false,
        errors: [{message: `can not validate: ${JSON.stringify(value)}, when there is no parameter provided`}]
      };
    }

    return parameter.validator(value);
  }

  function request(compiledPath, method, query, body, headers) {
    if (!compiledPath) {
      return undefined;
    }

    // get operation object for path and method
    let operation = compiledPath.path[method.toLowerCase()];
    if (!operation) {
      // operation not defined, return 405 (method not allowed)
      return undefined;
    }
    // get expected parameters from operation
    let parameters = operation.resolvedParameters;
    let validationResult = {success: true, errors: [], where: []};
    let bodyDefined = false;

    //if there are no parameters specified let's validate that there are none provided
    if (parameters.length === 0) {
      // validate no body
      let emptyBodyResult = validate(body, {validator: isEmpty});
      // set specific error
      if (!emptyBodyResult.valid) {
        validationResult.success = false;
        validationResult.errors.push(`Expected empty body but received ${body}`);
        validationResult.where.push('body');
      }
      // validate no query params either and set specific error if there are
      if (query && Object.keys(query).length > 0) {
        validationResult.success = false;
        validationResult.errors.push(`Expected empty query string but received ${JSON.stringify(query)}`);
        validationResult.where.push('query');
      }

      return validationResult;
    }

    //if there are parameters specified, lets figure out where they are supposed to be coming from
    // and fill the value letiable with what's provided
    parameters.forEach(parameter => {
      let value;
      switch (parameter.in) {
        case 'query': {
          value = (query || {})[parameter.name];
          break;
        }
        case 'path': {
          let actual = compiledPath.name.match(/[^\/]+/g);
          let valueIndex = compiledPath.expected.indexOf('{' + parameter.name + '}');
          value = actual ? actual[valueIndex] : undefined;
          break;
        }
        case 'body':
          value = body;
          bodyDefined = true;
          break;
        case 'header':
          value = (headers || {})[parameter.name];
          break;
        default:
      }
      //now send value to the validator
      let paramResult = validate(value, parameter);
      if (!paramResult.valid) {
        validationResult.success = false;
        validationResult.errors = validationResult.errors.concat(paramResult.errors);
        validationResult.where.push(parameter.in);
      }
    });
    // if no body schema is defined make sure provided body is empty
    if (!bodyDefined && body) {
      let error = validate(body, {validator: isEmpty});
      if (!error.valid) {
        validationResult.success = false;
        validationResult.where .push('body');
        validationResult.errors.push(`Expected empty body but received ${JSON.stringify(body)}`);
      }
    }
    return validationResult;
  }

  function response(compiledPath, method, status, body) {
    if (!compiledPath) {
      return {
        actual: 'UNDEFINED_PATH',
        expected: 'PATH'
      };
    }

    // get operation object for path and method
    let operation = compiledPath.path[method.toLowerCase()];

    let validationResult = {success: true, errors: [], where: []};
    // grab the expected response spec based on the returned status

    let _response = operation.responses[status];
    // if were not expecting anything ( and nothing was sent ) return success
    if ((!_response.schema || !_response.schema.properties) && !body) {
      return validationResult;
    }
    let result = {};
    // if _response provided then validate it. Otherwise provide error
    if (_response) {

      result = validate(body, _response);
    } else {
      result.valid = false;
      result.errors = [{message: `No response provided in schema for status: ${status}`}];
    }

    if (!result.valid) {
      validationResult.success = false;
      validationResult.errors = result.errors;
      validationResult.where.push('body');
    }
    return validationResult;
  }

  return {
    request,
    response
  };
};
