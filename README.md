# AutomateAndroidWebdriverIO
WebdriverIO - Appium - allure - Mobile auto

* 
* npx allure generate
* npx allure generate allure-results --clean -o allure-report
* npx allure open allure-report

2. npx wdio config
3. npx wdio run wdio.conf.js
* import { Given, When, Then } from '@wdio/cucumber-framework';
* import { expect, $ } from '@wdio/globals'
2. 
3. Don’t use driver.launchApp, but driver.execute

Given(/^I open the application$/, async () => {
//      await driver.launchApp();  // Explicitly launches the app
    await driver.execute('mobile: activateApp', { appId: 'com.arlosoft.macrodroid' });
 });


2. Fix installation error with cucumber
ERROR @wdio/runner: Error: [0-1] You're calling functions (e.g. "Given") on an instance of Cucumber that isn't running (status: PENDING). [0-1] This means you may have an invalid installation, potentially due to: [0-1] - Cucumber being installed globally [0-1] - A project structure where your support code is depending on a different instance of Cucumber [0-1] Either way, you'll need to address this in order for Cucumber to work.
npm uninstall @cucumber/cucumber


npm cache clean --force
npm uninstall @cucumber/cucumber --no-save



1. wdio.conf.ts

exports.config = {
    runner: 'local',
    specs: [
         './tests/features/**/*.feature' // Path to your Cucumber feature files
       ],
    maxInstances: 10,

//    capabilities: [
//         {
//           platformName: 'Android',
//           platformVersion: '11',
//           deviceName: 'emulator-5554',
//           app: '/Users/nguyenthibichngoc/Downloads/Final_Exam_MacroDroid.apk',
//           automationName: 'UiAutomator2',
//           appPackage: 'com.arlosoft.macrodroid',
//           appActivity: '.LauncherActivity',
//           noReset: true,
//           fullContextList: true,
//            newCommandTimeout: 300
//         },
//       ],
    capabilities: [
         {
           platformName: 'Android',
           'appium:platformVersion': '11',
           'appium:deviceName': 'emulator-5554',
           'appium:app': '/Users/nguyenthibichngoc/Downloads/Final_Exam_MacroDroid.apk',
           'appium:automationName': 'UiAutomator2',
           'appium:appPackage': 'com.arlosoft.macrodroid',
           'appium:appActivity': '.LauncherActivity',
           'appium:noReset': true,
           'appium:fullContextList': true,
            'appium:newCommandTimeout': 300
         },
       ],


    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['appium'],
    appium: {
           command: 'appium > appium-server.log 2>&1',  // Command to start Appium server
           args: {
               address: 'localhost',  // Host where Appium is running
               port: 4723,            // Port number for Appium server (should be 4723)
           },
       },
    hostname: 'localhost',  // Host name for local Appium server
    path: '/wd/hub',        // Default path for Appium's WebDriver endpoint


    framework: 'cucumber',
    reporters: ['spec', 'allure'],
    reporterOptions: {
        allure: {
        outputDir: './allure-results', // Location to store the results
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        }
    },
    cucumberOpts: {
        require: ['./tests/step-definitions/**/*.ts'],
        backtrace: true, // Show full stack trace
        requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        format: ['json:./reports/cucumber_report.json'],
        snippetSyntax: undefined
    }


//    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],


}

