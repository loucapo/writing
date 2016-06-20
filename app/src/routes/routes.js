module.exports = function routes(koarouter, controllers) {
    return function module(app) {
// var clientController = require("../controllers/client.server.controller");
// var clientListController = require("../controllers/clientList.server.controller");
// var trainerController = require("../controllers/trainer.server.controller");
// var trainerListController = require("../controllers/trainerList.server.controller");
//    var indexController = require("../controllers/index.controller");
//    var authController = require("../controllers/auth.controller");
        var router = koarouter();
        router.get('/', function *() {
            yield controllers.indexController.index.apply(this);
        });
        /**
         * @swagger
         * /course/{id}:
         *   get:
         *     description: Returns spcified course to the caller
         *     operationId: course
         *     parameters:
         *       - name: id
         *         in: path
         *         description: The id of the course you wish to retrieve
         *         required: true
         *         type: string
         *         format: uuid
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *             $ref: "#/definitions/course"
         */
        router.get('/auth', controllers.authController.checkAuth);
        router.post('/auth', controllers.authController.signIn);
        router.all('/signout', controllers.authController.signOut);
        router.get('/index', controllers.indexController.index);
        router.get('/documentation', controllers.swaggerController.swagger);
        router.get('/course/:id', controllers.courseController.course);

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
