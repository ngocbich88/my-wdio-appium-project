Feature: Test macro

#  Scenario: Launch the app and check the welcome message
#    Given I launch the app
#    Then I should see "Welcome" message
  Scenario: Add trigger, action, Local Variable and verify the result
    Given I open the application
    When I add a trigger
    Then I should see a trigger is created
#  And I tap on "Trigger"
#  And I tap on "Application"
#  And I tap on "App Install/Remove/Update"
#  And I select the "Application Removed" radio button
#  And I select an application and tap "OK"
#  Then The correct trigger value should be displayed
#  When I tap on "Action"
#  And I tap on "Logging"
#  And I tap on "Clear"
#  And I select "System log" and tap on "OK"
#  Then The correct macro value should be displayed
#  When I tap on "Constraints"
#  And I select "Device State"
#  And I select "Airplane Mode"
#  And I select "Airplane Mode Disabled" and tap on "OK"
#  Then the correct constraint value should be displayed
#  When I add a local variable with name "Test Case" and type "Integer"
#  And I set the value of "Test Case" to 1
#  Then The correct local variable value should be displayed
#
#  1. Open application
#  •	2. On Dashboard Page, tap on click Macro
#  •	3. On Macro Page, tap on Trigger to add a trigger
#  •	4. On Trigger Page, tap on Application
#  •	5. Tap on App Install/Remove/Update
#  •	6. Select Application Removed radio button
#  •	7. Select Any Application and OK
#  •	8. On Macro Page, tap on Action to add an action
#  •	9. On Action page, tap on Logging
#  •	10. Select Clear Log
#  •	11. Select System Log and OK
#  •	12. On Macro Page, tap on Constrains to add an contrains
#  •	13. Select Device State
#  •	14. Select Airplan Mode
#  •	15. Select Airplan Mode Disable and OK
#
#  •	16. On Macro Page, select add Local Variable
#  •	17. Add an Interger Variable with Name “Test Case”
#  •	18. Select new added Variable, and input Value 1
#  Expected:
#  •	#7 The Trigger Macro should show correct added values
#  •	#11 The Action Macro should show correct added values
#  •	#15 The Contrains should show correct added values
#  •	# 18 The Local Varialbe should show correct added values