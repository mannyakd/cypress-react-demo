Feature: Visit Hunter App and look for response code 375

    Visit Hunter App and validate message details

    Background: Login to the app
        Given Customer portal app is opened
        And user enters the login credentials
        And user clicks on Login button

    Scenario: Look for a message ID with response code 0
        When user navigates to "Events" tab
        And user search by message ID "1288280697949127680"
        Then "ID 1288280697949127680" message is displayed
        And "Submission attempted: Delivered" is displayed in Submission attempted label
        And "Attempts: undefined" is displayed in Attempts label
        And user logs out