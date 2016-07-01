module.exports = function routes(koarouter, controllers) {
    return function module(app) {
        var router = koarouter();
        router.get('/', function *() {
            yield controllers.indexController.index.apply(this);
        });
        /**
         * @swagger
         * /course/{id}:
         *   get:
         *     x-name: getCourseById
         *     description: Returns specified course to the caller
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
    };
};
