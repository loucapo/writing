module.exports = function routes(koarouter, controllers) {
    return function module(app) {
        var router = koarouter();
        router.get('/', function *() {
            yield controllers.indexController.index.apply(this);
        });

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
         *             $ref: "#/definitions/courseNotification"
         */
        router.get('/courses/:id', controllers.courseController.courses);

        /**
         * @swagger
         * /courses/available:
         *   get:
         *     x-name: coursesAvailableByUID
         *     description: Returns array of title/id pairs for display in menu by User Id
         *     operationId: coursesAvailableByUID
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *             $ref: "#/definitions/availableCourseNotification"
         */
        // TODO figure out route symantics
        router.get('/courses/available', controllers.courseController.coursesAvailableByUID);

        app.use(router.routes());
        app.use(router.allowedMethods());
    };
};
