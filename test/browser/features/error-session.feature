Feature: Error handling

  API Errors at the start of the journey

  Scenario: Session error
    Given A user is on the system
    And they have started the toy journey
    When there is an immediate error
    Then they should see the unrecoverable error page
