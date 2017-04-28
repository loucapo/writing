module.exports = function(koarouter, controllers) {
  return function module(appRouter) {
    const studentReflectionQuestionsRouter = koarouter();

    /**
     * @swagger
     * /studentreflectionquestions:
     *   get:
     *     x-name: allStudentReflectionQuestions
     *     description: Returns all studentReflectionQuestions
     *     operationId: studentReflectionQuestions
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/standardSuccessResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */

    studentReflectionQuestionsRouter.get('studentReflectionQuestions',
      '/studentreflectionquestions',
      controllers.studentReflectionQuestionsController.getStudentReflectionQuestions);

    appRouter.use(studentReflectionQuestionsRouter.routes(), studentReflectionQuestionsRouter.allowedMethods());
  };
};
