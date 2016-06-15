module.exports = function routes(koarouter, indexController, authController) {
    return function module(app) {
// var clientController = require("../controllers/client.server.controller");
// var clientListController = require("../controllers/clientList.server.controller");
// var trainerController = require("../controllers/trainer.server.controller");
// var trainerListController = require("../controllers/trainerList.server.controller");
//    var indexController = require("../controllers/index.controller");
//    var authController = require("../controllers/auth.controller");
        var router = koarouter();
        router.get('/', function *() {
            yield indexController.index.apply(this);
        });

        router.get('/auth', authController.checkAuth);
        router.post('/auth', authController.signIn);
        router.all('/signout', authController.signOut);
        router.get('/index', indexController.index);

        app.use(router.routes());
        app.use(router.allowedMethods());

        // secured routes
        // this is one way of doing it.  You could also create a new router "var securedRouter = new Router();
        // that handles all routes in say /app which has the secured middleware
        // then all routes registered in securedRouter will be secured
        // app.get("/clients", secured, clientListController.clients);
        // app.post("/client/create", secured, clientController.create);
        //  app.get("/trainers", secured, trainerListController.trainers);
        //  app.post("/trainer/create", secured, trainerController.create);
    };
};
