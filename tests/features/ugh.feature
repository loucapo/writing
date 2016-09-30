@Only
Feature: basic sanity check
  # realize that this is for debugging-
  # the scenarios that SAY they should fail here
  # SHOULD actually fail when this suite is run.
  # Unless we rewrite this, all successes on the CLI
  # is actually a massive fail, as we're writing this to 
  # ensure that updating libraries does not start giving us false results.
  Scenario: I fail the step when errors are thrown
    Given I open an editor
    When I throw an error

