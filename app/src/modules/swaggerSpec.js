module.exports = function (swaggerjsdoc, slsData, fs) {
    return function () {
        var options = {
            swaggerDefinition: {
                swagger: '2.0',
                info: {
                    version: '0.0.1',
                    title: 'Course Builder Api'
                },
                basePath: '/api',
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
        swaggerSpec.definitions = slsData.courseSchema;
        fs.writeFileSync('./app/src/swagger/swagger_spec.json', JSON.stringify(swaggerSpec, null, 4), { mode: 0o777 });
    };
};
