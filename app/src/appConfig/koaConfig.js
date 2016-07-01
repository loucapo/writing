module.exports = function (koaresponsetime,
                          koalogger,
                          koacompress,
                          koaerror,
                          koabodyparser,
                          koajwt,
                          koaunless,
                           swaggerSpec,
                           swaggerToolsPromise,
                           slsData, // lame
                          config) {
    return function (app) {
        if (!config.app.keys) {
            throw new Error('Please add session secret key in the config file!');
        }
        app.keys = config.app.keys; // eslint-disable-line no-param-reassign

        slsData.generateAll();// also lame
        swaggerSpec();

        // this is basically the middleware chain. it starts here goes down then
        // hits the routes then comes back up and resolves

        app.use(koalogger());

        // handles failed token // actuall handles all errors, so figure out a way to figure out what
        // error. perhaps use custom/specific errors that can be indicator.
        // also make this emit a continuation rather than free form shite.
        // koa-jwt just emits a 401 with one of a couple messages.  If we use this we should fork and emit a
        // specific error so we can discern between a 401 and a jwt failure.
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

        app.use(koaerror());
        app.use(koabodyparser());
        app.use(koacompress());
        app.use(koaresponsetime());
        // this isn't working and will probaby have to be tweaked.  They want us to wrap all middle ware in there
        // crap.  no reason for that.  so pull it out and just add it as middleware should be added.
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
