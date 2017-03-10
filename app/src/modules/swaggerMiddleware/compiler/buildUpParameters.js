module.exports = function(invariant, mergeDistinct) {
  return function buildUpParameters( path, verbName) {
    invariant(path, "There must be a path passed into 'buildUpParamters'");
    invariant(verbName, "There must be a verbName passed into 'buildUpParamters'");
    //clone so we don't mutate
    var verb = Object.assign({}, path[verbName]);
    // start with parameters at path level
    // merge in or replace parameters from verb level
    verb.resolvedParameters = mergeDistinct(path.parameters, verb.parameters);
    return verb;
  }
};