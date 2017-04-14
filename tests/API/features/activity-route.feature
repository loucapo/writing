@using=supertest
  @only
Feature: Activity API Routes

  Scenario: Receive a 200 status when go to GET particular activity with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334' and receive status '200'

  Scenario: Receive a 302 status when go to GET /activity with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET '/activity' and receive status '302'

  Scenario: Receive a 500 status when go to GET non-existing activity with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-111111' and receive status '500'

  Scenario: Receive a 401 status when go to GET activity with no cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-111111' in incognito and receive status '401'

  Scenario: Receive a 200 status when PUT /activity with valid cookie and json
    Given I get a cookie and receive status '200'
    Given I PUT '{"id": "d3e3c2d5-cf43-4f63-924f-3ec7a125a334","courseId": "4454554","title": "Eng 1003","createdDate": "2017-04-13T00:00:00.000Z"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334' and receive status '200'

  Scenario: Receive a 500 status when PUT /activity with valid cookie and missing params in json
    Given I get a cookie and receive status '200'
    Given I PUT '{"id": "d3e3c2d5-cf43-4f63-924f-3ec7a125a379","title": "Eng 1003","createdDate": "2017-04-13T00:00:00.000Z"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a379' and receive status '500'

  Scenario: Receive a 404 status when PUT /activity with valid cookie and valid json without id
    Given I get a cookie and receive status '200'
    Given I PUT '{"id": "d3e3c2d5-cf43-4f63-924f-3ec7a125a334","courseId": "4454554","title": "Eng 1003","createdDate": "2017-04-13T00:00:00.000Z"}' into ':3000/activity/' and receive status '404'

  Scenario: Receive a 200 status when PUT /activity prompt
    Given I get a cookie and receive status '200'
    Given I PUT '{"id":"d3e3c2d5-cf43-4f63-924f-3ec7a125a334","prompt":{"hello":"world"}}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/prompt' and receive status '200'

  Scenario: Receive a 500 status when PUT /activity prompt with invalid json
    Given I get a cookie and receive status '200'
    Given I PUT '{"id": "d3e3c2d5-cf43-4f63-924f-3ec7a125a334","prompt": "hello world"}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/prompt' and receive status '500'
@only
  #should be giving a 500 not a 200
  Scenario: Receive a 500 status when PUT /activity prompt with missing params
    Given I get a cookie and receive status '200'
    Given I PUT '{"id":"d3e3c2d5--11-cf43-4f63-924f-3ec7a125a334","prompt":{"killme":"world"}}' into ':3000/activity/d3e3c2d5--11-cf43-4f63-924f-3ec7a125a334/prompt' and receive status '500'
@only
  #route missing?
  Scenario: Receive a 200 status when go to GET particular activity drafts with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft' and receive status '200'