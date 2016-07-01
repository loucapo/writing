module.exports = function (Promise,
                           swaggertools) {
    return function (swaggerSpec) {
        return new Promise((resolve) =>
            swaggertools.initializeMiddleware(swaggerSpec, (middleware) => resolve(middleware)));
    };
};
