module.exports = function(koaresponsetime,
                          koalogger,
                          koacompress,
                          koaErrorHandler,
                          koabodyparser,
                          koaconvert,
                          koagenericsession,
                          koacors,
                          papersConfig,
                          config) {
  return function(app) {
    if (!config.app.keys) {
      throw new Error('Please add session secret key in the config file!');
    }
    app.keys = Array.isArray(app.keys) ? app.keys : [app.keys]; // eslint-disable-line no-param-reassign

    // this is basically the middleware chain. it starts here goes down then
    // hits the routes then comes back up and resolves
    app.use(koalogger());
    app.use(koaErrorHandler());
    app.use(koacors({origin:config.frontEnd.origin, credentials:true}));
    app.use(koaconvert(papersConfig));
    app.use(koabodyparser());
    app.use(koacompress());
    app.use(koaresponsetime());
  };
};
