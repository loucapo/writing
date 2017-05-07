module.exports = function activityRouter(koarouter, controllers) {
  return function module(appRouter) {
    const router = koarouter();

    /**
     * @swagger
     * /studentactivity/{studentActivityId}/draft/{draftId}:
     *   put:
     *     x-name: createStudentDraft
     *     description: Checks for existence of studentDraft and creates it if not there
     *     operationId: createStudentDraft
     *     parameters:
     *       - name: studentActivityId
     *         in: path
     *         type: string
     *         required: true
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
    router.put('/studentactivity/:studentActivityId/draft/:draftId',
      controllers.studentDraftController.createStudentDraftInNotThere);
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/draft/{draftId}:
     *   get:
     *     x-name: getStudentDraftByStudentActivityId
     *     description: getStudentDraftByStudentActivityId
     *     operationId: getStudentDraftByStudentActivityId
     *     parameters:
     *       - name: studentActivityId
     *         in: path
     *         type: string
     *         required: true
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
    router.get('/studentactivity/:studentActivityId/draft/:draftId',
      controllers.studentDraftController.getStudentDraftByStudentActivityId);


    appRouter.use(router.routes(), router.allowedMethods());
  };
};
