Feature: Error handling

  API Errors in the middle of the journey

  @mock-api:toy-authorization-error
  Scenario: Session error
    Given Error Eric is using the system
    And they have started the toy journey
    Then they should see the intro page
    And they continue from intro
    Then they should see the choose favourite page
    When they choose "spinning-top" as their favourite toy
    And they continue from choose favourite
    Then they should be redirected as an error with a description "gateway"
