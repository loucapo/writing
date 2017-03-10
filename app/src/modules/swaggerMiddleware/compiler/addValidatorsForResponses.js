module.exports = function(invariant) {
  return function addValidatorsForResponses(verb, curriedValidatorWithDoc) {
    invariant(verb, `Must provide verb to 'addValidatorsForResponses'`);
    Object.keys(verb.responses).forEach(function (statusCode) {
      var response = verb.responses[statusCode];
      if (response.schema) {
        response.validator = curriedValidatorWithDoc(response.schema);
      }
      else {
        // no schema, so ensure there is no response
        // tslint:disable-next-line:no-null-keyword
        response.validator = function (body) {
          return body === undefined || body === null || body === '';
        };
      }
    });
  }
};