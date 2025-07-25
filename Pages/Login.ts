import { Locator, Page } from "@playwright/test";
import * as ReusableMethods from '../ReusableMethods/reusablemethods';

export class LoginPage{

    readonly username:Locator;
    readonly password:Locator;
    readonly SignIn:Locator;

    constructor(public page:Page)
    {
        this.username=page.locator('#username');
        this.password=page.locator('#password');
        this.SignIn=page.locator('//textarea[@name="q"]');
    }

    async navigation(url)
    {
        await this.page.goto(url);
    }

    async validateElementIsVisible()
    {
        await ReusableMethods.checkElementIsVisible(this.SignIn);
    }

    
}

