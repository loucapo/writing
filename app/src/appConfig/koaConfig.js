module.exports = function (koaresponsetime,
                          koalogger,
                          koacompress,
                          koaerror,
                          koabodyparser,
                          koajwt,
                          koaunless,
                           swaggerSpec,
                           swaggerToolsPromise,
                          config) {
    return function (app) {
        if (!config.app.keys) {
            throw new Error('Please add session secret key in the config file!');
        }
        app.keys = config.app.keys; // eslint-disable-line no-param-reassign
        app.use(koalogger());

        // handles failed token
        app.use(function *(next) {
            try {
                yield next;
            } catch (err) {
                if (err.status === 401) {
                    this.status = 401;
                    this.body = 'Protected resource, use Authorization header to get access\n';
                } else {
                    throw err;
                }
            }
        });
        // app.use(koajwt({ secret: 'shared-secret' }).unless({path: [/^\/auth/]}));

        swaggerSpec();

        app.use(koaerror());
        app.use(koabodyparser());
        app.use(koacompress());
        app.use(koaresponsetime());
        app.use(function *(next) {
            var swagger = require('./../swagger/swagger_spec.json');// eslint-disable-line global-require
            var swaggerMiddleware = yield swaggerToolsPromise(swagger);
            swaggerMiddleware.swaggerValidator({
                validateResponse: true
            });
            yield next;
        });
    };
};
