module.exports = function(koaresponsetime,
                          koalogger,
                          koacompress,
                          koaErrorHandler,
                          koabodyparser,
                          koaconvert,
                          koasession,
                          config) {
  return function(app) {
    if (!config.app.keys) {
      throw new Error('Please add session secret key in the config file!');
    }
    app.keys = config.app.keys; // eslint-disable-line no-param-reassign

    // this is basically the middleware chain. it starts here goes down then
    // hits the routes then comes back up and resolves
    app.use(koalogger());
    app.use(koaErrorHandler());
    app.use(koaconvert(koasession(app)));
    app.use(koabodyparser());
    app.use(koacompress());
    app.use(koaresponsetime());
  };
};
