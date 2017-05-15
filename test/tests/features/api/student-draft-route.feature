@using=supertest
@pending=monorepo
@api
Feature: Student Draft Routes
  Scenario: Receive a 200 status when POST /activity/:activityid/draft with valid cookie and valid json without id
    Given I get an instructor cookie and receive status '200'
    Given I POST '{"index":0}' into ':3000/activity/d3e3c2d5-cf43-4f63-924f-3ec7a125a334/draft' and receive status '200'
