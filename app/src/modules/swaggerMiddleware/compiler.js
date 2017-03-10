module.exports = function(jsonschemaderefsync,
                          curriedValidator,
                          buildUpPathsForEndPoint) {

  function compile(document, customValidators) {
    // the validation module is curried so we can add the document and custom validators now
    // and the actual values later as we get them.
    const curriedValidatorWithDoc = curriedValidator(document, customValidators);
    // get the de-referenced version of the swagger document
    var swagger = jsonschemaderefsync(document);

    var basePath = swagger.basePath || '';

    // add a validator for every parameter in swagger document
    var compiledPaths = Object.keys(swagger.paths).map(name => {
      var item = swagger.paths[name];
      var path = buildUpPathsForEndPoint(item, curriedValidatorWithDoc);
      return {
        name,
        path,
        regex: new RegExp(basePath + name.replace(/\{[^}]*}/g, '[^/]+') + '$'),
        expected: (name.match(/[^\/]+/g) || []).map((s) => s.toString())
      }
    });

    return function (targetPath) {
      // get a list of matching paths, there should be only one
      var _targetPath = basePath + targetPath;
      var matches = compiledPaths.filter((path) => !!_targetPath.match(path.regex));
      return (matches && matches.length === 1) ? matches[0] : null;
    };
  }

  return compile
};
