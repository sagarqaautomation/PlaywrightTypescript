import { Locator, Page } from "@playwright/test";

export class LoginPage{

    readonly username:Locator;
    readonly password:Locator;
    readonly SignIn:Locator;

    constructor(public page:Page)
    {
        this.username=page.locator('#username');
        this.password=page.locator('#password');
        this.SignIn=page.locator('#SignIn');
    }

    async navigation(url)
    {
        await this.page.goto(url);
    }

    
}

