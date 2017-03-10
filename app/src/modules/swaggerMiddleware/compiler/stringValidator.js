module.exports = function() {
  return function(schema) {
    return function (value) {
      // if an optional field is not provided, we're all good other not so much
      if (value === undefined) {
        return !schema.required;
      }
      switch (schema.type) {
        case 'number':
        case 'integer':
          if (!isNaN(value)) {
            // if the value is a number, make sure it's a number
            value = +value;
          }
          break;
        case 'boolean':
          if (value === 'true') {
            value = true;
          }
          else if (value === 'false') {
            value = false;
          }
          break;
        case 'array':
          if (!Array.isArray(value)) {
            var format = schema.collectionFormat || 'csv';
            switch (format) {
              case 'csv':
                value = String(value).split(',');
                break;
              case 'ssv':
                value = String(value).split(' ');
                break;
              case 'tsv':
                value = String(value).split('\t');
                break;
              case 'pipes':
                value = String(value).split('|');
                break;
              case 'multi':
              default:
                value = [value];
                break;
            }
          }
          switch (schema.items.type) {
            case 'number':
            case 'integer':
              value = value.map(function (num) {
                if (!isNaN(num)) {
                  // if the value is a number, make sure it's a number
                  return +num;
                }
                else {
                  return num;
                }
              });
              break;
            case 'boolean':
              value = value.map(function (bool) {
                if (bool === 'true') {
                  return true;
                }
                else if (bool === 'false') {
                  return false;
                }
                else {
                  return bool;
                }
              });
              break;
            default:
          }
          break;
        default:
      }
      return !!value;
    };
  }
};