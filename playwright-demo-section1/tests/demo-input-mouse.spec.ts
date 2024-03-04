import {test} from '@playwright/test';

test('access sub menu',async({page}) => {
    await page.goto ('https://playwright.dev/');
    await page.hover('css=div.navbar__item.dropdown--hoverable >> text=Node.js >> nth=0');
    await page.click('css=div.navbar__item.dropdown--hoverable  >> nth=0 >> css=a[href*="/python/"]');//ติดข้อนี้ click ไม่ได้
    await page.waitForSelector('text=Playwright for Python');

    test.setTimeout(0);
    await page.pause();//debug
    
});