@using=supertest
@api
Feature: Student Activity Routes
  Scenario: Receive a 200 status when go to PUT studentactivity with valid cookie and valid json body
    Given I get a student cookie and receive status '200'
    Given I PUT '{"activityId": "234"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/studentactivity' and receive status '200'

  Scenario: Receive a 500 status when go to PUT studentactivity with valid cookie and invalid json body
    Given I get a student cookie and receive status '200'
    Given I PUT '{"activityId": "234"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/studentactivity' and receive status '500'

  Scenario: Receive a 422 status when go to PUT studentactivity with valid cookie and empty json body
    Given I get a student cookie and receive status '200'
    Given I PUT '{}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/studentactivity' and receive status '422'

  Scenario: Receive a 200 status when go to GET studentactivity with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/studentactivity' and receive status '200'

  Scenario: Receive a 401 status when go to GET studentactivity with no cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/studentactivity' in incognito and receive status '401'
  @pending=broken
    # Returns 200 when should be getting a 500, even with a bad UUID
  Scenario: Receive a 500 status when go to GET non-existing studentactivity with valid cookie
    Given I get a student cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f/studentactivity' and receive status '500'

  @pending=broken
    # Returns a 200 but instructor doesn't currently have student view
  Scenario: Receive a 404 status when go to GET studentactivity with wrong cookie
    Given I get an instructor cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/studentactivity' and receive status '404'
