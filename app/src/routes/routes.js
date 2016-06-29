module.exports = function routes(koarouter, controllers) {
    return function module(app) {
        var router = koarouter();
        router.get('/', function *() {
            yield controllers.indexController.index.apply(this);
        });

        router.get('/auth', controllers.authController.checkAuth);
        router.post('/auth', controllers.authController.signIn);
        router.all('/signout', controllers.authController.signOut);
        router.get('/index', controllers.indexController.index);
        router.get('/documentation', controllers.swaggerController.swagger);
        /**
         * @swagger
         * /courses/{id}:
         *   get:
         *     x-name: getCoursesById
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
        router.get('/courses/:id', controllers.courseController.course);

        /**
         * @swagger
         * /available-courses:
         *   get:
         *     x-name: availableCourses
         *     description: Returns array of title/id pairs for display in menu
         *     operationId: availableCourses
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *             $ref: "#/definitions/availableCourses"
         */
        router.get('/available-courses', controllers.courseController.availableCourses);

        app.use(router.routes());
        app.use(router.allowedMethods());
    };
};
