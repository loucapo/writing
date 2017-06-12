module.exports = function activityRouter(koarouter, controllers) {
  return function module(appRouter) {
    const router = koarouter();
    /**
     * @swagger
     * /submissionstatus/{draftId}:
     *   get:
     *     x-name: getSubmissionsStatus
     *     description: getSubmissionsStatus
     *     operationId: getSubmissionsStatus
     *     parameters:
     *       - name: draftId
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
    router.get('/submissionstatus/:draftId',
       controllers.submissionStatusController.getSubmissionStatus);

    appRouter.use(router.routes(), router.allowedMethods());
  };
};
