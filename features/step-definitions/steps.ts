import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.ts';
import SecurePage from '../pageobjects/secure.page';
import LandingPage from '../pageobjects/landing.page.ts';
import TriggerPage from '../pageobjects/trigger.page.ts';
import MacroPage from '../pageobjects/macro.page.ts';
import HomePage from '../pageobjects/home.page.ts';

Given(/^I open the application$/, async () => {
        await driver.execute('mobile: activateApp', { appId: 'com.arlosoft.macrodroid' });
        await driver.pause(3000); // ⏳ Wait for app to fully resume (sometimes needed)
        await LandingPage.skipGuideline();
        await driver.pause(3000);
        await LandingPage.exitUpdate();
 });

 When(/^I add a trigger$/, async () => {
     await HomePage.addMacro();
     await MacroPage.addTrigger();
     await TriggerPage.addATrigger();
});

 When(/^I should see a trigger is created$/, async () => {
    // Not implemented
});



