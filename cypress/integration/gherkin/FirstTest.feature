Feature: Visit Hunter App and look for response code 0 and 321

    Visit Hunter App and validate message details

    Background: Login to the app
        Given Customer portal app is opened
        And user enters the login credentials
        And user clicks on Login button

    Scenario: Look for a message ID with response code 0
        When user navigates to "Events" tab
        And user search by message ID "1521Z-0325V-0358I-5832T"
        Then "ID 1521Z-0325V-0358I-5832T" message is displayed
        And "Status updated: Delivered" is displayed in Status updated label
        And "Attempts: 1" is displayed in Attempts label
        And user logs out

    Scenario: Look for a message ID with response code 321
        When user navigates to "Events" tab 
        And user search by message ID "1721Z-0325J-0343U-0760M"
        Then "ID 1721Z-0325J-0343U-0760M" message is displayed
        And "Status updated: Failed" is displayed in Status updated label
        And "Attempts: 2" is displayed in Attempts label
        And user logs out