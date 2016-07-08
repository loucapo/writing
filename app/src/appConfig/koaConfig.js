module.exports = function (koaresponsetime,
                          koalogger,
                          koacompress,
                          koaErrorHandler,
                          koabodyparser,
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

        app.use(koaErrorHandler());
        app.use(koabodyparser());
        app.use(koacompress());
        app.use(koaresponsetime());
        // this isn't working and will probaby have to be tweaked.  They want us to wrap all middle ware in there
        // crap.  no reason for that.  so pull it out and just add it as middleware should be added.
    };
};
