module.exports = function(koagenericsession,
                          koaresponsetime,
                          koalogger,
                          koacompress,
                          koaErrorHandler,
                          koabodyparser,
                          koaconvert,
                          config,
                          coviews) {
  return function(app) {
    if (!config.app.keys) {
      throw new Error('Please add session secret key in the config file!');
    }
    
    app.keys = config.app.keys; // eslint-disable-line no-param-reassign

    app.keys = Array.isArray(app.keys) ? app.keys : [app.keys];
    // this is basically the middleware chain. it starts here goes down then
    // hits the routes then comes back up and resolves
    app.use(koalogger());
    app.use(koaErrorHandler());
    app.use(koabodyparser());
    app.use(koaconvert(koagenericsession()));

    app.use(async function (ctx, next){
      ctx.render = coviews("./app/src/views", {
        map: {html: "swig"}
      });
      await next();
    });

    app.use(koacompress());
    app.use(koaresponsetime());
  };
};
