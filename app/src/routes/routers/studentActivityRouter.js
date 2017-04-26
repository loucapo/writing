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
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/createStudentActivityIfNotCreated"
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

    appRouter.use(router.routes(), router.allowedMethods());
  };
};
