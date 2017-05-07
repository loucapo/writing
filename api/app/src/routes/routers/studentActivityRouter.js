module.exports = function activityRouter(koarouter, controllers) {
  return function module(appRouter) {
    const router = koarouter();

    /**
     * @swagger
     * /activity/{activityId}/studentactivity:
     *   put:
     *     x-name: createActivity
     *     description: Checks for existence of studentActivity and creates it if not there
     *     operationId: createStudentActivity
     *     parameters:
     *       - name: activityId
     *         in: path
     *         type: string
     *         required: true
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/SuccessNoResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */
    router.put('/activity/:activityId/studentactivity',
      controllers.studentActivityController.createStudentActivityIfNotCreated);
    /**
     * @swagger
     * /activity/{activityId}/studentactivity:
     *   get:
     *     x-name: createActivity
     *     description: Checks for existence of studentActivity and creates it if not there
     *     operationId: createStudentActivity
     *     parameters:
     *       - name: activityId
     *         in: path
     *         type: string
     *         required: true
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/SuccessNoResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */
    router.get('/activity/:activityId/studentactivity',
      controllers.studentActivityController.getStudentActivity);


    appRouter.use(router.routes(), router.allowedMethods());
  };
};
