module.exports = function(buildUpParameters,
                          addValidatorsToParameters,
                          addValidatorsForResponses,
                          invariant) {
  return function buildUpPathsForEndPoint(path, curriedValidatorWithDoc) {
    invariant(path, `There must be a path passed into 'buildUpPathsForEndPoint'`);
    invariant(curriedValidatorWithDoc, `There must be a curriedValidator passed into 'buildUpParamters'`);
    let compiledPath = Object.assign({}, path);
    Object.keys(compiledPath).filter(function(name) {
      return name !== 'parameters';
    }).forEach(function(verbName) {
      let verb = buildUpParameters(path, verbName);
      addValidatorsToParameters(verb, curriedValidatorWithDoc);
      addValidatorsForResponses(verb, curriedValidatorWithDoc);
      compiledPath[verbName] = verb;
    });
    return compiledPath;
  };
};
