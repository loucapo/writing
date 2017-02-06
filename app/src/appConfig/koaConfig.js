module.exports = function(koaresponsetime,
                          koalogger,
                          koacompress,
                          koaErrorHandler,
                          koabodyparser,
                          koaconvert,
                          koagenericsession,
                          koacors,
                          koajwt,
                          config,
                          swaggerSpec) {
  return function(app) {
    if (!config.app.keys) {
      throw new Error('Please add session secret key in the config file!');
    }
    app.keys = Array.isArray(app.keys) ? app.keys : [app.keys]; // eslint-disable-line no-param-reassign

    swaggerSpec();
    
    // this is basically the middleware chain. it starts here goes down then
    // hits the routes then comes back up and resolves
    app.use(koalogger());
    app.use(koaErrorHandler());
    app.use(koacors({origin:config.app.wk_serve_url}));
    app.use(koajwt({secret:config.app.jwt_secret}));
//    app.use(koacors({origin:config.app.swagger_ui_url}));
//XXX -- it would appear that last CORS wins...  need to revisit this for swagger.
    app.use(koabodyparser());
    app.use(koacompress());
    app.use(koaresponsetime());
  };
};
