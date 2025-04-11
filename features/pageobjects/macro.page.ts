import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MacroPage {
    /**
     * define selectors using getter methods
     */
    get btnAddTrigger() { return $('~Add Trigger'); } // AccessibilityID, add ~ before locator
    get btnAddAction() { return $('~Add Action'); }
    get btnAddConstrain() { return $('~Add constraint'); }
    public async addTrigger (){
        await this.btnAddTrigger.waitForExist({ timeout: 5000 });
        await this.btnAddTrigger.click();
    }

}

export default new MacroPage();
