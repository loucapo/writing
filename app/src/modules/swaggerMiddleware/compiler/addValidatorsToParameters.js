module.exports = function(invariant, stringValidator) {
  return function addValidatorsToParameters(verb, curriedValidatorWithDoc) {
    invariant(verb, `Must provide verb to 'addValidatorsToParamerters'`);
    verb.resolvedParameters.forEach(function(parameter) {
      let schema = parameter.schema || parameter;
      if (parameter.in === 'query' || parameter.in === 'header') {
        parameter.validator = stringValidator(schema);
      }
      else {
        parameter.validator = curriedValidatorWithDoc(schema);
      }
    });
  };
};
