import {BrowserContext,Browser,Page,test as base} from '@playwright/test'
import { LoginPage } from '../PlaywrightTypescript/Pages/Login';


type MyFixtures={
    browser:Browser;
    context:BrowserContext;
    page:Page;
    loginPage:LoginPage;
};

const test =base.extend<MyFixtures>({
    context : async({browser},use)=>{
        const context =await browser.newContext({ignoreHTTPSErrors:true,acceptDownloads:true});
        await use(context);
        await context.close();
    },

    page : async({context},use)=>{
        const page =await context.newPage();
        await use(page);
        await page.close();


    },

    loginPage:async({page},use)=>{
        await use(new LoginPage(page));  
    }
});