module.exports = function(swaggermodelvalidator) {
  return function curriedValidator(document, customValidators) {
    const validator = new swaggermodelvalidator(document); // eslint-disable-line new-cap
    if (customValidators) {
      if (!Array.isArray(customValidators)) {
        customValidators = [customValidators];
      }
      customValidators.forEach(x=> validator.addFieldValidator(x.name, x.validator));
    }
    return function(schema) {
      return function(value) {
        return validator.validate(value, schema, document.definitions);
      };
    };
  };
};
