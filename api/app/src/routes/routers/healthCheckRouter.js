module.exports = function healthCheckRouter(koarouter, controllers) {
  return function module(appRouter) {
    const router = koarouter();

    /**
     * @swagger
     * /health:
     *   get:
     *     x-name: healthCheck
     *     description: Returns a signal of the service's status
     *     operationId: healthCheck
     *     responses:
     *       200:
     *         description: Success
     */
    router.get('healthCheck', '/health', controllers.healthController.healthCheck);

    appRouter.use(router.routes(), router.allowedMethods());
  };
};
