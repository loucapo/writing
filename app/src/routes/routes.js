module.exports = function routes(koarouter, controllers) {
  return function module(app) {
    const router = koarouter();
    router.get('swagger', '/swagger', controllers.swaggerController.swagger);
    router.get('index','/', controllers.indexController.index);

    /**
     * @swagger
     * /activity/{id}:
     *   get:
     *     x-name: activity
     *     description: Returns specified activity to the caller
     *     operationId: activity
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The id of the activity you wish to retrieve
     *         required: true
     *         type: string
     *         format: uuid
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/getSpecificNotifications/activityNotification"
     */
    router.get('activity','/activity/:id', controllers.activityController.activity);

    /**
     * @swagger
     * /CreateInstructorAndCourse:
     *   post:
     *     x-name: CreateInstructorAndCourse
     *     description: Check for existence of instructor and course and create them if they do not exist
     *     operationId: CreateInstructorAndCourse
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         type: object
     *         schema:
     *            - $ref: "#/definitions/instructorAndCourse"
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/notification"
     */
    router.post('CreateInstructorAndCourse', '/CreateInstructorAndCourse', controllers.CreateInstructorAndCourseController.CreateInstructorAndCourse);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
