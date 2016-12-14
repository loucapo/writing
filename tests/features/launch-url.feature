@pending=marvin-async-fixes
@WRITE-551
Feature: Launch URL for SLS integration
  Scenario: Responds to any POST with a 302
    Given I send an empty POST body to '/launch' and recieve status '302'

# Async (that isn't using webdriver's built in scheduler) needs a callback function,
# as listed below.  Yadda allows for it, but marvin doesn't use it.
# But then, enabling it breaks all (many?) tests that don't use it.
# Basically, it requires major exploration, and nail down firm what we're doing in the future
# re: async & promises.  We'd thought they were all supported great-  maybe not, or maybe it's just a simple bug,
# or a semi-major design change.
# Also mucking with this creates situations where steps can fail and pass at the same time, so that, and how done()
# influences it needs to be thoroughly understood before confirming changes.
# //WRONG
# session.execute(function () {
#   if (config.stepDelay){
#     session.getDriver().sleep(config.stepDelay);
#   }
#   session.currentStep = step;
#   session.currentScenario = scenario.title;
#   yaddaInterpreter.run(step, {ctx: context});
# }).then(done);
# //RIGHT (less wrong)
# session.execute(function () {
#   if (config.stepDelay){
#     session.getDriver().sleep(config.stepDelay);
#   }
#   session.currentStep = step;
#   session.currentScenario = scenario.title;
#   yaddaInterpreter.run(step, {ctx: context}, done);
# });

