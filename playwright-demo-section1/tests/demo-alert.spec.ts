import {test} from '@playwright/test';

test('modal test see alert',async({page}) => {
    await page.goto('https://demoqa.com/alerts');
    await page.click ('id=alertButton');
    
    test.setTimeout(0);
    await page.pause();

});

test('modal test confirm box',async({page}) => {
    await page.goto('https://demoqa.com/alerts');
    page.on("dialog", (dialog)=> dialog.accept());//ปกติ จะcancel ถ้าใส่คำสั่งสั่งนี้จะ accept
    await page.click ('id=confirmButton');
    
    test.setTimeout(0);
    await page.pause();

});