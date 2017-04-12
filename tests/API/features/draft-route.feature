@using=supertest
Feature: just do stuff to google

  Scenario: get homepage
    Given I hit google

  Scenario: get homepage 2
    Given I GET '/activity' and receive status '200'"