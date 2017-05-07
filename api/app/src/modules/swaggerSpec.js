module.exports = function(swaggerjsdoc, fs, schemas, deref) {
  return function swaggerSpec() {
    const apis = fs.readdirSync('./app/src/routes/routers/')
      .map(x => `./app/src/routes/routers/${x}`);

    let options = {
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
      apis
    };
    let _swaggerSpec = swaggerjsdoc(options);
    let schemaDefs = Object.assign({},
      schemas.domainSchemas.definitions,
      schemas.responseSchemas.definitions,
      schemas.requestSchemas.definitions);

    _swaggerSpec.definitions = deref()({definitions: schemaDefs}, true).definitions;
    if (!fs.existsSync('./app/src/swagger/')) {
      fs.mkdirSync('./app/src/swagger/');
    }
    let swaggerDocument = JSON.stringify(_swaggerSpec, null, 4);
    fs.writeFileSync('./app/src/swagger/swagger_spec.json', swaggerDocument, {mode: 0o0777});

    return swaggerDocument;
  };
};
