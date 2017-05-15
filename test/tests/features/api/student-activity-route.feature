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


