@using=supertest
@api

Feature: Student Draft Routes
  Scenario: Receive a 200 status when go to PUT draft with valid cookie and new UUID
    Given I get a student cookie and receive status '200'
    Given I PUT '{}' into ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/d3e3c2d5-cf43-4f63-924f-3ec7a125a335' and receive status '200'

  Scenario: Receive a 200 status when go to PUT draft with valid cookie and existing UUID
    Given I get a student cookie and receive status '200'
    Given I PUT '{}' into ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/d3e3c2d5-cf43-4f63-924f-3ec7a125a334' and receive status '200'
  @pending=broken
    # Should be stricter on validation of what can be PUT with body (field does not exist in this table)
  Scenario: Receive a 500 status when go to PUT draft with valid cookie and empty json body
    Given I get a student cookie and receive status '200'
    Given I PUT '{"goals":["4a7e811e-076d-488b-a523-94169c971e6d","4a7e811e-076d-488b-a523-94169c971e6d"]}' into ':3000/studentactivity/:studentActivityId/draft/:draftId' and receive status '422'

  Scenario: Receive a 200 status when go to GET draft with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/e4b24fe3-9ae3-424d-ad3e-2b4b2c56e4d1' and receive status '200'

  Scenario: Receive a 401 status when go to GET draft with no cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/e4b24fe3-9ae3-424d-ad3e-2b4b2c56e4d1' in incognito and receive status '401'
 @pending=broken
   # Should not return anything for a bad UUID
  Scenario: Receive a 500 status when go to GET non-existing draft with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/studentactivity/1075446a-d781-4818-970d-d/draft/e4b24fe3-9ae3-424d-ad3e-2b4b2c56e4d1' and receive status '500'

  @pending=broken
    # Returns a 200 but instructor doesn't currently have student view
  Scenario: Receive a 404 status when go to GET draft with wrong cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/studentactivity/1075446a-d781-4818-970d-d5f89043918d/draft/e4b24fe3-9ae3-424d-ad3e-2b4b2c56e4d1' and receive status '404'
