module.exports = function (swaggerjsdoc, fs, schemas, jsonschemaderefsync) {
  return function () {
    var options = {
      swaggerDefinition: {
        swagger: '2.0',
        info: {
          version: '0.0.1',
          title: 'Writer Key Api'
        },
        basePath: '/',
        schemes: [
          'http'
        ],
        consumes: [
          'application/json'
        ],
        produces: [
          'application/json'
        ]
      },
      apis: ['./app/src/routes/routes.js']
    };

    var swaggerSpec = swaggerjsdoc(options);
    swaggerSpec.definitions =  jsonschemaderefsync({ definitions: schemas }).definitions;
    if (!fs.existsSync('./app/src/swagger/')) {
      fs.mkdirSync('./app/src/swagger/');
    }
    fs.writeFileSync('./app/src/swagger/swagger_spec.json', JSON.stringify(swaggerSpec, null, 4), { mode: 0o777 });
  };
};
