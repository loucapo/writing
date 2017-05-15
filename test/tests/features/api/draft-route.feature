@using=supertest
@pending=monorepo
@api
Feature: Draft API Routes
  Scenario: Receive a 200 status when POST /activity/:activityid/draft with valid cookie and valid json without id
    Given I get an instructor cookie and receive status '200'
    Given I POST '{"index":0}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft' and receive status '200'

  Scenario: Receive a 500 status when POST /activity/:activityid/draft with valid cookie and extra parameter json without id
    Given I get an instructor cookie and receive status '200'
    Given I POST '{"index":2, "id":"d3e3c2d5-cf43-4f63-924f-3ec7a125a334"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft' and receive status '500'

  Scenario: Receive a 422 status when POST /activity/:activityid/draft with valid cookie and empty post body
  Given I get an instructor cookie and receive status '200'
    Given I POST '{}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft' and receive status '422'

  Scenario: Receive a 200 status when PUT /activity/:activityId/draft/:draftId/instruction with valid cookie and json
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"instructions": "some instructions here"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252/instructions' and receive status '500'

  Scenario: Receive a 500 status when PUT /activity with valid cookie and missing params in json
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"instructions": ""}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252/instructions' and receive status '500'

  Scenario: Receive a 200 status when DELETE /activity/:activityid/draft/:draftid with valid cookie and missing params in json
    Given I get an instructor cookie and receive status '200'
    Given I DELETE ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252' and receive status '200'

  Scenario: Receive a 500 status when DELETE /activity/:activityid/draft/:draftid with valid cookie and but wrong draft id
    Given I get an instructor cookie and receive status '200'
    Given I DELETE ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a998-af628d290252' and receive status '500'

  Scenario: Receive a 404 status when DELETE /activity/:activityid/draft/:draftid with student cookie
    Given I get an student cookie and receive status '200'
    Given I DELETE ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252' and receive status '404'
