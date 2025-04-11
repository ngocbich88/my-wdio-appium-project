export const config: WebdriverIO.Config = {

    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,

    specs: [
        './features/**/*.feature'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    sessionReload: false,
    capabilities: [
         {
           platformName: 'Android',
           'appium:platformVersion': '11',
           'appium:deviceName': 'emulator-5554',
           'appium:app': '/Users/nguyenthibichngoc/Downloads/Final_Exam_MacroDroid.apk',
           'appium:automationName': 'UiAutomator2',
           'appium:appPackage': 'com.arlosoft.macrodroid',
           'appium:appActivity': '.LauncherActivity',
           'appium:noReset': false,
//            'appium:fullReset': true,
//            'appium:restartSession': false,
           'appium:fullContextList': true,
           'appium:newCommandTimeout': 300,
           'appium:autoGrantPermissions': true,  // Automatically grant permissions (if needed)
         },
       ],


    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    services: ['appium'],


    framework: 'cucumber',
    

    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],



    cucumberOpts: {
        require: ['./features/step-definitions/*.ts'],
//         feature: '/tests/features/**/*.feature',  // correct path to feature files
        backtrace: true, // Show full stack trace
        requireModule: ['@babel/register'],
//         dryRun: false,
//         failFast: false,
        format: ['json:./reports/cucumber_report.json'],
        restart: false
//         snippetSyntax: undefined
      },
//     cucumberOpts: {
//         // <string[]> (file/dir) require files before executing features
//         require: ['./features/step-definitions/steps.ts'],
//         // <boolean> show full backtrace for errors
//         backtrace: false,
//         // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
//         requireModule: [],
//         // <boolean> invoke formatters without executing steps
//         dryRun: false,
//         // <boolean> abort the run on first failure
//         failFast: false,
//         // <string[]> Only execute the scenarios with name matching the expression (repeatable).
//         name: [],
//         // <boolean> hide step definition snippets for pending steps
//         snippets: true,
//         // <boolean> hide source uris
//         source: true,
//         // <boolean> fail if there are any undefined or pending steps
//         strict: false,
//         // <string> (expression) only execute the features or scenarios with tags matching the expression
//         tagExpression: '',
//         // <number> timeout for step definitions
//         timeout: 60000,
//         // <boolean> Enable this config to treat undefined definitions as warnings.
//         ignoreUndefinedDefinitions: false
//     },

    before: async () => {
        // The session is automatically started here.
        console.log('🚀 Session started');
    },

    afterScenario: async () => {
        // 🛑 Don't end session here
        console.log('🔁 Scenario done, session will NOT be deleted');
    },

    after: async () => {
        // ✅ Explicitly close session only once after all tests
//         console.log('🧹 Ending session at the end of all tests');
        if (result.passed === false) {
            await browser.takeScreenshot();
          }
//         await browser.deleteSession();  // <- only happens once
    }

}


