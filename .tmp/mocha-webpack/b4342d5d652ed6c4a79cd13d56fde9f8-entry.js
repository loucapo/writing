
    var testsContext = require.context("../../app/test", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    