/**
 * Created by reharik on 7/26/15.
 */
"use strict";

module.exports = function(koaresponsetime,
                          koalogger,
                          koacompress,
                          koaerror,
                          koabodyparser,
                          koajwt,
                          koaunless,
                          config){

    return function (app) {
        if (!config.app.keys) {
            throw new Error("Please add session secret key in the config file!");
        }
        app.keys = config.app.keys;

        app.use(koalogger());

        // handles failed token
        app.use(function *(next){
            try {
                yield next;
            } catch (err) {
                if (401 == err.status) {
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
    };
};