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
     * /studentDraft/{studentDraftId}:
     *   get:
     *     x-name: getStudentDraftByStudentDraftId
     *     description: getStudentDraftByStudentDraftId
     *     operationId: getStudentDraftByStudentDraftId
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
    router.get('/studentDraft/:studentDraftId',
      controllers.studentDraftController.getStudentDraftByStudentDraftId);
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/drafts:
     *   get:
     *     x-name: getAllStudentDraftsByStudentActivityId
     *     description: getAllStudentDraftsByStudentActivityId
     *     operationId: getAllStudentDraftsByStudentActivityId
     *     parameters:
     *       - name: studentActivityId
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
    router.get('/studentactivity/:studentActivityId/drafts',
      controllers.studentDraftController.getAllStudentDraftsByStudentActivityId);
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
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/feedbackpaper:
     *   put:
     *     x-name: updateFeedbackPaper
     *     description: Updates a student draft's feedback paper
     *     operationId: updateFeedbackPaper
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
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/feedbackpaper',
      controllers.studentDraftController.updateFeedbackPaper
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
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/updatereviewstatus:
     *   put:
     *     x-name: updateReviewStatus
     *     description: updateReviewStatus
     *     operationId: updateReviewStatus
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
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/updateReviewStatus"
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
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/updatereviewstatus',
      controllers.studentDraftController.updateReviewStatus
    );

    /**
     * @swagger
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/submitendcomment:
     *   put:
     *     x-name: submitEndComment
     *     description: creates a drafts end comment
     *     operationId: submitEndComment
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
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/submitEndComment"
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
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/submitendcomment',
      controllers.studentDraftController.submitEndComment
    );
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/submitfinalgrade:
     *   put:
     *     x-name: submitFinalGrade
     *     description: creates a drafts final grade
     *     operationId: submitFinalGrade
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
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/submitFinalGrade"
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
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/submitfinalgrade',
      controllers.studentDraftController.submitFinalGrade
    );
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/rubric/{rubricId}:
     *   put:
     *     x-name: updateRubricScore
     *     description: updates rubric criteria score
     *     operationId: updateRubricScore
     *     parameters:
     *       - name: studentActivityId
     *         in: path
     *         description: The id of the studentActivity of the rubric
     *         required: true
     *         type: string
     *       - name: studentDraftId
     *         in: path
     *         description: The id of the studentDraft of the rubric
     *         required: true
     *         type: string
     *       - name: rubricId
     *         in: path
     *         description: The id of the rubric to update
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
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/rubric/:rubricId',
      controllers.studentDraftController.updateRubricScore
    );
    /**
     * @swagger
     * /studentdraft/{studentDraftId}/rubricscores:
     *   get:
     *     x-name: getRubricScores
     *     description: getRubricScores
     *     operationId: getRubricScores
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
    router.get(
      '/studentdraft/:studentDraftId/rubricscores',
      controllers.studentDraftController.getRubricScores
    );
    /**
     * @swagger
     * /studentactivity/{studentActivityId}/studentdraft/{studentDraftId}/feedback:
     *   put:
     *     x-name: createFeedback
     *     description: creates feedback
     *     operationId: createFeedback
     *     parameters:
     *       - name: studentActivityId
     *         in: path
     *         description: The id of the studentActivity of the feedback
     *         required: true
     *         type: string
     *       - name: studentDraftId
     *         in: path
     *         description: The id of the studentDraft of the feedback
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
      '/studentactivity/:studentActivityId/studentdraft/:studentDraftId/feedback',
      controllers.studentDraftController.createFeedback
    );
    /**
     * @swagger
     * /studentdraft/{studentDraftId}/feedback:
     *   get:
     *     x-name: getFeedback
     *     description: gets feedback
     *     operationId: getFeedback
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
    router.get(
      '/studentdraft/:studentDraftId/feedback',
      controllers.studentDraftController.getFeedback
    );


    appRouter.use(router.routes(), router.allowedMethods());
  };
};
