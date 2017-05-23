@using=supertest
@api
@only
Feature: Draft API Routes
  Scenario: Receive a 200 status when POST /activity/:activityid/draft with valid cookie and valid json without id
    Given I get an instructor cookie and receive status '200'
    Given I POST '{"index":0}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft' and receive status '200'
@pending=broken
  # this shouldn't work, not sure why it is working
  Scenario: Receive a 500 status when POST /activity/:activityid/draft with valid cookie and extra parameter json without id
    Given I get an instructor cookie and receive status '200'
    Given I POST '{"index":7, "id":"d3e3c2d5-cf43-4f63-924f-3ec7a125a334"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft' and receive status '500'

  Scenario: Receive a 422 status when POST /activity/:activityid/draft with valid cookie and empty post body
  Given I get an instructor cookie and receive status '200'
    Given I POST '{}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft' and receive status '422'

  Scenario: Receive a 200 status when PUT /activity/:activityId/draft/:draftId/instructions with valid cookie and json
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"instructions": "some instructions here"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252/instructions' and receive status '200'

  Scenario: Receive a 200 status when PUT /activity/:activityId/draft/:draftId/instructions with valid cookie and json
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"instructions": ""}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252/instructions' and receive status '200'

  Scenario: Receive a 500 status when PUT /activity/:activityId/draft/:draftId/instructions with valid cookie and missing params in json
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"id": ""}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252/instructions' and receive status '500'

  Scenario: Receive a 200 status when DELETE /activity/:activityid/draft/:draftid with valid cookie and missing params in json
    Given I get an instructor cookie and receive status '200'
    Given I DELETE ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252' and receive status '200'

  Scenario: Receive a 500 status when DELETE /activity/:activityid/draft/:draftid with valid cookie and but wrong draft id
    Given I get an instructor cookie and receive status '200'
    Given I DELETE ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a998-af628d290252' and receive status '500'

  Scenario: Receive a 404 status when DELETE /activity/:activityid/draft/:draftid with student cookie
    Given I get a student cookie and receive status '200'
    Given I DELETE ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/c7019592-b032-4530-a9a7-af628d290252' and receive status '404'

  Scenario: Receive a 200 status when PUT /activity/:activityId/draft/:draftId/goals with valid cookie and json
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"goals":["4a7e811e-076d-488b-a523-94169c971e6d","bd500741-01d1-4ddc-b08b-dea70d55995f"]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/goals' and receive status '200'

  Scenario: Receive a 200 status when PUT /activity/:activityId/draft/:draftId/goals with valid cookie and json and no goals
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"goals":[]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/goals' and receive status '200'
@pending=broken
    # Getting a 200 here right now, don't think this should be allowed as UniqueItems=true
  Scenario: Receive a 500 status when PUT /activity/:activityId/draft/:draftId/goals with duplicate goals
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"goals":["4a7e811e-076d-488b-a523-94169c971e6d","4a7e811e-076d-488b-a523-94169c971e6d"]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/goals' and receive status '500'

  Scenario: Receive a 500 status when PUT /activity/:activityId/draft/:draftId/goals with 7 goals
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"goals":["4a7e811e-076d-488b-a523-94169c971e6d","bd500741-01d1-4ddc-b08b-dea70d55995f","30a2b72b-153b-449e-ae75-6d52417d5fd8","cff30bcb-0425-4d06-98d3-c22f2bd10a79","37f0de46-357a-442b-9859-fa07fc9e47a9","dd5ee9ca-8c2c-4a81-941a-a3a0d8bb3be2","116e3415-4550-41ba-b976-883d34b844d7"]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/goals' and receive status '500'
@pending=broken
    #Should validate it's a valid goal
  Scenario: Receive a 500 status when PUT /activity/:activityId/draft/:draftId/goals with non-existant goal
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"goals":["4a7e811e-076d-488b-a523"]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/goals' and receive status '500'

  Scenario: Receive a 200 status when PUT /activity/:activityId/draft/:draftId/studentreflectionquestions with valid cookie and json
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"studentReflectionQuestions":["823955a1-0a8e-42cc-b24c-cb30afcac93f","c105736c-c330-487c-be74-5a2c983095cc"]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/studentreflectionquestions' and receive status '200'

  Scenario: Receive a 200 status when PUT /activity/:activityId/draft/:draftId/studentreflectionquestions with valid cookie and json and no goals
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"studentReflectionQuestions":[]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/studentreflectionquestions' and receive status '200'
  @pending=broken
      # Getting a 200 here right now, don't think this should be allowed as UniqueItems=true
  Scenario: Receive a 500 status when PUT /activity/:activityId/draft/:draftId/studentreflectionquestions with duplicate goals
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"studentReflectionQuestions":["823955a1-0a8e-42cc-b24c-cb30afcac93f","823955a1-0a8e-42cc-b24c-cb30afcac93f"]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/studentreflectionquestions' and receive status '500'

    @pending=broken
      #Should validate it's a valid goal
  Scenario: Receive a 500 status when PUT /activity/:activityId/draft/:draftId/studentreflectionquestions with non-existant goal
    Given I get an instructor cookie and receive status '200'
    Given I PUT '{"studentReflectionQuestions":["4a7e811e-076d-488b-a523"]}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft/41a2daa1-37d6-465d-8a6f-7d5454aa7e0e/studentreflectionquestions' and receive status '500'
