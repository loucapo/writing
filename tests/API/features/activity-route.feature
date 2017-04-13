@using=supertest
  @only
Feature: Activity API Routes

  Scenario: Receive a 200 status when go to GET particular activity with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334' and receive status '200'"

  Scenario: Receive a 302 status when go to GET /activity with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET '/activity' and receive status '302'"

  Scenario: Receive a 500 status when go to GET non-existing activity with valid cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-111111' and receive status '500'"

  Scenario: Receive a 401 status when go to GET activity with no cookie
    Given I get a cookie and receive status '200'
    Given I GET ':3000/activity/d3e3c2d5-cf43-4f63-924f-111111' in incognito and receive status '401'"
@only
  Scenario: Receive a 302 status when to PUT /activity with valid cookie
    Given I get a cookie and receive status '200'
    Given I PUT '{"id": "d3e3c2d5-cf43-4f63-924f-3ec7a125a335", "courseId": "4454554","title": "Eng 1002","createdById": "f3e3c2d5-cf43-4f63-924f-3ec7a125a334","createdDate": "2017-04-13T00:00:00.000Z","prompt": {"blocks": [{"key": "65rek","data": {},"text": "","type": "unstyled","depth": 0,"entityRanges": [],"inlineStyleRanges": []}],"entityMap": {}},"modifiedById": "f3e3c2d5-cf43-4f63-924f-3ec7a125a334","modifiedDate": null}}' into '/activity' and receive status '302'"
