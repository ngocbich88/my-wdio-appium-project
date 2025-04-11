import { $ } from '@wdio/globals'

class HomePage {

    get btnAddMacro() { return $('android=new UiSelector().text("Add Macro")'); }

    public async addMacro (){
        await this.btnAddMacro.waitForExist({ timeout: 5000 });
        await this.btnAddMacro.click();
    }
}

export default new HomePage();
