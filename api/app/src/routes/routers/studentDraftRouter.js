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
      controllers.studentDraftController.createStudentDraftIfNotThere);
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
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/paper:
     *   put:
     *     x-name: updateStudentDraftPaper
     *     description: Updates a draft's paper
     *     operationId: updateStudentDraftPaper
     *     parameters:
     *       - name: studentActivityId
     *         in: path
     *         description: The id of the studentActivity whose draft it is
     *         required: true
     *         type: string
     *       - name: studentDraftId
     *         in: path
     *         description: The id of the studentDraft to update
     *         required: true
     *         type: string
     *       - name: prompt
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/updateStudentDraftPaper"
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
    router.put(
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/paper',
      controllers.studentDraftController.updateStudentDraftPaper
    );
    /**
     * @swagger
     * /studentdraft/{studentDraftId}/studentreflectionanswers:
     *   get:
     *     x-name: getStudentReflectionAnswers
     *     description: getStudentReflectionAnswers
     *     operationId: getStudentReflectionAnswers
     *     parameters:
     *       - name: studentDraftId
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
    router.get('/studentdraft/:studentDraftId/studentreflectionanswers',
      controllers.studentDraftController.getStudentReflectionAnswers);
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/studentreflectionanswers:
     *   put:
     *     x-name: setStudentReflectionAnswers
     *     description: setStudentReflectionAnswers
     *     operationId: setStudentReflectionAnswers
     *     parameters:
     *       - name: studentActivityId
     *         in: path
     *         description: The id of the studentactivity whose studentdraft should update
     *         required: true
     *         type: string
     *       - name: studentDraftId
     *         in: path
     *         description: The id of studentdraft should update
     *         required: true
     *         type: string
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/setStudentReflectionAnswers"
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
    router.put(
      'setStudentReflectionAnswers',
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/studentreflectionanswers',
      controllers.studentDraftController.setStudentReflectionAnswers
    );
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/submit:
     *   put:
     *     x-name: updateStudentDraftPaper
     *     description: Updates a draft's paper
     *     operationId: updateStudentDraftPaper
     *     parameters:
     *       - name: studentActivityId
     *         in: path
     *         description: The id of the studentActivity whose draft it is
     *         required: true
     *         type: string
     *       - name: studentDraftId
     *         in: path
     *         description: The id of the studentDraft to update
     *         required: true
     *         type: string
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
    router.put(
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/submit',
      controllers.studentDraftController.submitStudentDraft
    );

    appRouter.use(router.routes(), router.allowedMethods());
  };
};
