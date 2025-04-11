import { $ } from '@wdio/globals'
import Page from './page';

class LandingPage {

    get btnSkip() { return $('//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/button_skip"]'); } // just xpath, add nothing
    get btnExitUpdate() { return $('~Navigate up'); } // AccessibilityID, add ~ before locator

    public async skipGuideline (){
        await this.btnSkip.waitForExist({ timeout: 5000 });
        await this.btnSkip.click();
    }

    public async exitUpdate () {
        await this.btnExitUpdate.waitForExist({ timeout: 5000 });
        await this.btnExitUpdate.click();
    }
}

export default new LandingPage();
