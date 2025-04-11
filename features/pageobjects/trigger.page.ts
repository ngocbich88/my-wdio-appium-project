import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TriggerPage {

   get btnApplication() { return $('android=new UiSelector().text("Applications")'); }
   get btnAppInstallRemoteUpdate() { return $('android=new UiSelector().text("App Install/Remove/Update")'); }
   get btnOk() { return $('android=new UiSelector().resourceId("android:id/button1")'); }
   get btnApplicationUpdate() { return $('android=new UiSelector().text("Application Updated")'); }
   get btnAnyApplication() { return $('android=new UiSelector().text("Any Application")'); }

   public async addATrigger () { // Just for sample
        await this.btnApplication.waitForExist({ timeout: 5000 });
        await this.btnApplication.click();
        await this.btnAppInstallRemoteUpdate.waitForExist({ timeout: 5000 });
        await this.btnAppInstallRemoteUpdate.click();
        await this.btnApplicationUpdate.waitForExist({ timeout: 5000 });
        await this.btnApplicationUpdate.click();
        await this.btnOk.waitForExist({ timeout: 5000 });
        await this.btnOk.click();
        await this.btnAnyApplication.waitForExist({ timeout: 5000 });
        await this.btnAnyApplication.click();
        await this.btnOk.waitForExist({ timeout: 5000 });
        await this.btnOk.click();
    }

}

export default new TriggerPage();
